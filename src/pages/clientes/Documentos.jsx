import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";
import { useRef, useState, useEffect } from "react";
import { storage, auth } from "../../firebase";
import "../styles/documentos.css";
import withAuth from "../../utils/withAuth";
import imgPDF from "../../assets/pdf.png";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Formik } from "formik";

import Modal from "react-bootstrap/Modal";

const Documentos = () => {
  const fileRef = useRef();

  const [getData, setGetData] = useState(true);
  const [dataPdf, setDataPdf] = useState([]);
  const [filteredName, setFilteredName] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const resultado = dataPdf.filter(
  //   (data) => data.name === "Trabajo Práctico Integrador.pdf"
  // );
  // resultado.map((item) => {
  //   console.log(item.name);
  // });

  useEffect(() => {
    if (getData) {
      getAllFiles();
    }
  }, [getData]);

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
    window.open(url, "_blank");
  };

  // const searchFilter = (values) => {
  //   if (values) {
  //     const newData = dataPdf.filter((item) => {
  //       const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
  //       const textData = values.search.toUpperCase();
  //       return itemData.indexOf(textData);
  //     });
  //     setFilteredName(newData);
  //     setSearch(text);
  //   } else {
  //     setFilteredName(dataPdf);
  //   }
  // };

  return (
    <div>
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
        <Stack
          direction="horizontal"
          gap={2}
          className="d-flex justify-content-center"
        >
          <Formik
            initialValues={{
              search: "",
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <input
                type="text"
                name="search"
                placeholder="Buscar entre tus documentos"
                value={values.search}
                onChange={handleChange("search")}
                onBlur={handleBlur("search")}
              />
            )}
          </Formik>
          <button className="btn-buscar"> Buscar </button>
        </Stack>
        <Stack
          direction="horizontal"
          gap={5}
          className="d-flex justify-content-center p-5"
        >
          {dataPdf.length &&
            !getData &&
            dataPdf.map((item, i) => (
              <div key={i}>
                <Row xs={1} md={2} className="g-1">
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Button
                        variant="primary"
                        onClick={() => getUrl(item.name)}
                      >
                        <Card.Img
                          variant="top"
                          src={imgPDF}
                          style={{ width: 50, height: 50 }}
                        />
                        <Card.Text>{item.name}</Card.Text>
                      </Button>
                      <Button variant="danger">Eliminar</Button>
                    </Card>
                  </Col>
                </Row>
              </div>
            ))}
        </Stack>
      </div>
    </div>
  );
};
export default withAuth(Documentos);
