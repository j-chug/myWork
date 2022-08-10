using System.Collections.Generic;
using FpApi.Models;
using FpApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FpApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlayerController : ControllerBase
    {
        private readonly PlayerService _playerService;

        public PlayerController(PlayerService playerService)
        {
            _playerService = playerService;
        }

        [HttpGet]
        public IEnumerable<Player> Get()
        {
            return _playerService.Get();
        }

        [HttpGet("GetPlayerByName/{playername}")]

        public Player GetPlayerByName(string playername)
        {
            return _playerService.GetPlayerByName(playername);
        }

        [HttpPut()]
        public IActionResult Put(Player playerIn)
        {
            _playerService.Update(playerIn);
            return NoContent();
        }
    }
}