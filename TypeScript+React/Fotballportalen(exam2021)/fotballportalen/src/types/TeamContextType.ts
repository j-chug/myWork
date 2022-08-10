import { ITeam } from "../interfaces/ITeam"

export type TeamContextType = {
    //"En samling med ting" - samling av attributter, arrays, funksjoner. her må man legge til props og hvilke funksjoner den trenger (bare navnet på de)
    teams: ITeam[]
}