import { Code, Cpu, Layers } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const isMobile = useIsMobile();
  const [shouldUsePoster, setShouldUsePoster] = useState(false);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  
  const getShouldUsePoster = (): boolean => {
    if (typeof window === 'undefined') return false;
    const mql = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReduced = !!(mql && mql.matches);
    const nav: any = navigator as any;
    const connection = nav && (nav.connection || nav.mozConnection || nav.webkitConnection);
    const saveData = !!(connection && connection.saveData);
    const effectiveType = connection && connection.effectiveType;
    const isSlow = effectiveType === 'slow-2g' || effectiveType === '2g';
    return prefersReduced || saveData || isSlow;
  };

  useEffect(() => {
    setShouldUsePoster(getShouldUsePoster());

    let mql: any = null;
    if (typeof window !== 'undefined' && window.matchMedia) {
      mql = window.matchMedia('(prefers-reduced-motion: reduce)');
      const onChange = () => setShouldUsePoster(getShouldUsePoster());
      if (mql.addEventListener) mql.addEventListener('change', onChange);
      else if (mql.addListener) mql.addListener(onChange);
      return () => {
        if (!mql) return;
        if (mql.removeEventListener) mql.removeEventListener('change', onChange);
        else if (mql.removeListener) mql.removeListener(onChange);
      };
    }
  }, []);

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          {shouldUsePoster ? (
            <img 
              src="/videos/landing-page-img.jpg" 
              alt="Portfolio background" 
              className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`} 
            />
          ) : (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="metadata"
              aria-hidden="true"
              className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`}
              poster="/videos/landing-page-img.jpg"
            >
              {/* Optional WebM for better compression (add the file to public/videos) */}
              <source src="/videos/landing-page-video.webm" type="video/webm" />
              <source src="/videos/landing-page-video.mp4" type="video/mp4" />
              {/* Fallback image if video fails to load */}
              <img 
                src="/videos/landing-page-img.jpg" 
                alt="Portfolio background" 
                className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`} 
              />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>Shaun Figueiro</motion.h1>
              <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6" variants={itemVariants}>
                A curated selection of projects, case studies, and experiments. From data ingestion to insight — ETL, data modeling, and BI that move KPIs.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Cpu className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Data Analysis</h3>
            <p className="text-gray-600 text-xs md:text-sm">Advanced exploratory data analysis and root-cause analysis using Python and SQL.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Business Intelligence</h3>
            <p className="text-gray-600 text-xs md:text-sm">Power BI and Tableau dashboards that transform data into actionable business insights.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Layers className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Operations Consulting</h3>
            <p className="text-gray-600 text-xs md:text-sm">Strategic process improvements and operational optimization across diverse industries.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
