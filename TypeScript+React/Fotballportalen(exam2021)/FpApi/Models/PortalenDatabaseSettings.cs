namespace FpApi.DatabaseSettings {
    public class PortalenDatabaseSettings : IPortalenDatabaseSettings
    {
        public string PlayersCollectionName {get; set;}
        public string TeamsCollectionName { get; set; }
        public string PredictionsCollectionName {get; set;}
        public string UsersCollectionName { get; set; }
        public string ConnectionString {get; set; }
        public string DatabaseName {get; set; }
        
    }
    public interface IPortalenDatabaseSettings
    {
        string PlayersCollectionName {get; set;}
        string TeamsCollectionName { get; set; }
        string PredictionsCollectionName {get; set;}
        string UsersCollectionName { get; set; }
        string ConnectionString {get; set; }
        string DatabaseName {get; set; }
    }
}