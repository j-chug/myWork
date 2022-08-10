using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using FpApi.Models;
using System.Net.Http;
using FpApi.DatabaseSettings;

namespace FpApi.Services
{
    public class PlayerService
    {
        private readonly IMongoCollection<Player>  _players;
        // _players er det direkte objektet vi gjør crud mot
        public PlayerService(IPortalenDatabaseSettings settings)
        { //Her kommer vi til å direkte aksessere databasen
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _players = database.GetCollection<Player>( settings.PlayersCollectionName );
        }

        public List<Player> Get()
        {
           return _players.Find( player => true).ToList();
        }
        public Player GetPlayerByName(string playername)
        {
            // Her må vi legge til noe try-catch lignende funksjoner som sikrer at appen ikke kræsjer ved søk
            return _players.Find<Player>( player => player.first_name == playername).FirstOrDefault();
        }
        
        public void Update(Player playerIn) 
        {
            _players.ReplaceOne( player => player.id == playerIn.id, playerIn);
        }
                
    }
}