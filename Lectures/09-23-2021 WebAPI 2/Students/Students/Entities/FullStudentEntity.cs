using Students.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Students.Entities
{
    public class FullStudentEntity
    {
        /// <summary>
        /// No-args constructor so that Asp.Net can make copies of this class.
        /// </summary>
        public FullStudentEntity()
        {

        }

        public FullStudentEntity(StudentModel studentModel)
        {
            this.FirstName = studentModel.FirstName;
            this.LastName = studentModel.LastName;
            this.Grade = studentModel.Grade;
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Grade { get; internal set; }

        public StudentModel ToModel()
        {
            return new StudentModel()
            {
                FirstName = this.FirstName,
                LastName = this.LastName
                // grade is ommitted here on purpose. should we let people change their grade?
            };
        }
    }
}
