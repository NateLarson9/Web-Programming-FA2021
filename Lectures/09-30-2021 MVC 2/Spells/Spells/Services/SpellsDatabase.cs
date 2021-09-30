using Spells.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Spells.Services
{
    public class SpellsDatabase
    {
        private List<SpellModel> spells = new List<SpellModel>();

        public void Add(string spell)
        {
            this.spells.Add(new SpellModel() { Spell = spell });
        }

        public int Count()
        {
            return this.spells.Count();
        }

        public SpellModel Get(int index)
        {
            return this.spells[index];
        }

        public void Delete(int index)
        {
            this.spells.RemoveAt(index);
        }
    }
}
