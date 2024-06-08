// pages/KeyboardEventPage.tsx

import { useEffect, useState } from 'react';

interface KeyInfo {
  key: string;
  code: string;
}

type ContentType = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: "2024-06-02T08:34:11.143Z",
  revisedAt: "2024-06-02T08:34:11.143Z",
  title: "test",
  content: "<p>test</p><p><code>tstste</code></p>",
  category: null
}

const virtualKeyCodes: Record<string, string> = {
  F13: '0x0064',
  // 他のキーの仮想キーコードを追加することができます
};

const KeyboardEventPage: React.FC = () => {
  const [keyInfo, setKeyInfo] = useState<KeyInfo>({ key: '', code: '' });
  const [content, setContent] = useState();

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key;
    const code = event.code;
    const virtualKeyCode = virtualKeyCodes[key] || 'N/A';

    setKeyInfo({ key, code: virtualKeyCode });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <h1>Keyboard Event</h1>
      <p>Press any key to see its name and virtual key code.</p>
      <div>
        <strong>Key:</strong> {keyInfo.key}
      </div>
      <div>
        <strong>Virtual Key Code:</strong> {keyInfo.code}
      </div>
    </div>
  );
};

export default KeyboardEventPage;
