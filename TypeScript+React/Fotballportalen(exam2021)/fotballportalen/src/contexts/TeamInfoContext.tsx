import { createContext, FC, useEffect, useState } from "react";
import { ITeamInfo } from '../interfaces/ITeamInfo';
import { TeamService } from "../services/TeamService";
import { TeamInfoContextType } from "../types/TeamInfoContextType";


export const TeamInfoContext = createContext<TeamInfoContextType | null >(null);

export const TeamInfoProvider : FC = ({children}) => {
    const [teamInfo, setTeamInfo] = useState<ITeamInfo[]>([]);

    const getImageAndName = async () => {
        const results = await TeamService.getInfo();
        setTeamInfo(results);
    }
    useEffect( () => {
        getImageAndName();
    }, []);

    return(
        <>
        <TeamInfoContext.Provider value={{teamInfo}}>
            {children}
        </TeamInfoContext.Provider>
        </>
    )
}