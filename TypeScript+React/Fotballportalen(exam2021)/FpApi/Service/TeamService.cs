using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using FpApi.Models;
using FpApi.DatabaseSettings;

namespace FpApi.Services
{
    public class TeamService
    {
        private readonly IMongoCollection<Team> _teams;

        public TeamService(IPortalenDatabaseSettings settings)
        {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _teams = database.GetCollection<Team>( settings.TeamsCollectionName );
        }

        public List<Team> GetTeams()
        {
            return _teams.Find( team => true ).ToList();
        }
        public Team GetTeamById(int id)
        {
            // Her må vi legge til noe try-catch lignende funksjoner som sikrer at appen ikke kræsjer ved søk
            return _teams.Find<Team>( team => team.team_id == id).FirstOrDefault();
        }

        public Team GetTeamByName(string teamname)
        {
            // Her må vi legge til noe try-catch lignende funksjoner som sikrer at appen ikke kræsjer ved søk
            return _teams.Find<Team>( team => team.name.ToLower().Contains(teamname.ToLower())).FirstOrDefault();
        }
    }
}