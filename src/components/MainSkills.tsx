import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skillsProfiles } from "@/data/skills";
import { Link } from "react-router-dom";

const profileIds = ["data", "software", "product"] as const;

const MainSkills = () => {
  const [profileId, setProfileId] = useState<typeof profileIds[number]>(() => {
    if (typeof window === 'undefined') return 'data';
    const saved = localStorage.getItem('mainskills.profileId');
    return (saved && (profileIds as readonly string[]).includes(saved)) ? (saved as typeof profileIds[number]) : 'data';
  });

  useEffect(() => {
    localStorage.setItem('mainskills.profileId', profileId);
  }, [profileId]);

  const profile = skillsProfiles[profileId] || skillsProfiles['data'];

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { y: 8, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.35 } } };

  return (
    <section id="main-skills" className="bg-white py-14 md:py-20" aria-labelledby="main-skills-heading">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div key={profileId} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={container}>
          <motion.div variants={item} className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Skills</div>
            <h2 id="main-skills-heading" className="text-3xl md:text-4xl font-bold">At-a-glance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">Quick view of what I work with—switch profiles to see a different lens.</p>

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
          </motion.div>

          <motion.div variants={container} className="bg-white border border-gray-200 rounded-xl divide-y">
            {(profile.focusAreas || []).length > 0 ? (
              (profile.focusAreas || []).map((fa) => {
                const skills = fa.blurb.split(',').map(s => s.trim()).filter(Boolean);
                return (
                  <motion.div key={fa.title} variants={item} className="p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="sm:w-1/3">
                      <h3 className="text-lg font-semibold text-gray-900">{fa.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{fa.blurb}</p>
                    </div>
                    <div className="sm:w-2/3">
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs rounded-full border border-gray-200 text-gray-700 bg-gray-50">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div variants={item} className="p-8 text-center text-gray-500">
                No skills to display for this profile yet.
              </motion.div>
            )}
          </motion.div>

          <motion.div variants={item} className="text-center mt-8">
            <Link to="/skills" className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-900 text-white rounded-lg shadow-sm hover:shadow-md transition-all">
              View full skills & stack
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSkills;


