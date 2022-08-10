using System.Collections.Generic;
using FpApi.Models;
using FpApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FpApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TeamController : ControllerBase
    {
        private readonly TeamService _teamService;
        public TeamController(TeamService teamService)
        {
            _teamService = teamService;
        }

        [HttpGet] //Controller for å hente alle spillere - se Service for mer detaljer om prosess
        public IEnumerable<Team> GetAllTeams()
        {
            return _teamService.GetTeams();
        } 
        [HttpGet("SearchId/{id}")] //Controller for å hente etter lagets team_id - se Service for mer detaljer om prosess
        public Team GetTeamById(int id)
        {
            return _teamService.GetTeamById(id);
        }

        [HttpGet("SearchName/{teamname}")]

        public Team GetTeamByName(string teamname)
        {
            return _teamService.GetTeamByName(teamname);
        }
    }
}