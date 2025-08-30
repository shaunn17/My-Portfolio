import ProjectPageLayout from '@/components/ProjectPageLayout';
import { BarChart3, Users, TrendingUp, Zap, CheckCircle, AlertTriangle, Database, Cloud } from 'lucide-react';

const PetProject = () => {
  return (
    <ProjectPageLayout
      title="Real-time Dashboard Platform"
      subtitle="Power BI tracking 192K+ user events, informing 40% expansion in customer engagement"
      imageUrl="/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png"
      brandName="Cyberinfrastructure for Network Science Center"
      darkMode={false}
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: Customer Engagement Analytics Dashboard</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          As a BI Data Analyst at the Cyberinfrastructure for Network Science Center, I developed a comprehensive 
          real-time dashboard platform that transformed how the organization monitors and analyzes customer engagement. 
          By integrating data from GCP BigQuery and REST API endpoints, this platform enabled data-driven decision 
          making that led to significant business growth.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">192K+</div>
            <div className="text-sm text-gray-600">User Events Tracked</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-green-600">40%</div>
            <div className="text-sm text-gray-600">Engagement Expansion</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">60%</div>
            <div className="text-sm text-gray-600">Query Runtime Reduced</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-orange-600">Real-time</div>
            <div className="text-sm text-gray-600">Data Processing</div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">The Analytics Challenge</h3>
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Fragmented Data Sources</h4>
            <p className="text-gray-700">Customer engagement data was scattered across multiple systems, making comprehensive analysis impossible.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Delayed Insights</h4>
            <p className="text-gray-700">Legacy reporting systems provided insights days or weeks after events, missing critical engagement opportunities.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Poor Query Performance</h4>
            <p className="text-gray-700">Slow analytical queries hindered timely decision-making and feature analysis workflows.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Real-time Analytics Solution</h3>
      <p className="text-gray-700 mb-6">
        I designed and implemented a comprehensive real-time dashboard platform using Power BI, integrating 
        data from GCP BigQuery and multiple REST API endpoints to provide instant insights into customer 
        behavior and engagement patterns across the organization's digital platforms.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cloud className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">GCP BigQuery Integration</h4>
            <p className="text-gray-700 text-sm">Connected Power BI to BigQuery data warehouse for scalable analytics on 192K+ daily user events.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">REST API Connectivity</h4>
            <p className="text-gray-700 text-sm">Real-time data ingestion from multiple API endpoints providing live customer interaction data.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <BarChart3 className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Interactive Dashboards</h4>
            <p className="text-gray-700 text-sm">Developed comprehensive Power BI dashboards with drill-down capabilities and real-time refresh.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <TrendingUp className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Performance Optimization</h4>
            <p className="text-gray-700 text-sm">Optimized SQL queries and data models to achieve 60% reduction in runtime for faster insights.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technology Stack</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">Power BI</span>
        <span className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium text-center">GCP BigQuery</span>
        <span className="px-3 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium text-center">SQL</span>
        <span className="px-3 py-2 bg-orange-100 text-orange-800 rounded-lg text-sm font-medium text-center">REST APIs</span>
        <span className="px-3 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-medium text-center">Python</span>
        <span className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-lg text-sm font-medium text-center">DAX</span>
        <span className="px-3 py-2 bg-teal-100 text-teal-800 rounded-lg text-sm font-medium text-center">Power Query</span>
        <span className="px-3 py-2 bg-pink-100 text-pink-800 rounded-lg text-sm font-medium text-center">JSON</span>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Implementation Process</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">1</div>
          <div>
            <h4 className="font-semibold">Data Source Assessment</h4>
            <p className="text-gray-700">Mapped customer engagement touchpoints across platforms and identified key metrics for tracking 192K+ user events.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4 mt-1">2</div>
          <div>
            <h4 className="font-semibold">BigQuery Integration</h4>
            <p className="text-gray-700">Established secure connections to GCP BigQuery with optimized data models and partitioning strategies.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4 mt-1">3</div>
          <div>
            <h4 className="font-semibold">API Connectivity Development</h4>
            <p className="text-gray-700">Built robust REST API integrations with error handling and real-time data streaming capabilities.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4 mt-1">4</div>
          <div>
            <h4 className="font-semibold">Dashboard Design & Development</h4>
            <p className="text-gray-700">Created intuitive Power BI dashboards with interactive visualizations and real-time data refresh capabilities.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold mr-4 mt-1">5</div>
          <div>
            <h4 className="font-semibold">Performance Optimization</h4>
            <p className="text-gray-700">Optimized SQL queries and implemented caching strategies to achieve 60% reduction in query runtime.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Dashboard Features & Capabilities</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Customer Engagement Metrics</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Real-time user activity and session tracking</li>
              <li>• Feature adoption rates and usage patterns</li>
              <li>• Customer journey mapping and funnel analysis</li>
              <li>• Retention and churn prediction indicators</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Business Intelligence Features</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Interactive drill-down capabilities</li>
              <li>• Automated alerts for anomaly detection</li>
              <li>• Customizable filters and time ranges</li>
              <li>• Export and sharing functionality</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Performance Improvements & Results</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">40% Expansion in Customer Engagement Initiatives</h4>
            <p className="text-gray-700">Real-time insights enabled rapid identification of successful engagement strategies, leading to significant program expansion.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">60% Reduction in Query Runtime</h4>
            <p className="text-gray-700">Optimized SQL queries and data models dramatically improved dashboard performance and user experience.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Real-time Decision Making</h4>
            <p className="text-gray-700">Enabled immediate response to customer behavior changes and rapid iteration on product features.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Enhanced Data Accessibility</h4>
            <p className="text-gray-700">Democratized data access across teams, enabling self-service analytics and reducing dependency on technical resources.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Advanced Analytics & Insights</h3>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex items-start">
          <Database className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold mb-3 text-blue-800">Customer Behavior Analysis</h4>
            <p className="text-blue-700 text-sm mb-3">
              Implemented advanced analytics to track 192K+ user events, providing deep insights into customer 
              behavior patterns and enabling predictive modeling for engagement optimization.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Key Insights Generated:</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Peak usage hours and seasonal trends</li>
                  <li>• Feature adoption lifecycle patterns</li>
                  <li>• User segment behavior differences</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Business Impact:</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Improved resource allocation</li>
                  <li>• Enhanced product roadmap planning</li>
                  <li>• Optimized user experience design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Stakeholder Impact</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border text-center">
          <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">25+</h4>
          <p className="text-sm text-gray-600">Teams Using Dashboard</p>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">85%</h4>
          <p className="text-sm text-gray-600">Faster Decision Making</p>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">24/7</h4>
          <p className="text-sm text-gray-600">Real-time Monitoring</p>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Key Learning Outcomes</h3>
      <p className="text-gray-700 mb-4">
        This real-time dashboard project demonstrated the transformative power of integrating diverse data sources 
        into a unified analytics platform. The success led to organization-wide adoption of data-driven decision 
        making and established the foundation for advanced analytics initiatives including machine learning and 
        predictive modeling.
      </p>
      
      <div className="bg-gray-900 text-white p-6 rounded-lg mt-8">
        <h4 className="text-lg font-semibold mb-2">Platform Impact</h4>
        <p className="text-gray-300">
          This real-time dashboard platform revolutionized how the Cyberinfrastructure for Network Science Center 
          understands and responds to customer engagement. By tracking 192K+ user events in real-time and enabling 
          40% expansion in engagement initiatives, it transformed reactive reporting into proactive, data-driven 
          customer experience optimization.
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default PetProject;