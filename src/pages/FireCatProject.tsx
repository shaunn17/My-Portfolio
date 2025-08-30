import ProjectPageLayout from '@/components/ProjectPageLayout';
import { BarChart3, Database, Zap, TrendingUp, Clock, Users, CheckCircle, AlertTriangle } from 'lucide-react';

const FireCatProject = () => {
  return (
    <ProjectPageLayout
      title="ServiceNow Analytics Platform"
      subtitle="Comprehensive EDA and root-cause analysis transforming IT operations"
      imageUrl="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      brandName="Indiana University - UITS Enterprise Services"
      darkMode={false}
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: ServiceNow Analytics Platform</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          As a Data and Operations Consultant at UITS Enterprise Services, Indiana University, I led the development 
          of a comprehensive analytics platform to transform how the organization handles IT service operations. 
          With 2,500+ daily ServiceNow tickets flooding the system, the challenge was to turn operational chaos 
          into actionable insights.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">2,500+</div>
            <div className="text-sm text-gray-600">Daily Tickets</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-green-600">25%</div>
            <div className="text-sm text-gray-600">Faster Resolution</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">30+</div>
            <div className="text-sm text-gray-600">Stakeholders</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-orange-600">100%</div>
            <div className="text-sm text-gray-600">Data-Driven</div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Overwhelming Ticket Volume</h4>
            <p className="text-gray-700">Processing 2,500+ daily ServiceNow tickets with limited visibility into patterns and root causes.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Reactive Operations</h4>
            <p className="text-gray-700">IT teams were constantly firefighting without insights into underlying systemic issues.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Data Silos</h4>
            <p className="text-gray-700">Critical operational data was trapped in ServiceNow without accessible analytics or reporting.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Technical Solution</h3>
      <p className="text-gray-700 mb-6">
        I designed and implemented a comprehensive analytics solution combining advanced data analysis, 
        machine learning insights, and intuitive visualization to transform raw ServiceNow data into 
        actionable intelligence.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Database className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Data Extraction & Processing</h4>
            <p className="text-gray-700 text-sm">Advanced SQL queries and Python scripts to extract, clean, and structure ServiceNow ticket data for analysis.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <BarChart3 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Exploratory Data Analysis</h4>
            <p className="text-gray-700 text-sm">Comprehensive EDA using Python to identify patterns, trends, and anomalies in ticket data.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Root-Cause Analysis</h4>
            <p className="text-gray-700 text-sm">Statistical analysis and pattern recognition to identify underlying causes of recurring issues.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <TrendingUp className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Power BI Dashboards</h4>
            <p className="text-gray-700 text-sm">Interactive dashboards providing real-time KPI monitoring and operational insights for stakeholders.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Key Technologies Used</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">Python</span>
        <span className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium text-center">SQL</span>
        <span className="px-3 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium text-center">Power BI</span>
        <span className="px-3 py-2 bg-orange-100 text-orange-800 rounded-lg text-sm font-medium text-center">ServiceNow</span>
        <span className="px-3 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-medium text-center">Pandas</span>
        <span className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-lg text-sm font-medium text-center">NumPy</span>
        <span className="px-3 py-2 bg-teal-100 text-teal-800 rounded-lg text-sm font-medium text-center">Matplotlib</span>
        <span className="px-3 py-2 bg-pink-100 text-pink-800 rounded-lg text-sm font-medium text-center">Seaborn</span>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Implementation Process</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">1</div>
          <div>
            <h4 className="font-semibold">Data Discovery & Assessment</h4>
            <p className="text-gray-700">Analyzed ServiceNow data structure, identified key fields, and assessed data quality across 2,500+ daily tickets.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4 mt-1">2</div>
          <div>
            <h4 className="font-semibold">ETL Pipeline Development</h4>
            <p className="text-gray-700">Built automated Python scripts to extract, transform, and load ServiceNow data for analysis.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4 mt-1">3</div>
          <div>
            <h4 className="font-semibold">Statistical Analysis</h4>
            <p className="text-gray-700">Performed comprehensive EDA to identify patterns, correlations, and anomalies in ticket data.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4 mt-1">4</div>
          <div>
            <h4 className="font-semibold">Dashboard Creation</h4>
            <p className="text-gray-700">Developed interactive Power BI dashboards with real-time KPI monitoring and drill-down capabilities.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold mr-4 mt-1">5</div>
          <div>
            <h4 className="font-semibold">Stakeholder Training</h4>
            <p className="text-gray-700">Trained 30+ stakeholders on dashboard usage and data-driven decision making processes.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Key Discoveries & Insights</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Pattern Recognition</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Identified peak ticket hours and seasonal trends</li>
              <li>• Discovered correlation between system outages and ticket spikes</li>
              <li>• Found patterns in recurring issues by category and priority</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Root Cause Analysis</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 60% of recurring issues stemmed from 3 system configurations</li>
              <li>• Network-related tickets showed 40% increase during maintenance windows</li>
              <li>• User training gaps identified through ticket content analysis</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Results & Impact</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">25% Reduction in Resolution Time</h4>
            <p className="text-gray-700">Proactive identification of issues and optimized routing reduced average ticket resolution time significantly.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Data-Driven Decision Making</h4>
            <p className="text-gray-700">Enabled 30+ stakeholders to make faster, evidence-based decisions with real-time operational insights.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Preventive Operations</h4>
            <p className="text-gray-700">Shifted from reactive firefighting to proactive issue prevention through predictive insights.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Enhanced Data Quality</h4>
            <p className="text-gray-700">Implemented validation rules and governance standards ensuring consistent, reliable operational data.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Lessons Learned</h3>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="space-y-4">
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1 mr-3" />
            <div>
              <h4 className="font-semibold text-blue-800">Agile Collaboration</h4>
              <p className="text-blue-700 text-sm">Working closely with Product and business teams in an agile environment was crucial for defining accurate requirements and delivering meaningful insights.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Users className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1 mr-3" />
            <div>
              <h4 className="font-semibold text-blue-800">Stakeholder Engagement</h4>
              <p className="text-blue-700 text-sm">Early and continuous engagement with 30+ stakeholders ensured dashboard adoption and maximized the impact of data-driven insights.</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Future Roadmap</h3>
      <p className="text-gray-700 mb-4">
        Building on the success of this analytics platform, future enhancements include implementing machine learning 
        for predictive maintenance, automated ticket routing based on historical patterns, and real-time anomaly 
        detection to further improve operational efficiency and user experience.
      </p>
      
      <div className="bg-gray-900 text-white p-6 rounded-lg mt-8">
        <h4 className="text-lg font-semibold mb-2">Project Impact</h4>
        <p className="text-gray-300">
          This ServiceNow Analytics Platform transformed Indiana University's IT operations from reactive chaos 
          to proactive, data-driven excellence. By turning 2,500+ daily tickets into actionable insights, 
          we created a scalable model for operational intelligence that continues to drive efficiency improvements.
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default FireCatProject;