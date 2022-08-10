export interface IPlayer{
    id?: string;
    first_name?: string;
    second_name?: string;
    player_id?: number;
    code?: number; //Brukes til bilder med en URL
    element_type?: number; //posisjon 1-4
    team?: number;
    goals_scored?: number;
    assists?: number;
    minutes?: number;
    clean_sheets?: number;
    yellow_cards?: number;
    red_cards?: number;
    position?: string;
}