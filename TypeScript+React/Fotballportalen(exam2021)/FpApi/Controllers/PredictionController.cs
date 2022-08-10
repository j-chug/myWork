using System.Collections.Generic;
using FpApi.Models;
using FpApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FpApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PredictionController : ControllerBase
    {
        private readonly PredictionService _predictionService;
        public PredictionController(PredictionService PredictionService)
        {
            _predictionService = PredictionService;
        }

        [HttpGet] //Controller for å hente alle predictions - se Service for mer detaljer om prosess
        public IEnumerable<Prediction> GetAllPrediction()
        {
            return _predictionService.Get();
        }

        [HttpPost]
        public Prediction PostPrediction(Prediction newPrediction)
        {
            _predictionService.PostPrediction(newPrediction);
            return newPrediction;
        }
    }
}