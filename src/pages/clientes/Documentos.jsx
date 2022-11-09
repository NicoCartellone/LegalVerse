import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";
import { useRef, useState } from "react";
import { storage, auth } from "../../firebase";
import "../styles/documentos.css";

const Documentos = () => {
  const fileRef = useRef();

  const initialValues = [{ name: "", url: "" }];
  const [dataPdf, setDataPdf] = useState(initialValues);

  console.log(dataPdf);

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
      const url = await getDownloadURL(item);
      setDataPdf([{ ...dataPdf, name: fileName, url: url }]);
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
      <div className="get">
        <button onClick={getAllFiles}>Get Files</button>
      </div>

      <div className="documentos-textos">
        <h1>Gestión de Documentos</h1>
        <button onClick={handleOpenFilePicker}>Subir archivo</button>
        <input
          type="file"
          ref={fileRef}
          accept=".pdf"
          style={{ display: "none" }}
          onChange={handleChangeFile}
        />
      </div>

      <div className="buscador">
        <input type="text" placeholder="Buscar entre tus documentos" />{" "}
        <button> Buscar </button>
        <div>
          {dataPdf.map((item) => (
            <div key={item.url}>
              <p>{item.name}</p>
              <p>{item.ulr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Documentos;
