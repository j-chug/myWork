import { FC } from "react";
import { ITeamInfo } from "../../interfaces/ITeamInfo";
import { Card } from "react-bootstrap";

const ClubFilterItem : FC<ITeamInfo> = ({ image }) => {
    return (
        <article>
            <Card style={{ width: '5rem', borderRadius: '50px'}} className="m-auto"> 
                <Card.Img variant="top" className={"img-fluid"} src={`https://localhost:5001/images/${image}`} alt={image}></Card.Img>
            </Card >
        </article>
    )
}

export default ClubFilterItem;