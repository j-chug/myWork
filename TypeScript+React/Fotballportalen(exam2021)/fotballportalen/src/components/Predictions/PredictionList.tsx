import { FC, useContext } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { PredictionContext } from "../../contexts/PredictionContext"
import { IPrediction } from "../../interfaces/IPrediction";
import { PredictionContextType } from "../../types/PredictionContextType"
import PredictionsItem from "./PredictionsItem";

const PredictionList : FC = ({}) => {
    const {predictions} = useContext(PredictionContext) as PredictionContextType;

    const createPredictionList = () => {
        return predictions.map((prediction: IPrediction, key: number) => {
            return(
                <Col key={key}>
                <PredictionsItem
                    username={prediction.username}
                    number1={prediction.number1}
                    number2={prediction.number2}
                    number3={prediction.number3}
                    number4={prediction.number4}
                    number5={prediction.number5}
                />
            </Col>
            )});
    }

    return(
        <section>
            <Container>
                <Row>
                    {createPredictionList()}
                </Row>
            </Container>
        </section>
    )
}
export default PredictionList;