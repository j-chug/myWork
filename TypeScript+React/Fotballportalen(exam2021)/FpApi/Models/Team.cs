using FpApi.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FpApi.Models
{
    public class Team : ITeam
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public string alias {get;set;}
        public int capacity { get; set; }
        public int founded { get; set; }
        public string image { get; set; }
        public string manager { get; set; }
        public string name { get; set; }
        public string stadium { get; set; }
        public int team_id { get; set; }
    }
}