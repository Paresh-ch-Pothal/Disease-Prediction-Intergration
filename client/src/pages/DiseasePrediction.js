import React from 'react'
import MultiValue from '../components/MultiValue'

const DiseasePrediction = () => {
  return (
    <div>
      <div style={{display: 'flex', alignItems: "center",height: '90vh',fontFamily: "poppins",padding: "30px",flexDirection: "column"}}>
        <div style={{width: "70%"}}>
            <h1 style={{textAlign: "center"}}>Disease Prediction System</h1>
            <p>A disease prediction system uses data such as medical history, lifestyle, and genetics to predict the likelihood of a person developing a disease. By analyzing patterns in patient data, it can help identify risks early, allowing for preventive measures and timely treatments. These systems use machine learning algorithms to make accurate predictions, enabling healthcare providers to offer better care and improve patient outcomes.</p>
        </div>
        <div style={{width: "70%"}}>
            <MultiValue/>
        </div>
      </div>
    </div>
  )
}

export default DiseasePrediction

