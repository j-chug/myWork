import React, { FC, useContext, useEffect, useState } from "react";
import { TeamInfoContext } from "../../contexts/TeamInfoContext";
import { ITeamInfo } from "../../interfaces/ITeamInfo";
import { TeamInfoContextType } from "../../types/TeamInfoContextType";
import ClubFilterItem from "./ClubFilterItem";
import { Col, Container, Row } from "react-bootstrap";
import { PlayerContext } from "../../contexts/PlayerContext";
import { PlayerContextType } from "../../types/PlayerContextType";
import { IPlayer } from "../../interfaces/IPlayer";
import PlayerItem from "./PlayerItem";


const ClubFilterList : FC = () => {
    const {teamInfo} = useContext(TeamInfoContext) as TeamInfoContextType;
    const {players} = useContext(PlayerContext) as PlayerContextType;

    const [teamFilter, setTeamFilter] = useState<Number>(1);

    const updateFilter = (event: React.MouseEvent<HTMLElement>, teamId: number) => {
        setTeamFilter(teamId);
    }
   

    const createTeamImages = () => {
        return teamInfo.map((team: ITeamInfo, key: number) => {
                return(
                    <Col className="m-auto">
                    <button onClick={(event: React.MouseEvent<HTMLElement>) =>{
                        updateFilter(event, team.team_id)
                    }}>
                        <ClubFilterItem
                            key={key}
                            name={team.name}
                            image={team.image}
                            team_id={team.team_id}
                        />
                    </button>
                    </Col>
                    
                )
        });
    }

    const getPlayersByTeam = (teamId: number) => {
        return players.map((player: IPlayer, key: number) => {
            if(teamFilter === player.team){
                return(
                    <Col key={key}>
                    <PlayerItem
                    first_name={player.first_name}
                    second_name={player.second_name}
                    code={player.code}
                    position={player.position}
                    team ={player.team}
                    goals_scored={player.goals_scored}
                    assists={player.assists}
                    minutes={player.minutes}
                    yellow_cards={player.yellow_cards}
                    red_cards={player.red_cards}
                    />
                    </Col>
                )
            }
        })
    }

    return (
        <Container>
            <h4>Trykk på ett av lagene for å vise spillerne i laget</h4>
            <Row className="mb-4">
                { createTeamImages() }
            </Row>
            <Row>
                { getPlayersByTeam(2) }
            </Row>
        </Container>
    )
}
export default ClubFilterList;