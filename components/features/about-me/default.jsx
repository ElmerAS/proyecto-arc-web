import React from 'react'
import "./style.css";
import PropTypes from 'prop-types'
import getProperties from 'fusion:properties'
import { useAppContext } from 'fusion:context'

function AboutMe(props) {
  const {arcSite} = useAppContext();
  const {name} = getProperties(arcSite);
  const { customFields: {text,dataList,img} } = props;
  const arr = dataList ? Object.entries(dataList) : [];

  const formatRichText = (text) => {
    let aux = text.split("\n");
    return aux.map((item,idx)=>{
      return (<p key={idx}>{item}</p>)
    })
  }

  return (
    <div className="about-me container my-3">
      <h2><b>{name}</b></h2>
      <div style={{ textShadow: "-1px -1px 1px #3a8ae7", color: "#8c8c8c" }}>{formatRichText(text)}</div>
      {img && <img src={img} alt="Imagen" className="image-profile my-2"/>}
      <div className="divider"></div>
      <div>
        {arr.length > 0 && arr.map(([key,value],idx)=>{
          return (<p key={idx}><b style={{textTransform:"capitalize"}}>&#9658; {key}:</b> {value}</p>)
        })}
      </div>
    </div>
  )
}

AboutMe.propTypes = {
  customFields: PropTypes.shape({
    text: PropTypes.richtext.tag({
      name: "Texto Custom",
      description: "Texto adicional para el componente"
    }),
    dataList: PropTypes.kvp.tag({
      name: "Lista Datos",
      description: "Lista de datos a renderizar en el componente"
    }),
    img: PropTypes.url.tag({
      name: "Imagen",
      description: "Imagen para el componente"
    })
  }),
}
AboutMe.label = 'Sobre mi'
export default AboutMe