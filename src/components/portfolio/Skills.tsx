import { motion } from "framer-motion";
import { Code, Cog, Award, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design & Simulation",
      icon: Code,
      skills: ["SolidWorks", "AutoCAD", "Creo", "Ansys", "MATLAB", "CoppeliaSim"]
    },
    {
      title: "Manufacturing & Quality",
      icon: Cog,
      skills: ["Six Sigma", "Lean Tools", "SOP Development"]
    },
    {
      title: "Quality Standards",
      icon: Award,
      skills: ["CSWIP 3.1", "NDT Level II", "IATF 16949"]
    },
    {
      title: "Automation",
      icon: Cpu,
      skills: ["PLC", "SCADA", "LabVIEW", "ESP32"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive expertise across design, quality assurance, and automation technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <category.icon className="w-6 h-6 text-gray-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white px-3 py-2 rounded-md text-sm text-gray-700 border border-gray-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;