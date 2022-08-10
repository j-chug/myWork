import { IPrediction } from "../interfaces/IPrediction";

export type PredictionContextType = {
    predictions: IPrediction[]
    savePrediction: (newPrediction: IPrediction) => void
}