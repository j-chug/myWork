using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using FpApi.Models;
using FpApi.DatabaseSettings;

namespace FpApi.Services
{
    public class PredictionService
    {
        private readonly IMongoCollection<Prediction>  _predictions;
        // _players er det direkte objektet vi gjør crud mot
        public PredictionService(IPortalenDatabaseSettings settings)
        { //Her kommer vi til å direkte aksessere databasen
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _predictions = database.GetCollection<Prediction>( settings.PredictionsCollectionName);
        }

        public List<Prediction> Get()
        {
           return _predictions.Find( prediction => true).ToList();
        }
        public Prediction PostPrediction(Prediction newPrediction)
        {
            //try catch her? 
            _predictions.InsertOne(newPrediction);
            return newPrediction;
        }
                
    }
}