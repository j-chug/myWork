import { FC } from "react";
import { ITeam } from "../../interfaces/ITeam";
import { Card} from "react-bootstrap";

const TeamItem : FC<ITeam> = ({ name, image, stadium, capacity, manager, founded, alias, team_id }) => {
    return (
        <article>
            <Card style={{ width: '20rem', border: '2px solid black', boxShadow: '3px 3px 2px' }} className="m-auto" >
            <Card.Img variant="top" className="img-fluid w-50 m-auto" src={`https://localhost:5001/images/${image}`} />
                <Card.Body style={{backgroundColor: "black", color: "#f7ce3e"}}>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Grunnlagsår: {founded}</Card.Subtitle>
                    <Card.Text>Stadium: {stadium}, med en kapasitet på {capacity} tilskuere</Card.Text>
                    <Card.Text>Nåværende trener: {manager}</Card.Text>
                    <Card.Text>Også kjent som: {alias}</Card.Text>
                </Card.Body>
            </Card>
        </article>
    )
}

export default TeamItem;