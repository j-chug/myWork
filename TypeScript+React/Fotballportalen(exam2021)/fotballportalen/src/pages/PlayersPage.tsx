import { FC } from "react"
//import PlayerList from "../components/Players/PlayerList"; <PlayerList></PlayerList>
import ClubFilterList from "../components/Players/ClubFilterList";
import PlayerList from "../components/Players/PlayerList";
import { PlayerProvider } from "../contexts/PlayerContext";
import { TeamInfoProvider } from "../contexts/TeamInfoContext";

const PlayersPage: FC = () => {
    return(
        <PlayerProvider>
            <TeamInfoProvider>
                <ClubFilterList></ClubFilterList>
            </TeamInfoProvider>
        </PlayerProvider>
        
    )

}

export default PlayersPage;