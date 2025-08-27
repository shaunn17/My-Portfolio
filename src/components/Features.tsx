import { useEffect, useRef, useState } from 'react';
import { Activity, Shield, HardHat, Zap, ArrowRight, Box, Truck, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, RefreshCcw, MessageSquare } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useScrollHijack } from '@/hooks/useScrollHijack';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const hijackSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Activity className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Data Analysis & EDA",
      description: "Comprehensive exploratory data analysis and root-cause analysis on large datasets using Python and advanced SQL.",
      image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png"
    },
    {
      icon: <Shield className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Business Intelligence",
      description: "Power BI and Tableau dashboards that monitor KPIs and enable data-driven decision making for stakeholders.",
      image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
    },
    {
      icon: <HardHat className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Process Optimization",
      description: "Data validation rules, quality checks, and process improvements that enhance operational efficiency and compliance.",
      image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png"
    },
    {
      icon: <Zap className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Machine Learning",
      description: "Advanced ML models including XGBoost for predictive analytics and fraud detection with improved accuracy.",
      image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png"
    }
  ];

  const { isHijacked, currentIndex } = useScrollHijack(hijackSectionRef, features.length);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const sensorCaseStudies = [{
    image: "/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png",
    title: "ServiceNow Analytics",
    description: "Root-cause analysis on 2,500+ daily tickets using Python and SQL to identify patterns and recommend process improvements."
  }, {
    image: "/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png",
    title: "Healthcare Readmissions",
    description: "XGBoost model achieving 0.91 AUC and reducing 30-day readmissions by 15% through predictive analytics."
  }, {
    image: "/lovable-uploads/c5f8ee24-9815-4ebe-b65d-6f3d449feb8b.png",
    title: "Fraud Detection",
    description: "Machine learning models with 20% improved accuracy and 12% reduction in false positives for transaction monitoring."
  }];
  const stepFlowItems = [{
    icon: <Handshake className="h-10 w-10 text-gray-700" />,
    title: "Discover",
    description: "Clarify KPIs, audit data sources, and run quick exploratory analysis"
  }, {
    icon: <Code className="h-10 w-10 text-gray-700" />,
    title: "Build",
    description: "ETL and modeling with Python & SQL (dbt-style), documented and versioned"
  }, {
    icon: <CheckCircle className="h-10 w-10 text-gray-700" />,
    title: "Validate",
    description: "Tests and monitoring for data quality, alerts, and feedback loops"
  }, {
    icon: <Rocket className="h-10 w-10 text-gray-700" />,
    title: "Ship",
    description: "Decision-grade dashboards and docs teams adopt quickly (Power BI/Tableau)"
  }];
  const sprintPhases = [{
    name: "Planning",
    icon: <CheckCircle className="h-4 w-4" />
  }, {
    name: "Development",
    icon: <Code className="h-4 w-4" />
  }, {
    name: "Testing",
    icon: <Box className="h-4 w-4" />
  }, {
    name: "Review",
    icon: <RefreshCcw className="h-4 w-4" />
  }];

  return <>
      <section id="features" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Data & Operations Solutions
            </div>
            <p className="text-gray-600 mt-4">
              Our data analysis and business intelligence expertise transforms raw data into actionable insights that drive operational excellence and strategic decision-making.
            </p>
          </div>
          
          {/* Scroll-hijacked features section */}
          <div 
            ref={hijackSectionRef}
            className={cn(
              "relative transition-all duration-500",
              isHijacked ? "fixed inset-0 z-50 bg-black" : "grid grid-cols-1 md:grid-cols-2 gap-5"
            )}
            style={{ height: isHijacked ? '100vh' : 'auto' }}
          >
            {isHijacked && (
              <div className="absolute top-4 right-4 z-10 text-white text-sm opacity-70">
                {currentIndex + 1} / {features.length}
              </div>
            )}
            
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "feature-item rounded-xl overflow-hidden transform transition-all duration-500 relative shadow-lg",
                  isHijacked 
                    ? cn(
                        "absolute inset-0 w-full h-full",
                        index === currentIndex 
                          ? "opacity-100 translate-x-0" 
                          : index < currentIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )
                    : "hover:-translate-y-1 h-[280px]"
                )}
                style={{
                  transitionDelay: isHijacked ? '0ms' : `${index * 100}ms`
                }}
                onMouseEnter={() => !isHijacked && setHoveredFeature(index)} 
                onMouseLeave={() => !isHijacked && setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={cn(
                      "w-full h-full object-cover transition-all duration-300",
                      isHijacked ? "grayscale-0" : "grayscale"
                    )} 
                  />
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isHijacked 
                      ? "bg-black/40" 
                      : hoveredFeature === index 
                        ? "bg-black/50" 
                        : "bg-black/70"
                  )}></div>
                </div>
                
                <div className={cn(
                  "relative z-10 flex flex-col justify-center",
                  isHijacked 
                    ? "p-16 h-full text-center items-center" 
                    : "p-6 h-full justify-between"
                )}>
                  <div className={isHijacked ? "space-y-8" : ""}>
                    <div className={cn(
                      "inline-block p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform",
                      isHijacked 
                        ? "mb-6 scale-150" 
                        : hoveredFeature === index 
                          ? "mb-4 hover:scale-110" 
                          : "mb-4"
                    )}>
                      <div className={`transform transition-transform duration-300 ${!isHijacked && hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className={cn(
                      "font-semibold text-white",
                      isHijacked ? "text-4xl mb-6" : "text-xl mb-2"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      "text-white/90",
                      isHijacked ? "text-lg max-w-2xl" : "text-sm"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                  {!isHijacked && (
                    <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                  )}
                </div>
              </div>
            ))}
            
            {isHijacked && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <div className="flex space-x-2 mb-4">
                  {features.map((_, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentIndex ? "bg-white w-8" : "bg-white/50"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm opacity-70">
                  {isMobile ? "Swipe" : "Scroll"} to continue • Press ESC to exit
                </p>
              </div>
            )}
          </div>

          
        </div>
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
            Need Data Solutions?
            <MessageSquare className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </Button>
          
          <Button onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group w-full sm:w-auto">
            Learn More About My Expertise
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
      
      <section id="technology" className="bg-gray-50 py-10 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              My Approach
            </div>
            <h2 className="text-3xl font-bold mb-4">How I turn data into decisions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I build pragmatic data systems—clean pipelines, clear models, and focused BI—so teams can ship
              reliable decisions faster.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              {stepFlowItems.map((item, index) => <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-50 rounded-full p-4 mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 shadow-lg">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                      {index === 0 && <p className="text-xs text-gray-500">Tools: SQL, exploratory notebooks (Pandas), lightweight docs.</p>}
                      {index === 1 && <p className="text-xs text-gray-500">Tools: Python, SQL, dbt-style models, schedulers (Airflow/Prefect).</p>}
                      {index === 2 && <p className="text-xs text-gray-500">Tools: tests/monitors, data quality checks, alerts.</p>}
                      {index === 3 && <p className="text-xs text-gray-500">Tools: Power BI/Tableau, concise README, quick Loom walkthroughs.</p>}
                    </div>
                  </HoverCardContent>
                </HoverCard>)}
            </div>

            {/* Impact metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-100">
                <div className="text-3xl font-extrabold text-gray-900">+18%</div>
                <div className="text-sm text-gray-600 mt-1">forecast accuracy</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-100">
                <div className="text-3xl font-extrabold text-gray-900">-30%</div>
                <div className="text-sm text-gray-600 mt-1">ticket backlog</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-100">
                <div className="text-3xl font-extrabold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600 mt-1">pipeline success</div>
              </div>
            </div>

            {/* Toolbox badges */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-3">Toolbox</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Python</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">SQL</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Pandas</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">dbt‑style modeling</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Airflow/Prefect</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Power BI</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Tableau</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">scikit‑learn</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">Snowflake</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full">AWS/Azure</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/tech-details" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group py-3 w-full sm:w-auto justify-center">
                Learn More About My Expertise
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto justify-center">
                Contact Me
                <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Features;
