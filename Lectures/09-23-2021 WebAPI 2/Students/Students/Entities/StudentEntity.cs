using Students.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Students.Entities
{
    public class StudentEntity
    {
        /// <summary>
        /// No-args constructor so that Asp.Net can make copies of this class.
        /// </summary>
        public StudentEntity()
        {

        }

        public StudentEntity(StudentModel studentModel)
        {
            this.FirstName = studentModel.FirstName;
            this.LastName = studentModel.LastName;
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public StudentModel ToModel()
        {
            return new StudentModel()
            {
                FirstName = this.FirstName,
                LastName = this.LastName
            };
        }
    }
}
