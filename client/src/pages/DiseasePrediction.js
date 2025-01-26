import React from 'react'
import MultiValue from '../components/MultiValue'

const DiseasePrediction = () => {
  return (
    <div>
      <div style={{display: 'flex', alignItems: "center",height: '90vh',fontFamily: "poppins",padding: "30px",flexDirection: "column"}}>
        <div style={{width: "70%"}}>
            <h1 style={{textAlign: "center"}}>Disease Prediction System</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eius commodi ullam rerum nam sapiente omnis harum iure esse voluptates tempora recusandae quae aut consequatur atque, vitae, nemo blanditiis, maiores impedit iusto non pariatur error nesciunt libero? Odit harum sunt dicta assumenda quasi, pariatur commodi?</p>
        </div>
        <div style={{width: "70%"}}>
            <MultiValue/>
        </div>
      </div>
    </div>
  )
}

export default DiseasePrediction

