import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Control, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { useMessageDialog } from '@/hooks/common/useMessageDialog';
import { useContactPost } from '@/hooks/contact/api/useContactPost';
import { formMessages } from '@/lib/data/messages';
import { ContactFormParam } from '@/lib/type/contact';

// ////////////////////////////////////////////////////////////////
// schema 定義
const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: formMessages.required('お名前') })
    .max(30, { message: formMessages.max('お名前', 30) }),
  email: z
    .string()
    .trim()
    .min(1, { message: formMessages.required('メールアドレス') })
    .max(100, { message: formMessages.max('メールアドレス', 100) })
    .email({ message: formMessages.email }),
  tel: z
    .string({ required_error: formMessages.required('電話番号') })
    .trim()
    .max(30, { message: formMessages.max('電話番号', 30) })
    .regex(/^.*[0-9]$/, { message: formMessages.tel }),
  company: z
    .string()
    .trim()
    .min(1, { message: formMessages.required('会社名・事業者名') })
    .max(50, { message: formMessages.max('会社名・事業者名', 50) }),
  body: z
    .string()
    .trim()
    .min(1, { message: formMessages.required('お問い合わせ内容') })
    .max(2000, { message: formMessages.max('お問い合わせ内容', 2000) }),
});

// schema から型を抽出
type ContactFormInput = z.infer<typeof schema>;

// フォームのデフォルト値
const DEFAULT_VALUES = {
  name: '',
  company: '',
  email: '',
  tel: '',
  body: '',
};

// ////////////////////////////////////////////////////////////////
// hook
type UseContactForm = () => {
  control: Control<ContactFormInput>;
  handleClickSubmit: () => void;
};

export const useContactForm: UseContactForm = () => {
  // React hook form
  const { control, handleSubmit, reset } = useForm<ContactFormInput>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(schema),
  });

  // 送信ボタンクリック時の処理
  const apiContactPost = useContactPost();
  const { openMessageDialog } = useMessageDialog();
  const onSubmit: SubmitHandler<ContactFormInput> = async (data) => {
    const param: ContactFormParam = data;

    // メールを送信する
    const isSuccess = await apiContactPost.execute(param);

    if (isSuccess) {
      // 成功時の処理
      await openMessageDialog({
        title: '送信しました',
        content:
          'お問い合わせありがとうございます。メールにてご返信させていただきますので、今しばらくお待ちください。',
      });

      // フォームのリセット
      reset();
    } else {
      // 失敗時の処理
      await openMessageDialog({
        title: '送信に失敗しました',
        content:
          '大変申し訳ありませんが、何らかの理由でフォームの送信に失敗しました。もう一度試しても同じメッセージが表示される場合、support@reterior.jp 宛に直接お問い合わせください。',
      });
    }
  };

  return {
    control,
    handleClickSubmit: handleSubmit(onSubmit),
  };
};
