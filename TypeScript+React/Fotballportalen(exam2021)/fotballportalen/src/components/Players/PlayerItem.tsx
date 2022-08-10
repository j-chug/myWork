import { FC } from "react";
import { Card } from "react-bootstrap";
import { IPlayer } from "../../interfaces/IPlayer"
import "../Players/Players.css"

const PlayerItem : FC<IPlayer> = ({first_name, second_name, code, position, team, goals_scored, assists, minutes, yellow_cards, red_cards}) => {
    return(
        <article>
            <Card style={{ width: '12rem', border: '2px solid', boxShadow: '5px 5px 5px ' }} className="m-auto mb-5 cardStyle">
                <Card.Img variant="top" className={"img-fluid"} src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${code}.png`} alt={first_name}></Card.Img>
                    <Card.Body style={{backgroundColor: "black", color: "#f7ce3e"}}>
                    <Card.Title>{second_name}, {first_name}</Card.Title>
                        <Card.Text className="mb-0">Posisjon: {position}</Card.Text>
                        <Card.Text className="mb-0">Lag: {team}</Card.Text>
                        <Card.Text className="mb-0">Mål: {goals_scored}</Card.Text>
                        <Card.Text className="mb-0">Målgivende: {assists}</Card.Text>
                        <Card.Text className="mb-0">Minutter spilt: {minutes}</Card.Text>
                        <Card.Text className="mb-0">Gule kort: {yellow_cards}</Card.Text>
                        <Card.Text className="mb-0">Røde kort: {red_cards}</Card.Text>
                    </Card.Body>
            </Card >
        </article>
    )
}

export default PlayerItem;