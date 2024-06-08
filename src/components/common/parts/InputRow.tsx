import OptionalChip from '@/components/common/parts/OptionalChip';
import RequiredChip from '@/components/common/parts/RequiredChip';

type InputRowProps = {
  label: string;
  isRequired?: boolean;
  children: React.ReactNode;
};

const InputRow = (props: InputRowProps): JSX.Element => {
  const { label, isRequired, children } = props;

  return (
    <div className="flex flex-col items-start gap-4">
      <label className="flex shrink-0 items-start justify-start gap-2 md:justify-between">
        <span className="text-base">{label}</span>
        {isRequired ? <RequiredChip /> : <OptionalChip />}
      </label>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default InputRow;
