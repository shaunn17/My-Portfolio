import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Database, Zap, BarChart3, TrendingUp, CheckCircle, AlertTriangle, Settings, Cloud } from 'lucide-react';

const HockeyProject = () => {
  return (
    <ProjectPageLayout
      title="ETL Pipeline Optimization"
      subtitle="Automated Airflow-PySpark ETL pipeline reducing data ingestion time by 40%"
      imageUrl="/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png"
      brandName="Healthcare Analytics - Orange Health Labs"
      darkMode={false}
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: Healthcare Data Pipeline Optimization</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          At Orange Health Labs, Mumbai, the growing volume of diagnostic and order data from multiple sources 
          created significant challenges in data processing and analytics. This project developed an automated, 
          scalable ETL pipeline using Apache Airflow and PySpark to transform data ingestion from a manual, 
          time-intensive process into an efficient, automated system.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">40%</div>
            <div className="text-sm text-gray-600">Faster Ingestion</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">Data Sources</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">5TB+</div>
            <div className="text-sm text-gray-600">Monthly Data</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-orange-600">99.5%</div>
            <div className="text-sm text-gray-600">Uptime SLA</div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">The Data Challenge</h3>
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Manual Data Processing</h4>
            <p className="text-gray-700">Legacy systems required manual intervention for data extraction and transformation, creating bottlenecks and errors.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Multiple Source Integration</h4>
            <p className="text-gray-700">Diagnostic and order data from three different systems with varying formats, schemas, and update frequencies.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Scalability Limitations</h4>
            <p className="text-gray-700">Existing processes couldn't handle the growing volume of healthcare data, leading to processing delays and missed insights.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">ETL Solution Architecture</h3>
      <p className="text-gray-700 mb-6">
        I designed and implemented a comprehensive ETL pipeline using Apache Airflow for orchestration and 
        PySpark for distributed processing, creating an automated system that efficiently handles large-scale 
        healthcare data from multiple sources into Snowflake data warehouse.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Settings className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Apache Airflow Orchestration</h4>
            <p className="text-gray-700 text-sm">Automated workflow management with dependency tracking, retry logic, and monitoring capabilities.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">PySpark Processing</h4>
            <p className="text-gray-700 text-sm">Distributed data processing for large-scale transformations with parallel execution and memory optimization.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Database className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Snowflake Integration</h4>
            <p className="text-gray-700 text-sm">Cloud data warehouse integration with optimized loading strategies and data partitioning.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cloud className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Data Quality Monitoring</h4>
            <p className="text-gray-700 text-sm">Automated data validation, quality checks, and anomaly detection throughout the pipeline.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technology Stack</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">Python</span>
        <span className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium text-center">Apache Airflow</span>
        <span className="px-3 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium text-center">PySpark</span>
        <span className="px-3 py-2 bg-orange-100 text-orange-800 rounded-lg text-sm font-medium text-center">Snowflake</span>
        <span className="px-3 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-medium text-center">SQL</span>
        <span className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-lg text-sm font-medium text-center">Docker</span>
        <span className="px-3 py-2 bg-teal-100 text-teal-800 rounded-lg text-sm font-medium text-center">Apache Kafka</span>
        <span className="px-3 py-2 bg-pink-100 text-pink-800 rounded-lg text-sm font-medium text-center">PostgreSQL</span>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Implementation Process</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">1</div>
          <div>
            <h4 className="font-semibold">Data Source Analysis</h4>
            <p className="text-gray-700">Mapped data schemas from three healthcare systems: diagnostic labs, order management, and patient records.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4 mt-1">2</div>
          <div>
            <h4 className="font-semibold">Airflow DAG Development</h4>
            <p className="text-gray-700">Created directed acyclic graphs (DAGs) for each data source with dependency management and error handling.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4 mt-1">3</div>
          <div>
            <h4 className="font-semibold">PySpark Transformation Logic</h4>
            <p className="text-gray-700">Implemented distributed data transformations including cleaning, standardization, and enrichment processes.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4 mt-1">4</div>
          <div>
            <h4 className="font-semibold">Snowflake Optimization</h4>
            <p className="text-gray-700">Designed efficient data loading strategies with partitioning, clustering, and incremental updates.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold mr-4 mt-1">5</div>
          <div>
            <h4 className="font-semibold">Monitoring & Alerting</h4>
            <p className="text-gray-700">Implemented comprehensive monitoring with automated alerts for pipeline failures and performance degradation.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Pipeline Architecture Details</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Data Extraction</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• API connections to diagnostic systems</li>
              <li>• Database replication for order data</li>
              <li>• File-based ingestion for legacy systems</li>
              <li>• Real-time streaming for critical updates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Data Transformation</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Schema standardization across sources</li>
              <li>• Data validation and quality checks</li>
              <li>• Business rule application</li>
              <li>• Data enrichment and categorization</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Performance Improvements</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">40% Reduction in Data Ingestion Time</h4>
            <p className="text-gray-700">Optimized pipeline reduced processing time from 8 hours to 4.8 hours for full daily data loads.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Automated Error Handling</h4>
            <p className="text-gray-700">Implemented retry mechanisms and fallback strategies, reducing manual intervention by 85%.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Scalable Architecture</h4>
            <p className="text-gray-700">Designed system to handle 10x data volume growth with linear scaling capabilities.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Data Quality Improvement</h4>
            <p className="text-gray-700">Automated validation processes improved data quality scores from 78% to 96%.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Data Quality & Monitoring</h3>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex items-start">
          <BarChart3 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold mb-3 text-blue-800">Comprehensive Monitoring System</h4>
            <p className="text-blue-700 text-sm mb-3">
              Implemented multi-layer monitoring covering data quality, pipeline performance, and system health 
              with real-time alerting and automated recovery mechanisms.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Data Quality Metrics:</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Completeness and accuracy checks</li>
                  <li>• Schema validation and drift detection</li>
                  <li>• Business rule compliance monitoring</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Performance Monitoring:</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Pipeline execution time tracking</li>
                  <li>• Resource utilization optimization</li>
                  <li>• SLA compliance reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Business Impact</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border text-center">
          <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">80%</h4>
          <p className="text-sm text-gray-600">Reduced Ad-hoc Reporting</p>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">5TB+</h4>
          <p className="text-sm text-gray-600">Monthly Data Processed</p>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">99.5%</h4>
          <p className="text-sm text-gray-600">Pipeline Uptime</p>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Lessons Learned & Future Enhancements</h3>
      <p className="text-gray-700 mb-4">
        This ETL pipeline optimization project demonstrated the power of modern data engineering tools in healthcare 
        settings. Future enhancements include implementing real-time streaming for critical data, adding machine 
        learning-based anomaly detection, and expanding to cloud-native architectures for better scalability.
      </p>
      
      <div className="bg-gray-900 text-white p-6 rounded-lg mt-8">
        <h4 className="text-lg font-semibold mb-2">Engineering Impact</h4>
        <p className="text-gray-300">
          This ETL pipeline optimization transformed Orange Health Labs' data infrastructure from a manual, 
          error-prone process to an automated, scalable system. By achieving 40% faster data ingestion and 
          99.5% uptime, it enabled real-time analytics and significantly improved operational efficiency in 
          healthcare data processing.
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default HockeyProject;