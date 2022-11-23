using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using FFMP.Data;
using System.Security.Cryptography;
using System.Text;
using NuGet.Protocol.Plugins;

namespace FFMP.Controllers
{
    public class UsersController : Controller
    {
        private readonly project_3Context _context;

        public UsersController(project_3Context context)
        {
            _context = context;
        }

        public IActionResult Login()
        {
            return View();
        }


        // LOGIN CHECK
        [HttpPost]
        public async Task<IActionResult> Login(string login, string password)
        {
            var hashPassword = HashSh1($"{password}");

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Login == login && u.Password == hashPassword!);
            if (user == null)
            {
                return View("Login");
            }
            if (user.Admin == true && user.Active == true)
            {
                user.LastLogin = DateTime.Now;
                _context.Update(user);
                await _context.SaveChangesAsync();

                return View("AdminLanding/Index");
            }
            else if (user.Admin == false && user.Active == true)
            {
                user.LastLogin = DateTime.Now;
                _context.Update(user);
                await _context.SaveChangesAsync();

                return View("UserLanding/Index");
            }
            else
                ViewBag.Message = "Deactivated login information";
            return View("Login");
        }


        // GET: User
        public async Task<IActionResult> Index()
        {
            return _context.Users != null ?
                        View(await _context.Users.ToListAsync()) :
                        Problem("Entity set 'project_3Context.Users'  is null.");
        }

        public async Task<IActionResult> IndexUsers(string SortOrder)
        {
            var users = await _context.Users.ToListAsync();

            ViewData["NameSortParam"] = String.IsNullOrEmpty(SortOrder) ? "name_sort" : "";
            ViewData["CreatedSortParam"] = SortOrder == "" ? "created_sort" : "created_sort";

            switch (SortOrder)
            {
                case "name_sort":
                    users = await _context.Users.OrderBy(x => x.Name).ToListAsync();
                    break;
                case "created_sort":
                    users = await _context.Users.OrderBy(x => x.Created).ToListAsync();
                    break;
            }
            return View(users);
        }

        // GET: User/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null || _context.Users == null)
            {
                return NotFound();
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(m => m.Login == id);
            if (user == null)
            {
                return NotFound();
            }

            return View();
        }

        // GET: User/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: User/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind($"Name,Login,Password,Created,LastLogin,Admin,Active")] User user)
        {
            if (ModelState.IsValid)
            {
                user.Password = HashSh1(user.Password);

                _context.Add(user);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(IndexUsers));
            }
            return View(user);
        }

        // GET: User/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null || _context.Users == null)
            {
                return NotFound();
            }

            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }

        // POST: User/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Name,Login,Password,Created,LastLogin,Admin,Active")] User user)
        {
            if (id != user.Login)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(user);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserExists(user.Login))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }

        // GET: User/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null || _context.Users == null)
            {
                return NotFound();
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(m => m.Login == id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // POST: User/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            if (_context.Users == null)
            {
                return Problem("Entity set 'project_3Context.Users'  is null.");
            }
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UserExists(string id)
        {
            return (_context.Users?.Any(e => e.Login == id)).GetValueOrDefault();
        }


        // UTILS ------------------------------------->
        static string HashSh1(string input)
        {
            using (SHA1Managed sha1 = new SHA1Managed())
            {
                var hashSh1 = sha1.ComputeHash(Encoding.UTF8.GetBytes(input));

                // declare stringbuilder
                var sb = new StringBuilder(hashSh1.Length * 2);

                // computing hashSh1
                foreach (byte b in hashSh1)
                {
                    // "x2"
                    sb.Append(b.ToString("X2").ToLower());
                }

                // final output
                //Console.WriteLine(string.Format("The SHA1 hash of {0} is: {1}", input, sb.ToString()));

                return sb.ToString();
            }
        }
    }
}
