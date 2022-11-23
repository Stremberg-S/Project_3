using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FFMP.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using NuGet.Protocol.Plugins;

namespace FFMP.Controllers;

[Route("easydata")]
public class EasyDataController : Controller
{
    private readonly ILogger<EasyDataController> _logger;

    public EasyDataController(ILogger<EasyDataController> logger)
    {
        _logger = logger;
    }

    [Route("{**entity}")]
    public IActionResult Index(string entity)
    {
        if (string.IsNullOrEmpty(entity))
        {
            _logger.LogInformation("Index page");
        }
        else
        {
            _logger.LogInformation($"{entity} page");
        }

        return View(entity);
    }
}
