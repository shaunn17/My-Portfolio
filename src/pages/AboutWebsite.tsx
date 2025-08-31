import { motion } from "framer-motion";
import { ArrowLeft, Code, Cloud, Zap, Shield, Globe, GitBranch, Database, Server } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const AboutWebsite = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description: "Built with React 18, TypeScript, and Vite for optimal performance and developer experience.",
      details: ["React 18 with hooks", "TypeScript for type safety", "Vite for fast builds", "TailwindCSS for styling", "shadcn/ui components"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "AWS Cloud Infrastructure",
      description: "Professional-grade hosting with S3 static hosting and CloudFront CDN for global performance.",
      details: ["S3 static website hosting", "CloudFront CDN distribution", "HTTPS/SSL encryption", "Global edge locations", "Automatic scaling"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "CI/CD Pipeline",
      description: "Automated deployment using GitHub Actions for seamless updates and zero-downtime deployments.",
      details: ["GitHub Actions workflow", "Automatic builds on push", "S3 deployment", "CloudFront invalidation", "Production-ready pipeline"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Performance",
      description: "Enterprise-grade security with optimized performance and modern web standards.",
      details: ["HTTPS enforcement", "Content Security Policy", "Optimized assets", "Lazy loading", "SEO optimization"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Mobile-first design approach ensuring perfect experience across all devices and screen sizes.",
      details: ["Mobile-first approach", "TailwindCSS responsive", "Touch-friendly interactions", "Cross-browser compatibility", "Accessibility features"]
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Version Control",
      description: "Professional development workflow with Git and automated testing and deployment.",
      details: ["Git version control", "Branch management", "Pull request workflow", "Code review process", "Automated testing"]
    }
  ];

  const techStack = [
    { category: "Frontend", technologies: ["React 18", "TypeScript", "TailwindCSS", "Framer Motion", "React Router v6"] },
    { category: "Build Tools", technologies: ["Vite", "PostCSS", "ESLint", "TypeScript Compiler"] },
    { category: "UI Components", technologies: ["shadcn/ui", "Radix UI", "Lucide Icons", "Custom Components"] },
    { category: "Deployment", technologies: ["AWS S3", "CloudFront CDN", "GitHub Actions", "CI/CD Pipeline"] },
    { category: "Performance", technologies: ["Code Splitting", "Lazy Loading", "Image Optimization", "CDN Caching"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="About This Website - Shaun Figueiro"
        description="Technical details about this portfolio website including tech stack, AWS deployment, CI/CD pipeline, and development architecture."
        keywords={['portfolio website', 'tech stack', 'AWS deployment', 'CI/CD', 'React', 'TypeScript', 'Vite']}
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gray-900">About This Website</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Built with Modern Web Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This portfolio website showcases not just my projects, but also my technical expertise in modern web development, 
            cloud infrastructure, and DevOps practices. Every aspect has been carefully crafted to demonstrate professional-grade skills.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-1">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack) => (
              <div key={stack.category} className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-lg">{stack.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Architecture Overview</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Source Code</h4>
              <p className="text-gray-600 text-sm">React + TypeScript codebase with modern development practices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">CI/CD Pipeline</h4>
              <p className="text-gray-600 text-sm">GitHub Actions automatically builds and deploys on every push</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud Infrastructure</h4>
              <p className="text-gray-600 text-sm">AWS S3 + CloudFront for scalable, global hosting</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            This website demonstrates my ability to build, deploy, and maintain production-ready web applications 
            using industry-standard tools and practices.
          </p>
          <Link 
            to="/behind-scenes"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            See Behind the Scenes
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutWebsite;
