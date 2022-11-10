import "../styles/firmaDigital.css";
import Toast from "react-bootstrap/Toast";
import { useEffect, useState, useRef } from "react";
import withAuth from "../../utils/withAuth";

import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage, auth } from "../../firebase";

import imgPDF from "../../assets/pdf.png";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ToastContainer from "react-bootstrap/ToastContainer";
const FirmaDigital = () => {
  const [show, setShow] = useState(false);

  const [getData, setGetData] = useState(true);
  const [dataPdf, setDataPdf] = useState([]);

  useEffect(() => {
    if (getData) {
      getAllFiles();
    }
  }, [getData]);

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

  const getUrl = async (name) => {
    const listFileRef = ref(storage, `files/${auth.currentUser.uid}/${name}`);
    const url = await getDownloadURL(listFileRef);
    window.open(url, "_blank");
  };

  return (
    <div className="firma">
      <ToastContainer position="bottom-start">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          bg="success"
          style={{
            color: "white",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">LegalVerse</strong>
          </Toast.Header>
          <Toast.Body>El documento fue firmado!</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className="firma-textos">
        <h1>Firma digital</h1>
        <p> Tus documentos firmados en un solo lugar</p>
      </div>
      <div className="firma-documentos">
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
                      <button onClick={() => setShow(true)}>Firmar</button>
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
export default withAuth(FirmaDigital);
