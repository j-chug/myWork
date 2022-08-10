export interface ITeam {
    //Retter seg mot ETT spesifikt objekt
    id?: string;
    name?: string;
    image?: string;
    stadium?: string;
    capacity?: number;
    manager?: string;
    founded?: number;
    alias?: string;
    team_id?: number; //1-20
}