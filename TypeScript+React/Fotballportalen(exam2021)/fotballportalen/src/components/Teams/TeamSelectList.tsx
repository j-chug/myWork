import { FC, useContext } from "react";
import { Form } from "react-bootstrap";
import { TeamContext } from "../../contexts/TeamContext";
import { ITeam } from "../../interfaces/ITeam";
import { TeamContextType } from "../../types/TeamContextType";

const TeamSelectList: FC = () => {
    
     const { teams } = useContext(TeamContext) as TeamContextType;

     const createTeamSelectList = () => {
         return teams.map( ( team: ITeam, key: number) => {
             return(
                <option selected value={team.name}>{team.name}</option>
             )
         });
     }

     return (
        <Form.Select className="data-size-5">
            { createTeamSelectList() }
        </Form.Select> 
     )
}

export default TeamSelectList;