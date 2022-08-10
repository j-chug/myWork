using System.Collections.Generic;
using FpApi.Models;
using FpApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FpApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet] //Controller for å hente alle brukere - se Service for mer detaljer om prosess
        public IEnumerable<User> GetAllUsers()
        {
            return _userService.GetUsers();
        } 

        [HttpGet("SearchUser/{Username}")] //Controller for å hente etter lagets team_id - se Service for mer detaljer om prosess
        public User GetUserByUsername(string Username)
        {
            return _userService.GetUserByUsername(Username);
        }

        [HttpPost]
        public User Post(User newUser)
        {
            return _userService.Create( newUser );
        }

    }
}