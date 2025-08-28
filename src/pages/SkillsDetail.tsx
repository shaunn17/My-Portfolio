import PageLayout from '@/components/PageLayout';
import Skills from '@/components/Skills';
import SEO from '@/components/SEO';

const SkillsDetail = () => {
  return (
    <PageLayout>
      <SEO title="Skills & Stack" description="Detailed view of my skills, tools, and project capabilities." />
      <Skills />
    </PageLayout>
  );
};

export default SkillsDetail;


