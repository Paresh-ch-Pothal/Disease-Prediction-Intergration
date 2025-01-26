// import React, { useEffect, useState } from 'react';
// import Chip from '@mui/material/Chip';
// 
// import Autocomplete from '@mui/material/Autocomplete';
// import { Button } from '@mui/material';

// export default function MultiValue() {


//     return (

//     );
// }


import React, { useEffect, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const MultiValue = () => {
    const [options, setOptions] = useState([]); // Options for the autocomplete
    const [value, setValue] = useState([]); // Selected values
    const [predictions, setpredictions] = useState([])

    // Fetch symptoms from the API
    const getAllSymptoms = async () => {
        try {
            const response = await fetch("https://disease-prediction-system-flask-1.onrender.com/getAllSymptoms", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data);

            if (data?.Symptoms) {
                setOptions(data.Symptoms.map((symptom) => ({ title: symptom })));
            }
        } catch (error) {
            console.error("Error fetching symptoms:", error);
        }
    };

    const getPrediction = async () => {
        try {
            if (value.length == 0) {
                return alert("Please select symptoms to predict disease")
            }
            const symptoms = value.map((val) => val.title);
            console.log(symptoms)
            const response = await fetch("https://disease-prediction-system-flask-1.onrender.com/predict", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ symptoms })
            })
            const data = await response.json();
            console.log(data);
            setpredictions(data.predictions);
        } catch (error) {

        }
    }

    // Fetch symptoms on component mount
    useEffect(() => {
        getAllSymptoms();
    }, []);
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <Autocomplete
                    multiple
                    id="symptoms-autocomplete"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue); // Update selected values
                    }}
                    options={options}
                    getOptionLabel={(option) => option.title} // How to display the options
                    renderTags={(tagValue, getTagProps) =>
                        tagValue.map((option, index) => (
                            <Chip key={index} label={option.title} {...getTagProps({ index })} />
                        ))
                    }
                    style={{ width: "100%" }}
                    renderInput={(params) => (
                        <TextField {...params} label="Select Symptoms" placeholder="Start typing..." />
                    )}
                />
                <Button onClick={getPrediction} variant="outlined" sx={{ marginTop: "20px" }}>Predict</Button>

                {predictions.length === 0 ? (<div><h3>Please Select Symptoms To Predict Disease</h3></div>) : (
                    <div>
                        <div><h5>Disease: </h5>
                            <span>{predictions.disease}</span>
                        </div>
                        <div>
                            <h5>Descripton: </h5>
                            <span>{predictions.description}</span>
                        </div>
                        <div>
                            <h5>Precautions: </h5>
                            <span>{predictions.precautions}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default MultiValue

