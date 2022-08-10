import axios from "axios";
import { IPrediction } from "../interfaces/IPrediction";

export const PredictionService = (function(){
    const urlToPredictionController = "https://localhost:5001/Prediction";

    const getAllPredictions = async () => {
        const result = await axios.get(urlToPredictionController);
        return result.data as IPrediction[];
    }
    const postNewPrediction = async (newPrediction: IPrediction) => {
        const result = await axios.post(urlToPredictionController, newPrediction);
        return result.data as IPrediction;
    }

    return {
        getAllPredictions,
        postNewPrediction
    }
    
}());