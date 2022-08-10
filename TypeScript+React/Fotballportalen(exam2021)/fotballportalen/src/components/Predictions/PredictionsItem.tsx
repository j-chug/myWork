import { FC } from "react";
import { IPrediction } from "../../interfaces/IPrediction";

const PredictionsItem : FC<IPrediction> = ({ username, number1, number2, number3, number4, number5 }) => {
    return (
        <article style={{backgroundColor: "#f7ce3e", border: "1px solid black", borderRadius: "10px"}}>
            <h5>{username}'s topp 5:</h5>
            <ol>
                <li>{number1}</li>
                <li>{number2}</li>
                <li>{number3}</li>
                <li>{number4}</li>
                <li>{number5}</li>
            </ol>
        </article>
    )
}

export default PredictionsItem;