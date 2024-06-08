import fs from 'fs';
import path from 'path';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';

const UploadImage = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // acceptedFilesはドラッグ＆ドロップされたファイルの配列です
    acceptedFiles.forEach((file) => {
      // ファイルの新しい名前を作成（ユニークなIDを使用することで重複を防ぎます）
      const fileName = `${uuidv4()}.png`;
      // ファイルの保存先のパスを構築します
      const destination = path.join(process.cwd(), 'public', 'blogs', fileName);
      // ファイルをpublic/blogsディレクトリに移動します
      fs.renameSync(file.path, destination);
      console.log(`File ${file.path} has been saved as ${fileName}`);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag 'n' drop some PNG files here, or click to select files</p>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #0087F7',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default UploadImage;
