import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";
import { useRef } from "react";
import { storage, auth } from "../../firebase";

const Documentos = () => {
  const fileRef = useRef();

  const handleOpenFilePicker = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const getAllFiles = async () => {
    const listFileRef = ref(storage, `files/${auth.currentUser.uid}`);
    const allFiles = await listAll(listFileRef);
    for (let item of allFiles.items) {
      const fileName = item.name;
      console.log(fileName);
      const url = await getDownloadURL(item);
      console.log(url);
    }
  };

  const handleChangeFile = async (e) => {
    const file = e.target.files[0];
    const fileName = file.name;
    const fileRef = ref(storage, `files/${auth.currentUser.uid}/${fileName}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    console.log(url);
  };

  return (
    <div>
      <h1>Documentos</h1>
      <button onClick={handleOpenFilePicker}>Subir archivo</button>
      <input
        type="file"
        ref={fileRef}
        accept=".pdf"
        style={{ display: "none" }}
        onChange={handleChangeFile}
      />
      <button onClick={getAllFiles}>Get Files</button>
    </div>
  );
};
export default Documentos;
