import { motion } from "framer-motion";
import { Building, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Process Engineer Intern",
      company: "Global TVS Bus Body Builders Ltd",
      period: "Mar 2025 – Apr 2025",
      achievements: [
        "SOP for 840-step bus assembly",
        "Supported IATF 16949 audit"
      ]
    },
    {
      title: "Quality Engineer Intern",
      company: "Tefugen Technologies",
      period: "Dec 2024 – Mar 2025",
      achievements: [
        "Applied Six Sigma DMAIC, reduced cycle time by 15%",
        "Validated test equipment, collaborated with QA/Production teams"
      ]
    },
    {
      title: "Inplant Trainee",
      company: "TNEB",
      period: "Jun 2024 – Jul 2024",
      achievements: [
        "SCADA-based monitoring, panel inspections"
      ]
    },
    {
      title: "Freelance Design Engineer",
      company: "CADD Centre",
      period: "Apr 2024 – Sep 2024",
      achievements: [
        "2D/3D CAD modeling, GD&T application"
      ]
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
    <section id="experience" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Professional Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A journey through quality engineering, process optimization, and automation across diverse industries.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;