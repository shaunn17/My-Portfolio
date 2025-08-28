import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, ChevronDown } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import type React from "react";

type ActivityDetail = {
  title: string;
  description: string;
};

type EducationItem = {
  institution: string;
  level: string;
  dates: string;
  icon: JSX.Element;
  coursework: string[];
  activities: string[];
  location: string;
  activitiesDetails?: ActivityDetail[];
  degree?: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const entries: EducationItem[] = [
  {
    institution: "Indiana University",
    level: "Graduate",
    dates: "2023 – 2025",
    icon: <GraduationCap className="w-5 h-5" />,
    degree: "Master of Science, Data Science",
    coursework: [
      "Machine Learning",
      "Data Mining",
      "Distributed Systems",
      "Cloud Computing",
      "Data Visualization",
      "Advanced SQL & ETL"
    ],
    activities: ["Research/Capstone", "TA/Mentoring", "Analytics Club"],
    activitiesDetails: [
      {
        title: "Analytics Club",
        description:
          "Led sprints focused on end-to-end analytics: data cleaning, feature engineering, and dashboarding. Established a lightweight evaluation rubric that standardized deliverables across teams and improved review efficiency. Mentored new members on SQL best practices and visual clarity. The club shipped multiple reusable templates adopted by subsequent cohorts."
      },
      {
        title: "Research / Capstone",
        description:
          "Collaborated with a faculty lab to prototype ML pipelines for mixed structured and time-series data. Built reproducible experiments with configuration-driven runs and containerized environments. Performed ablation studies to isolate model contributions and documented results in a technical report with replication steps."
      },
      {
        title: "Teaching Assistant",
        description:
          "Supported a course on SQL and data modeling. Designed progressive practice sets covering joins, window functions, and CTE patterns. Held weekly office hours that reduced recurring query errors and improved pass rates. Introduced a feedback loop that fed anonymized pitfalls back into the next term’s curriculum."
      }
    ],
    location: "Bloomington, IN, USA"
  },
  {
    institution: "Mumbai University",
    level: "Undergraduate",
    dates: "2019 – 2023",
    icon: <BookOpen className="w-5 h-5" />,
    degree: "Bachelor of Engineering, Computer Engineering",
    coursework: [
      "Data Structures & Algorithms",
      "Databases (SQL)",
      "Operating Systems",
      "Computer Networks",
      "Probability & Statistics",
      "Software Engineering"
    ],
    activities: ["Hackathons", "Open‑source contributions", "Tech Society & Workshops"],
    activitiesDetails: [
      {
        title: "Hackathons",
        description:
          "Competed in weekend hackathons focused on data-driven products. Built rapid prototypes that ingested public datasets, modeled insights with Python/SQL, and shipped minimal dashboards. Iterated on team workflows (branch strategy, code reviews) to speed delivery. Earned shortlist mentions and consistently met judging criteria for completeness and clarity."
      },
      {
        title: "Open‑source contributions",
        description:
          "Contributed bug fixes and small features to analytics tooling in Python/TypeScript. Opened issues with clear reproduction steps, submitted PRs with tests and docs, and responded to maintainer feedback quickly. Improvements focused on performance, typing, and developer experience; several changes were included in minor releases."
      },
      {
        title: "Tech Society & Workshops",
        description:
          "Organized student-led workshops covering SQL fundamentals, git workflows, and introductory machine learning. Prepared hands-on notebooks and cheat sheets to accelerate learning. Gathered feedback and iterated on materials to improve pacing and examples, increasing attendance and completion rates over the semester."
      }
    ],
    location: "Mumbai, India"
  },
  {
    institution: "Rustomjee International School and Junior College",
    level: "High School / Junior College",
    dates: "2017 – 2019",
    icon: <School className="w-5 h-5" />,
    degree: "HSE - Science",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    activities: ["Coding Club", "Robotics/Science Fair", "Peer Tutoring"],
    activitiesDetails: [
      {
        title: "Coding Club",
        description:
          "Introduced peers to programming fundamentals and problem solving using simple projects. Facilitated weekly sessions and mini-challenges to build consistency. Encouraged collaborative debugging and code readability, helping members progress from basic loops to small applications."
      },
      {
        title: "Robotics / Science Fair",
        description:
          "Led a small team to design a microcontroller-based project using sensors and basic control logic. Documented wiring diagrams and code, and prepared a short demo that explained trade-offs between accuracy and responsiveness. The project received positive feedback for clarity and reliability in demonstrations."
      },
      {
        title: "Peer Tutoring",
        description:
          "Tutored classmates in mathematics and computer science prior to exams. Created concise study guides and practice sheets emphasizing common pitfalls. Helped improve confidence and outcomes, with several students reporting noticeable score increases."
      }
    ],
    location: "Mumbai, India"
  }
];

const Education = () => {
  const isMobile = useIsMobile();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (idx: number) => {
    setExpandedIndex(prev => (prev === idx ? null : idx));
  };

  const handleKeyToggle: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const target = e.currentTarget as HTMLDivElement & { dataset?: { idx?: string } };
      const idxStr = target?.dataset?.idx;
      if (idxStr) toggleExpanded(parseInt(idxStr, 10));
    }
  };

  return (
    <section id="education" aria-labelledby="education-heading" className="relative py-16 md:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            id="education-heading"
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            Education
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto">
            A chronological overview of my academic journey.
          </motion.p>
        </motion.div>

        <motion.ol
          role="list"
          className="relative border-l border-gray-200 pl-8 pr-6 md:pr-[32rem] space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {entries.map((item, idx) => (
            <motion.li key={idx} variants={itemVariants} className="ml-2 relative">
              <div className="absolute -left-3.5 mt-1 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-gray-200 text-gray-700 shadow-sm">
                {item.icon}
              </div>

              {isMobile ? (
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`edu-${idx}`}>
                      <AccordionTrigger className="px-5">
                        <div className="flex flex-col items-start text-left">
                          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{item.institution}</h3>
                            <span className="text-xs sm:text-sm text-gray-500">{item.dates} • {item.location}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600">{item.level}</p>
                          {item.degree && (
                            <p className="text-xs sm:text-sm text-gray-600">{item.degree}</p>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mt-1">Coursework</h4>
                          <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-1">
                            {item.coursework.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                          <h4 className="text-sm font-semibold text-gray-900 mt-4">Activities</h4>
                          {item.activitiesDetails ? (
                            <ul className="mt-1 space-y-3">
                              {item.activitiesDetails.map((act, i) => (
                                <li key={i} className="text-sm text-gray-700">
                                  <div className="font-medium text-gray-900">{act.title}</div>
                                  <p className="mt-0.5">{act.description}</p>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-1">
                              {item.activities.map((a, i) => (
                                <li key={i}>{a}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ) : (
                <HoverCard openDelay={80} closeDelay={120}>
                  <HoverCardTrigger asChild>
                    <div
                      className="relative bg-white rounded-lg border border-gray-200 shadow-sm p-5 cursor-default hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <h3 className="text-lg font-semibold text-gray-900">{item.institution}</h3>
                        <span className="text-sm text-gray-500">{item.dates} • {item.location}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{item.level}</p>
                      {item.degree && (
                        <p className="text-sm text-gray-600 mt-0.5">{item.degree}</p>
                      )}

                      {/* Details toggle button */}
                      <button
                        type="button"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleExpanded(idx); }}
                        aria-controls={`edu-details-${idx}`}
                        aria-expanded={expandedIndex === idx}
                        className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2.5 py-1.5 text-xs rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 shadow-sm"
                      >
                        Details
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${expandedIndex === idx ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent side="right" align="start" sideOffset={16} className="w-[380px] md:w-[460px] backdrop-blur bg-white/90 border-gray-200">
                    <Tabs defaultValue="coursework">
                      <TabsList className="w-full justify-start gap-2">
                        <TabsTrigger value="coursework">Coursework</TabsTrigger>
                        <TabsTrigger value="activities">Activities</TabsTrigger>
                      </TabsList>
                      <TabsContent value="coursework">
                        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                          {item.coursework.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </TabsContent>
                      <TabsContent value="activities">
                        {item.activitiesDetails ? (
                          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                            {item.activitiesDetails.map((act, i) => (
                              <li key={i}>{act.title}</li>
                            ))}
                          </ul>
                        ) : (
                          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                            {item.activities.map((a, i) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        )}
                      </TabsContent>
                    </Tabs>
                  </HoverCardContent>
                </HoverCard>
              )}
              {!isMobile && expandedIndex === idx && (
                <div id={`edu-details-${idx}`} className="mt-3 bg-gray-50 border border-gray-200 rounded-md p-5">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Coursework</h4>
                    <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-1">
                      {item.coursework.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Activities</h4>
                    {item.activitiesDetails ? (
                      <ul className="mt-1 space-y-3">
                        {item.activitiesDetails.map((act, i) => (
                          <li key={i} className="text-sm text-gray-700">
                            <div className="font-medium text-gray-900">{act.title}</div>
                            <p className="mt-0.5">{act.description}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-1">
                        {item.activities.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default Education;


