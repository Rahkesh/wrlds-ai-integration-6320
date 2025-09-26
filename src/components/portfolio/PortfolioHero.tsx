import { ArrowRight, Download, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PortfolioHero = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    // Will implement resume download later when file is provided
    console.log('Resume download requested');
  };
  
  return (
    <motion.div 
      className="relative w-full" 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      <div className="banner-container bg-primary relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/lovable-uploads/video_1751292840840_1751292842546.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-primary/80 w-full">
          {/* Yellow overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/70 to-primary/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-background"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-primary-foreground" variants={itemVariants}>
                Srivarsan T
              </motion.h1>
              <motion.h2 className="text-lg sm:text-xl md:text-2xl text-primary-foreground mt-2 font-medium" variants={itemVariants}>
                QA/QC Inspector | Welding Inspector | Process Optimization | Mechatronics Engineer
              </motion.h2>
              <motion.p className="banner-subtitle text-primary-foreground/90 mt-4 sm:mt-6" variants={itemVariants}>
                Driving efficiency and quality in automation and manufacturing.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-background text-foreground rounded-md hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={downloadResume}
                >
                  Download Resume
                  <Download className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-accent transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Contact Me
                  <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Professional image placeholder - will be updated when photo is provided */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 hidden md:block">
        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
          <span className="text-white text-sm font-medium">Photo</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioHero;