import { motion } from "framer-motion";
import { Code, Cog, Bot, Cpu, BarChart, Eye } from "lucide-react";

const ProjectsPortfolio = () => {
  const projects = [
    {
      title: "SOP for MSRTC Bus Assembly Line",
      description: "Comprehensive standard operating procedures for efficient bus assembly operations.",
      tools: ["Process Engineering", "Quality Control", "Documentation"],
      icon: Cog
    },
    {
      title: "Guide Vane Fabrication Optimization",
      description: "Applied Six Sigma DMAIC methodology and 7 QC tools for process improvement.",
      tools: ["Six Sigma", "DMAIC", "7 QC Tools", "Process Optimization"],
      icon: BarChart
    },
    {
      title: "4-DOF Robotic Manipulator",
      description: "Developed and simulated robotic arm control system using microcontroller and simulation software.",
      tools: ["ESP32", "CoppeliaSim", "Robotics", "Control Systems"],
      icon: Bot
    },
    {
      title: "Fuel Injector Timing Control",
      description: "Microcontroller-based system for precise fuel injection timing optimization.",
      tools: ["Microcontroller", "Embedded Systems", "Automotive"],
      icon: Cpu
    },
    {
      title: "Voltage Monitoring System",
      description: "MATLAB-based GUI application for real-time voltage monitoring and analysis.",
      tools: ["MATLAB", "GUI Development", "Data Analysis"],
      icon: Code
    },
    {
      title: "Legged Robot with Edge Detection",
      description: "Advanced simulation combining robotics with AI-powered computer vision capabilities.",
      tools: ["Simulation", "AI", "Computer Vision", "Robotics"],
      icon: Eye
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
    <section id="projects" className="py-16 sm:py-20 bg-white">
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
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of engineering projects spanning automation, quality optimization, and innovative system design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <project.icon className="w-6 h-6 text-gray-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-white px-3 py-1 rounded-full text-xs text-gray-700 border border-gray-200 font-medium"
                    >
                      {tool}
                    </span>
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

export default ProjectsPortfolio;