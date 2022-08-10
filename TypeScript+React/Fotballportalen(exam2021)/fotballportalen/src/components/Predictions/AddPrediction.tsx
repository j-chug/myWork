import React, { ChangeEvent, FC, FormEvent, useContext, useEffect, useState } from "react"
import { Button, Container, Form } from "react-bootstrap";
import { PredictionContext } from "../../contexts/PredictionContext"
import { PredictionContextType } from "../../types/PredictionContextType"
import { IPrediction } from "../../interfaces/IPrediction";

const AddPrediction : FC = () => {
    const { savePrediction } = useContext(PredictionContext) as PredictionContextType;

    const [name, setname] = useState<String>('');
    const [n1, setn1] = useState<String>('');
    const [n2, setn2] = useState<String>('');
    const [n3, setn3] = useState<String>('');
    const [n4, setn4] = useState<String>('');
    const [n5, setn5] = useState<String>('');

    const userInputName = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setname(value);
    }

    const userInput1 = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setn1(value);
    }
    const userInput2 = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setn2(value);
    }

    const userInput3 = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setn3(value);
    }

    const userInput4 = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setn4(value);
    }

    const userInput5 = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setn5(value);
    }



    const handleSubmit = () => {
        const newPrediction = {username: name, number1: n1, number2: n2, number3: n3, number4: n4, number5: n5} as IPrediction;
        savePrediction(newPrediction);
    }
    

    //Under hadde det vært kult om vi ordna lagnavn fra dropdown
    return(
        <Container>
            <h1>Hvem tror du vinner Premier League?</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Navn</Form.Label>
                        <Form.Control type="text" id="name" name="name" onChange={userInputName} placeholder="Skriv ditt navn"/>
                    </Form.Group>

                    <label htmlFor="n1" className="form-label">1. plass</label>
                    <input className="form-control predictionInputfields" list="alloptions" id="n1" name="n1" onChange={userInput1} placeholder="Søk på lag..."/>

                    <label htmlFor="n2" className="form-label">2. plass</label>
                    <input className="form-control predictionInputfields" list="alloptions" id="n2" name="n2" onChange={userInput2} placeholder="Søk på lag..."/>

                    <label htmlFor="n3" className="form-label">3. plass</label>
                    <input className="form-control predictionInputfields" list="alloptions" id="n3" name="n3" onChange={userInput3} placeholder="Søk på lag..."/>

                    <label htmlFor="n4" className="form-label">4. plass</label>
                    <input className="form-control predictionInputfields" list="alloptions" id="n4" name="n4" onChange={userInput4} placeholder="Søk på lag..."/>

                    <label htmlFor="n5" className="form-label">5. plass</label>
                    <input className="form-control predictionInputfields" list="alloptions" id="n5" name="n5" onChange={userInput5} placeholder="Søk på lag..."/>

                    <datalist id="alloptions">
                        <option value="Arsenal"/>
                        <option value="Aston Villa"/>
                        <option value="Brentford"/>
                        <option value="Brighton"/>
                        <option value="Burnley"/>
                        <option value="Chelsea"/>
                        <option value="Crystal Palace"/>
                        <option value="Everton"/>
                        <option value="Leeds"/>
                        <option value="Leicester"/>
                        <option value="Liverpool"/>
                        <option value="Manchester City"/>
                        <option value="Manchester United"/>
                        <option value="Newcastle"/>
                        <option value="Norwich"/>
                        <option value="Southampton"/>
                        <option value="Tottenham"/>
                        <option value="Watford"/>
                        <option value="West Ham"/>
                        <option value="Wolverhampton"/>
                    </datalist>
                <Button className="mt-4 mb-4" onClick={(event: React.MouseEvent<HTMLElement>) => {handleSubmit()}}>Send inn tips!</Button>
        </Container>
    )
}
export default AddPrediction;
