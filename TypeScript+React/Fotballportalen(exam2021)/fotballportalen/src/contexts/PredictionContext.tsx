import { createContext, FC, useEffect, useState } from "react";
import { IPrediction } from "../interfaces/IPrediction";
import { PredictionService } from "../services/PredictionService";
import { PredictionContextType } from "../types/PredictionContextType";

export const PredictionContext = createContext<PredictionContextType | null>(null);

export const PredictionProvider: FC = ({children}) => {
    const [predictions, setPredictions] = useState<IPrediction[]>([]);

    useEffect(() => {
        getPredictions();
    }, [])

    const getPredictions = async () => {
        const _predictions = await PredictionService.getAllPredictions();
        setPredictions(_predictions);
    }
    const savePrediction = async (newPrediction: IPrediction) => {
        const newPred = await PredictionService.postNewPrediction(newPrediction);
        setPredictions([...predictions, newPred]);
        // I useState ønsker man ikke mutasjoner. man erstatter gamle array med et nytt
    }

    return(
        <>
        <PredictionContext.Provider value={{predictions, savePrediction}}>
            {children}
        </PredictionContext.Provider>
        </>
    )
}