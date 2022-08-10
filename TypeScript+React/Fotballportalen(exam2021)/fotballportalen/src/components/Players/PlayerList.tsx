import { FC, useContext, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { PlayerContext } from "../../contexts/PlayerContext";
import { IPlayer } from "../../interfaces/IPlayer"
import { PlayerContextType } from "../../types/PlayerContextType";
import PlayerItem from "./PlayerItem";

const PlayerList : FC = () => {

    const { players } = useContext(PlayerContext) as PlayerContextType;

    const createPlayerList = () => {
        
        return players.map( ( player: IPlayer, key: number ) => {   
            if(player.element_type === 1){
                player.position = "Keeper"
            }else if(player.element_type === 2){
                player.position = "Forsvar"
            }else if(player.element_type === 3){
                player.position = "Midtbane"
            }else if(player.element_type === 4){
                player.position = "Angrep"
            }
            return(
                <Col className="mt-5" key={key}>
                    <PlayerItem
                        first_name={player.first_name}
                        second_name={player.second_name}
                        code={player.code}
                        position={player.position}
                        team={player.team}
                        goals_scored={player.goals_scored}
                        assists={player.assists}
                        minutes={player.minutes}
                        clean_sheets={player.clean_sheets}
                        yellow_cards={player.yellow_cards}
                        red_cards={player.red_cards}
                    />
                </Col>
            )
        });
    }

    return (
        <section>
            <Container className="mb-5">
                <Row className="mt-5" >
                    { createPlayerList() }
                </Row>
            </Container>        
        </section>
    )
}

export default PlayerList;