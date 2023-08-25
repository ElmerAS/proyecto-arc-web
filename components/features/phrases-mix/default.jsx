import React from 'react'
import {useContent} from 'fusion:content'
import PropTypes from 'prop-types'

function PhrasesMix (props) {
  const { customFields: { author } } = props
  const res = useContent({ source: 'dataApi', query: { idp: (author || 'Kiyoski') } })
  const rdm = Math.floor(Math.random() * res?.length)
  return (
    res?.length>0 && 
    <div className='mx-auto p-3' style={{textAlign:"center",maxWidth:"500px"}}>
      <p style={{marginBottom: "2.5px"}}><i>"{res[rdm]?.phrase}"</i></p>
      <p style={{fontWeight:"500",marginTop: "2.5px"}}>{res[rdm]?.fullName}</p>
    </div>
  )
}

PhrasesMix.label = 'Mix Frases'
PhrasesMix.propTypes = {
  customFields: PropTypes.shape({
    author: PropTypes.string.tag({
      label: 'Author',
      description: 'Phrase author',
    })
  })
}
export default PhrasesMix