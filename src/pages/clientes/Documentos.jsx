import { useRef } from "react";

const Documentos = () => {
  const fileRef = useRef();

  const handleOpenFilePicker = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleChangeFile = () => {};
  return (
    <div>
      <h1>Documentos</h1>
      <button onClick={handleOpenFilePicker}>Subir archivo</button>
      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={handleChangeFile}
      />
    </div>
  );
};
export default Documentos;
