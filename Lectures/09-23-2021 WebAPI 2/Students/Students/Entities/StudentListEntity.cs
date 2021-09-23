using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Students.Entities
{
    public class StudentListEntity
    {

        public IEnumerable<StudentEntity> Students { get; set; }
    }
}
