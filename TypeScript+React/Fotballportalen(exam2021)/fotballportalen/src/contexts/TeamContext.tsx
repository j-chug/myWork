import { createContext, FC, useEffect, useState } from "react";
import { ITeam } from "../interfaces/ITeam";
import { TeamContextType } from "../types/TeamContextType";
import { TeamService } from "../services/TeamService";

export const TeamContext = createContext<TeamContextType | null >(null);

export const TeamProvider : FC = ({children}) => {

    const [teams, setTeams] = useState<ITeam[]>([]);

    // Her hentes array med teams fra service
    const getTeams = async () => {
        const results = await TeamService.getAll(); //husk async+await når man bruker asynkrone funksjoner (noe som venter på respons)
        setTeams(results);
    }
    
    
    useEffect( () => {
        getTeams();
    }, []);

    return(
        <>
        <TeamContext.Provider value={{teams}}>
            {children}
        </TeamContext.Provider>
        </>
    )
}