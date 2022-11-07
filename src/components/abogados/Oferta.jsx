import "../../pages/styles/ofertas.css"
export function Oferta(props){
    return<>
    <div className="separacionOfertas">   
    <div className='contenedor-oferta'>
        
      
      <div className='contenedor-texto-oferta'>
      <h1>{props.tipo}</h1>
        <p className='solicitante'>
          Solicitante: <strong>{props.solicitante}</strong> 
        </p>
        <p className='texto-oferta'>{props.texto}</p>
      </div>
      
      <div className="botonera">
      <h2 className="fechaOferta">  Fecha: <strong>{props.fecha}</strong> </h2>
      <button className="aceptar">Aceptar</button>
      <button className="rechazar">Rechazar</button>
      </div>

    </div>
    </div>  
    </>
 }