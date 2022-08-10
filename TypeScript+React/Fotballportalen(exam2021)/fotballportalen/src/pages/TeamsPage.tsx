import { FC } from "react"
import TeamList from "../components/Teams/TeamList";
import { TeamProvider } from "../contexts/TeamContext";

const TeamsPage: FC = () => {
    return(
        <TeamProvider>
            <TeamList></TeamList>
        </TeamProvider>
    )

}

export default TeamsPage;