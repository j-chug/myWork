namespace FpApi.Interfaces{
    public interface IPlayer
    { 
        string id {get; set;}
        int code { get; set; }
        int cost_change_event { get; set; }
        int cost_change_event_fall { get; set; }
        int cost_change_start { get; set; }
        int cost_change_start_fall { get; set; }
        int dreamteam_count { get; set; }
        int element_type { get; set; }
        string ep_next { get; set; }
        string ep_this { get; set; }
        int event_points { get; set; }
        string first_name { get; set; }
        string form { get; set; }
        int player_id {get; set; }
        bool in_dreamteam { get; set; }
        string  news { get; set; }
        string news_added { get; set; }
        int now_cost { get; set; }
        string photo  { get; set; }
        string points_per_game { get; set; }
        string second_name { get; set; }
        string selected_by_percent { get; set; }
        bool special { get; set; }
        string squad_number { get; set; }
        string status { get; set; }
        int team { get; set; }
        int team_code { get; set; }
        int total_points { get; set; }
        int transfers_in { get; set; }
        int transfers_in_event { get; set; }
        int transfers_out { get; set; }
        int transfers_out_event { get; set; }
        string value_form { get; set; }
        string value_season { get; set; }
        string web_name { get; set; }
        int minutes { get; set; }
        int goals_scored { get; set; }
        int assists { get; set; }
        int clean_sheets { get; set; }
        int goals_conceded { get; set; }
        int own_goals { get; set; }
        int penalties_saved { get; set; }
        int penalties_missed { get; set; }
        int yellow_cards { get; set; }
        int red_cards { get; set; }
        int saves { get; set; }
        int bonus { get; set; }
        int bps { get; set; }
        string influence { get; set; }
        string creativity { get; set; }
        string threat { get; set; }
        string ict_index { get; set; }
        int influence_rank { get; set; }
        int influence_rank_type { get; set; }
        int creativity_rank { get; set; }
        int creativity_rank_type { get; set; }
        int  threat_rank { get; set; }
        int threat_rank_type { get; set; }
        int ict_index_rank { get; set; }
        int ict_index_rank_type { get; set; }
        string penalties_text { get; set; }
    }
}
