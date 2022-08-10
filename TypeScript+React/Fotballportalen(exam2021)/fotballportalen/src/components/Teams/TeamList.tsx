import { FC, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TeamContext } from "../../contexts/TeamContext";
import { ITeam } from "../../interfaces/ITeam";
import { TeamContextType } from "../../types/TeamContextType";
import TeamItem from "./TeamItem";

const TeamList: FC = () => {
    
    const { teams } = useContext(TeamContext) as TeamContextType;
    
    const createTeamList = () => {
        return teams.map( ( team: ITeam, key: number) => {
            return(
                <Col className="mt-4 p-0" key={key}>
                    <TeamItem
                        name={team.name}
                        image={team.image}
                        stadium={team.stadium}
                        capacity={team.capacity}
                        manager={team.manager}
                        founded={team.founded}
                        alias={team.alias}
                        team_id={team.team_id}   
                    />
                </Col>
                
            )
        });
    }

    return (
        <section>
            <Container className="mb-5">
                <h4>Hei! Her finner du diverse informasjon om de forskjellige lagene i Premier League</h4>
                <Row> 
                    { createTeamList() }
                </Row>
            </Container> 
        </section>
    )
}

export default TeamList;