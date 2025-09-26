import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "CSWIP 3.1 – Welding Inspector",
      validity: "Valid till 2035",
      status: "active"
    },
    {
      title: "ASNT NDT Level II (PT, UT, MT, RT)",
      validity: "Valid till 2028",
      status: "active"
    },
    {
      title: "Six Sigma – Yellow & White Belt",
      validity: "Permanent",
      status: "active"
    },
    {
      title: "Product Design & Simulation",
      subtitle: "AutoCAD, SolidWorks, Ansys",
      validity: "Permanent",
      status: "active"
    },
    {
      title: "MATLAB Fundamentals",
      subtitle: "MathWorks",
      validity: "Permanent",
      status: "active"
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
    <section id="certifications" className="py-16 sm:py-20 bg-gray-50">
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
              Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional certifications demonstrating expertise in quality control, welding inspection, and engineering design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-gray-600" />
                  </div>
                  
                  {cert.status === 'active' && (
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">Active</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                {cert.subtitle && (
                  <p className="text-sm text-gray-600 mb-3">
                    {cert.subtitle}
                  </p>
                )}
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.validity}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;