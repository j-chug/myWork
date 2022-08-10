import axios from "axios";
import { IPlayer } from "../interfaces/IPlayer";

export const PlayerService = (function(){

    const urlToPlayerController = "https://localhost:5001/player";

    const getAllPlayers = async () => {
        const result = await axios.get( urlToPlayerController );
        return result.data as IPlayer[];
    }

    const postPlayer = async ( newPlayer: IPlayer ) => {
        axios.post( urlToPlayerController, newPlayer);  
    }
    
    return {
        getAllPlayers,
        postPlayer
    }
    
}());