using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using FpApi.Models;
using FpApi.DatabaseSettings;

namespace FpApi.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IPortalenDatabaseSettings settings)
        {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _users = database.GetCollection<User>( settings.UsersCollectionName );
        }

        public List<User> GetUsers()
        {
            return _users.Find( user => true ).ToList();
        }

        public User GetUserByUsername(string username)
        {
            // Her må vi legge til noe try-catch lignende funksjoner som sikrer at appen ikke kræsjer ved søk
            return _users.Find<User>( user => user.Username.ToLower().Contains(username.ToLower())).FirstOrDefault();
        }

        public User Create(User newUser)
        {
            _users.InsertOne( newUser );
            return newUser;
        }

    }
}