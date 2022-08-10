using FpApi.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FpApi.Models
{
    public class User : IUser
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public string Username {get;set;}
        public string Password { get; set; }
        public string MyTeam { get; set; }
        public string MyTeamImg { get; set; }
        public string MyPlayer { get; set; }
        public string MyPlayerImg { get; set; }
        public int Age { get; set; }
        public string Memories { get; set; }
    }
}