import {FC, useState, useEffect, createContext} from "react";
import { IPlayer } from "../interfaces/IPlayer";
import { PlayerContextType } from "../types/PlayerContextType";
import { PlayerService } from "../services/PlayerService";

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: FC = ({children}) => {
    
    const [players, setPlayers] = useState<IPlayer[]>([]);

    useEffect( () => {
        getAllPlayers();
    }, [])

    const getAllPlayers = async () => {
        const _players = await PlayerService.getAllPlayers();
        setPlayers( _players )
    }

    return (
        <>
        <PlayerContext.Provider value={{players }}>
            {children}
        </PlayerContext.Provider>
        </>
    )
}