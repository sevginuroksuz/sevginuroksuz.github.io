
import {useState} from "react";
import {cn} from "@/lib/utils";

const skills = [

  { name: "HTML / CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "React Native", level: 85, category: "frontend" },
  { name: "Angular", level: 75, category: "frontend" },

  { name: ".NET / .NET Core", level: 90, category: "backend" },
  { name: "C#", level: 90, category: "backend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "RESTful APIs", level: 85, category: "backend" },
  { name: "SQL Server", level: 90, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },


  { name: "Artificial Intelligence Fundamentals", level: 70, category: "ai" },
  { name: "Hugging Face", level: 65, category: "ai" },
  { name: "NLP Basics", level: 65, category: "ai" },


  { name: "AWS", level: 70, category: "cloud" },
  { name: "Docker", level: 70, category: "cloud" },
  { name: "Kafka", level: 65, category: "cloud" },


  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "Visual Studio", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 85, category: "tools" }
];

const categories =["all","frontend","backend","ai","cloud","tools" ];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30"
    >
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My<span className="text-primary"> Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category,key) => (
            <button 
            key={key} 
            onClick={() => setActiveCategory(category)}
            className={cn(
            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
            )}>
              {category}
              </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, key) => (
          <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

          <div className="text-left mb-4">
            <h3 className="font-semibold text-lg">{skill.name}</h3>
          </div>
             <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
             <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
             style={{width: skill.level + "%"}}
             >
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
             </div>
          </div>
        ))
        }

      </div>
    </div>

    </section>
);

};