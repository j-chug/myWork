import { FC } from "react";
import PredictionList from "../components/Predictions/PredictionList"
import AddPrediction from "../components/Predictions/AddPrediction"
import { PredictionProvider } from "../contexts/PredictionContext"

const PredictionsPage: FC = () => {
    return(
        <PredictionProvider>
            <AddPrediction></AddPrediction>
            <PredictionList></PredictionList>
        </PredictionProvider>
    )
}
export default PredictionsPage;