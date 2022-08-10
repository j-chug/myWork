import axios from "axios";
import { ITeam } from "../interfaces/ITeam";
import { ITeamInfo } from "../interfaces/ITeamInfo";

export const TeamService = (function(){
    
    const urlToTeamController = "https://localhost:5001/team";

    const getAll = async () => {
        const result = await axios.get( urlToTeamController );
        return result.data as ITeam[];
    }

    const getInfo = async () => {
        const result = await axios.get( urlToTeamController );
        return result.data as ITeamInfo[];
    }

    //Her inne lager man flere funksjoner, som å hente ting etter ID

    // const postNewMonster = async ( newMonster: IMonster ) => {
    //     const result = await axios.post( urlToMonsterController, newMonster );
    //     return result.data as IMonster;
    // }

    return {
        getAll,
        getInfo
        // postNewMonster
        //getCharacterById f.eks
    }

}()) 