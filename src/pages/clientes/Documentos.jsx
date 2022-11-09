import { uploadBytes, ref } from "firebase/storage";
import { useRef } from "react";
import { storage, auth } from "../../firebase";

const Documentos = () => {
  const fileRef = useRef();

  const handleOpenFilePicker = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleChangeFile = async (e) => {
    const file = e.target.files[0];
    const fileName = file.nombre;
    const fileRef = ref(storage, `files/${auth.currentUser.uid}/${fileName}`);
    const fileUpload = await uploadBytes(fileRef, file);
    console.log(fileUpload);
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
    </div>
  );
};
export default Documentos;
