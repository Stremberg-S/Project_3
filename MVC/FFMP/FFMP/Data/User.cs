using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using EasyData.EntityFrameworkCore;
using FFMP.Models;
using Microsoft.EntityFrameworkCore.Metadata;
using FFMP.Controllers;
using FFMP.Data;
using System.Security.Cryptography;
using NuGet.Protocol.Plugins;

namespace FFMP.Data
{
    [DisplayColumn("Name")]
    public partial class User
    {
        public User()
        {
            AuditingForms = new HashSet<AuditingForm>();
            AuditingLogs = new HashSet<AuditingLog>();
            Inspections = new HashSet<Inspection>();
            ObjectToChecks = new HashSet<ObjectToCheck>();
        }

        [Display(Name = "User Name")]
        public string Name { get; set; } = null!;
        [Display(Name = "User Login")]
        public string Login { get; set; } = null!;
        private string _password;
        [MetaEntityAttr(Editable = false, ShowOnView = false, ShowInLookup = false)]
        public string Password
        {
            get
            {
                return this._password;
            }
            set
            {
                _password = HashSh1(value);
            }
        }
        public DateTime Created { get; set; }
        public DateTime? LastLogin { get; set; }
        public bool? Admin { get; set; }
        public bool? Active { get; set; }

        public virtual ICollection<AuditingForm> AuditingForms { get; set; }
        public virtual ICollection<AuditingLog> AuditingLogs { get; set; }
        public virtual ICollection<Inspection> Inspections { get; set; }
        public virtual ICollection<ObjectToCheck> ObjectToChecks { get; set; }




        static string HashSh1(string input)
        {
            using (SHA1Managed sha1 = new SHA1Managed())
            {
                var hashSh1 = sha1.ComputeHash(Encoding.UTF8.GetBytes(input));
                var sb = new StringBuilder(hashSh1.Length * 2);
                foreach (byte b in hashSh1)
                {
                    sb.Append(b.ToString("X2").ToLower());
                }
                return sb.ToString();
            }
        }
    }
}
