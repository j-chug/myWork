using FpApi.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FpApi.Models
{
    public class Prediction : IPrediction
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id {get;set;}
        public string username { get; set; }
        public string number1 { get; set; }
        public string number2 { get; set; }
        public string number3 { get; set; }
        public string number4 { get; set; }
        public string number5 { get; set; }
    }
}