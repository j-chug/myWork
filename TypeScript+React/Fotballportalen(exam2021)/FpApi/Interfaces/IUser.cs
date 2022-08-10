namespace FpApi.Interfaces
{
    public interface IUser
    {
        string id { get; set; }
        string Username {get;set;}
        string Password { get; set; }
        string MyTeam { get; set; }
        string MyTeamImg { get; set; }
        string MyPlayer { get; set; }
        string MyPlayerImg { get; set; }
        int Age { get; set; }
        string Memories { get; set; }
    }
}