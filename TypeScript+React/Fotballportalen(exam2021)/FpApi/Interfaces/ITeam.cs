namespace FpApi.Interfaces
{
    public interface ITeam
    {
        string id { get; set; }
        string alias {get;set;}
        int capacity { get; set; }
        int founded { get; set; }
        string image { get; set; }
        string manager { get; set; }
        string name { get; set; }
        string stadium { get; set; }
        int team_id { get; set; }
    }
}