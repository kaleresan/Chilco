using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Chilco.Group;

namespace Chilco
{
    class Linker
    {
        public Tracker Tracker { get; private set; }
        public Group Group { get; private set; }
        public Butcher Butcher { get; private set; }

        public Linker(Tracker tracker, Group group, Butcher butcher) {
            this.Tracker = tracker;
            this.Group = group;
            this.Butcher = butcher;
        }


        public Ruleset GetRuleset() {
            return this.Group.ruleset;
        }



        //Create
        //Update
        //Delete
    }
}
