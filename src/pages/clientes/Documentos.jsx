import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";
import { useRef, useState, useEffect } from "react";
import { storage, auth } from "../../firebase";
import "../styles/documentos.css";
import withAuth from "../../utils/withAuth";
import imgPDF from "../../assets/pdf.png";

const Documentos = () => {
  const fileRef = useRef();

  const [getData, setGetData] = useState(true);
  const [dataPdf, setDataPdf] = useState([]);

  useEffect(() => {
    if (getData) {
      getAllFiles();
    }
  }, [getData]);

  console.log("state", dataPdf);

  const handleOpenFilePicker = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const getAllFiles = async () => {
    const listFileRef = ref(storage, `files/${auth.currentUser.uid}`);
    const allFiles = await listAll(listFileRef);
    const result = allFiles.items.map((item) => {
      const fileName = item.name;
      return { name: fileName };
    });
    setDataPdf(result);
    setGetData(false);
  };

  const handleChangeFile = async (e) => {
    const file = e.target.files[0];
    const fileName = file.name;
    const fileRef = ref(storage, `files/${auth.currentUser.uid}/${fileName}`);
    const res = await uploadBytes(fileRef, file);
    if (res) {
      setGetData(true);
    }
  };

  const getUrl = async (name) => {
    const listFileRef = ref(storage, `files/${auth.currentUser.uid}/${name}`);
    const url = await getDownloadURL(listFileRef);
    console.log(url);
    window.open(url, "_blank");
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
          {dataPdf.length &&
            !getData &&
            dataPdf.map((item, i) => (
              <div key={i} onClick={() => getUrl(item.name)}>
                <img src={imgPDF} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default withAuth(Documentos);
