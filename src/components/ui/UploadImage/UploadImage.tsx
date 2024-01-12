import { ChangeEvent, DragEvent, FormEvent, useState } from 'react';
import { useCvStore } from '../../../store';

function UploadImage() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<undefined | File>(undefined);
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const setProfileImage = useCvStore((state) => state.setProfileImage);
  const setCurrentEdit = useCvStore((state) => state.setCurrentEdit);

  const handleDrag = (e: FormEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      const imageFile = new FileReader();
      imageFile.onload = () => setPreview(imageFile.result);
      imageFile.readAsDataURL(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement & { files: FileList };
    setFile(target.files[0]);
    const imageFile = new FileReader();
    imageFile.onload = () => setPreview(imageFile.result);
    imageFile.readAsDataURL(target.files[0]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProfileImage(preview as string);
    setCurrentEdit(null);
  };
  return (
    <form
      className=" relative rounded-full flex flex-col items-center"
      onDragEnter={handleDrag}
      onSubmit={handleSubmit}>
      <input
        className="hidden"
        id="upload-image-file"
        onChange={handleChange}
        type="file"
        accept="image/jpeg image/jpg image/png"
        multiple={false}
      />
      <label
        htmlFor="upload-image-file"
        className={`overflow-hidden h-[150px] w-[150px] border border-dashed flex-col border-cyan-600 flex justify-center items-center rounded-full text-sm text-center bg-no-repeat bg-cover bg-center ${
          dragActive ? 'bg-cyan-300' : 'bg-white'
        }`}
        style={{ backgroundImage: preview ? `URL(${preview})` : '' }}>
        <p className="px-4 hover:bg-white">Drag and drop your image here or</p>
        <p className="hover:underline cursor-pointer hover:bg-white">
          Upload an image
        </p>
      </label>

      {dragActive && (
        <div
          className="absolute w-full h-full top-0 left-0 bottom-0 right-0"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        />
      )}

      {file && <button type="submit">submit</button>}
    </form>
  );
}

export default UploadImage;
