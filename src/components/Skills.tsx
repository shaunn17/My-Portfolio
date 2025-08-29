import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BadgeCheck, GitBranch, Award, TrendingUp, ArrowRight } from "lucide-react";
import { skillsProfiles, type ProfileConfig } from "@/data/skills";

const profileIds = ["data", "software", "product"] as const;

const Skills = () => {
  const [profileId, setProfileId] = useState<typeof profileIds[number]>(() => {
    if (typeof window === 'undefined') return 'data';
    const saved = localStorage.getItem('skills.profileId');
    return (saved && (profileIds as readonly string[]).includes(saved)) ? (saved as typeof profileIds[number]) : 'data';
  });
  const profile: ProfileConfig = skillsProfiles[profileId] || skillsProfiles['data'];

  const [selection, setSelection] = useState<Record<string, string>>(() => {
    if (typeof window === 'undefined') return profile.defaultSelection;
    const saved = localStorage.getItem(`skills.selection.${profileId}`);
    return saved ? JSON.parse(saved) : profile.defaultSelection;
  });

  useEffect(() => {
    localStorage.setItem('skills.profileId', profileId);
    // Load or reset selection when profile changes
    const saved = localStorage.getItem(`skills.selection.${profileId}`);
    setSelection(saved ? JSON.parse(saved) : skillsProfiles[profileId].defaultSelection);
  }, [profileId]);

  useEffect(() => {
    localStorage.setItem(`skills.selection.${profileId}`, JSON.stringify(selection));
  }, [profileId, selection]);

  const selectedToolDetails = useMemo(() => {
    const stages = profile?.pipelineStages || [];
    return stages.map((stage) => {
      const tool = stage.tools.find((t) => t.id === selection[stage.id]);
      return { stage: stage.label, tool: tool?.name, why: tool?.why };
    });
  }, [selection, profileId]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  // Page-like transition variants for profile switching
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const profileItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <section id="skills" className="bg-white py-14 md:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div key={profileId} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Skills & Stack</div>
            <h3 className="text-xl md:text-2xl font-semibold mt-1">How I build data systems</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mt-1">Select the tools for each stage to see my go-to stack and rationale.</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-200 p-1 bg-white shadow-sm">
              {profileIds.map((id) => (
                <button
                  key={id}
                  onClick={() => setProfileId(id)}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${id === profileId ? 'bg-gray-900 text-white' : 'bg-transparent text-gray-700 hover:bg-gray-100'}`}
                  aria-pressed={id === profileId}
                >
                  {skillsProfiles[id].title}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`profile-header-${profileId}`}
                variants={profileItemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mt-4"
              >
                <h2 className="text-3xl md:text-4xl font-bold">{profile.title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mt-1">{profile.subtitle}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`profile-content-${profileId}`}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Pipeline Builder */}
              <motion.div variants={profileItemVariants} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="grid gap-5">
                {(profile.pipelineStages || []).map((stage) => (
                  <div key={stage.id} className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 font-semibold text-gray-900">
                        <GitBranch className="h-4 w-4 text-gray-600" />
                        {stage.label}
                      </div>
                      <BadgeCheck className="h-4 w-4 text-gray-400" />
                    </div>
                    <ToggleGroup
                      type="single"
                      value={selection[stage.id]}
                      onValueChange={(val) => val && setSelection((s) => ({ ...s, [stage.id]: val }))}
                      className="flex flex-wrap gap-2"
                    >
                      {stage.tools.map((t) => (
                        <ToggleGroupItem key={t.id} value={t.id} className="px-3 py-1.5 border border-gray-200 data-[state=on]:bg-gray-900 data-[state=on]:text-white">
                          {t.name}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
                <div className="text-sm text-gray-500 mb-2">Selected stack</div>
                <ul className="space-y-2">
                  {selectedToolDetails.map((d) => (
                    <li key={d.stage} className="text-sm">
                      <span className="font-medium text-gray-900">{d.stage}:</span> {d.tool} — <span className="text-gray-600">{d.why}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

              {/* Capability Pillars + Stories Carousel */}
              <motion.div variants={profileItemVariants} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-3 font-semibold text-gray-900 flex items-center gap-2">
                <Award className="h-4 w-4 text-gray-600" /> Capability pillars
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                {(profile.focusAreas || []).map((fa) => (
                  <div key={fa.title} className="p-3 rounded border border-gray-200">
                    <div className="font-medium text-gray-900">{fa.title}</div>
                    <div className="text-gray-600">{fa.blurb}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 mb-2 font-semibold text-gray-900 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-gray-600" /> Capability stories
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(profile.stories || []).map((s, idx) => (
                  <div key={idx} className="p-4 rounded border border-gray-200 bg-white flex flex-col justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Problem</div>
                      <div className="text-gray-900 font-medium">{s.problem}</div>
                      <div className="text-sm text-gray-500 mt-3">Approach</div>
                      <div className="text-gray-800">{s.approach}</div>
                      <div className="text-sm text-gray-500 mt-3">Result</div>
                      <div className="text-gray-900 font-semibold">{s.result}</div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {s.tools.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs rounded-full border border-gray-200 text-gray-700">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;


