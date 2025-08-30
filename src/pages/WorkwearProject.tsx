import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Shield, AlertTriangle, TrendingUp, Brain, CheckCircle, Zap, Database, BarChart3 } from 'lucide-react';

const WorkwearProject = () => {
  return (
    <ProjectPageLayout
      title="Fraud Detection System"
      subtitle="Machine learning models with 20% improved accuracy and 12% reduction in false positives"
      imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
      brandName="Financial Services - Transaction Monitoring"
      darkMode={false}
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: Advanced Fraud Detection System</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Financial fraud costs institutions billions annually, requiring sophisticated detection systems that can 
          identify suspicious patterns while minimizing false positives. This project developed an advanced machine 
          learning solution for real-time transaction monitoring, achieving significant improvements in detection 
          accuracy and operational efficiency.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">20%</div>
            <div className="text-sm text-gray-600">Accuracy Improved</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-green-600">12%</div>
            <div className="text-sm text-gray-600">Fewer False Positives</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">1M+</div>
            <div className="text-sm text-gray-600">Daily Transactions</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-orange-600">95.2%</div>
            <div className="text-sm text-gray-600">Detection Rate</div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">The Fraud Challenge</h3>
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Evolving Fraud Patterns</h4>
            <p className="text-gray-700">Fraudsters continuously adapt their methods, making traditional rule-based systems increasingly ineffective.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">High False Positive Rates</h4>
            <p className="text-gray-700">Legacy systems generated too many false alarms, overwhelming fraud analysts and frustrating legitimate customers.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Real-time Processing Requirements</h4>
            <p className="text-gray-700">Need to process millions of transactions daily with millisecond-level response times for authorization decisions.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Machine Learning Solution</h3>
      <p className="text-gray-700 mb-6">
        I developed a comprehensive fraud detection system using ensemble machine learning methods, advanced feature 
        engineering, and real-time processing capabilities to identify fraudulent transactions while minimizing 
        false positives and maintaining low latency.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Database className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Feature Engineering</h4>
            <p className="text-gray-700 text-sm">Created 200+ features including transaction patterns, behavioral analytics, and network analysis indicators.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Brain className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Ensemble Modeling</h4>
            <p className="text-gray-700 text-sm">Combined Random Forest, XGBoost, and neural networks with weighted voting for optimal performance.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Real-time Processing</h4>
            <p className="text-gray-700 text-sm">Optimized models for sub-100ms inference time with streaming data pipeline and efficient feature computation.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <TrendingUp className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Anomaly Detection</h4>
            <p className="text-gray-700 text-sm">Implemented unsupervised learning for detecting novel fraud patterns and zero-day attacks.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technology Stack</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">Python</span>
        <span className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium text-center">scikit-learn</span>
        <span className="px-3 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium text-center">XGBoost</span>
        <span className="px-3 py-2 bg-orange-100 text-orange-800 rounded-lg text-sm font-medium text-center">TensorFlow</span>
        <span className="px-3 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-medium text-center">Apache Kafka</span>
        <span className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-lg text-sm font-medium text-center">Redis</span>
        <span className="px-3 py-2 bg-teal-100 text-teal-800 rounded-lg text-sm font-medium text-center">PostgreSQL</span>
        <span className="px-3 py-2 bg-pink-100 text-pink-800 rounded-lg text-sm font-medium text-center">Docker</span>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Implementation Architecture</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">1</div>
          <div>
            <h4 className="font-semibold">Data Pipeline Development</h4>
            <p className="text-gray-700">Built real-time streaming pipeline using Apache Kafka to process 1M+ daily transactions with sub-second latency.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4 mt-1">2</div>
          <div>
            <h4 className="font-semibold">Feature Store Creation</h4>
            <p className="text-gray-700">Developed centralized feature store with Redis caching for real-time feature serving and historical analysis.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4 mt-1">3</div>
          <div>
            <h4 className="font-semibold">Model Training Pipeline</h4>
            <p className="text-gray-700">Implemented automated retraining system with A/B testing framework for continuous model improvement.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4 mt-1">4</div>
          <div>
            <h4 className="font-semibold">Monitoring & Alerting</h4>
            <p className="text-gray-700">Built comprehensive monitoring system tracking model performance, data drift, and system health metrics.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Advanced Features & Techniques</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Behavioral Analytics</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Transaction velocity and frequency patterns</li>
              <li>• Geographic and temporal anomaly detection</li>
              <li>• Merchant category spending behavior analysis</li>
              <li>• Account age and transaction history profiling</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Network Analysis</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Device fingerprinting and IP reputation scoring</li>
              <li>• Graph-based fraud ring detection</li>
              <li>• Cross-account relationship mapping</li>
              <li>• Suspicious entity clustering algorithms</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Performance Improvements</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">20% Accuracy Improvement</h4>
            <p className="text-gray-700">Achieved 95.2% fraud detection rate compared to 79.3% baseline, significantly reducing financial losses.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">12% Reduction in False Positives</h4>
            <p className="text-gray-700">Decreased false positive rate from 8.2% to 7.2%, improving customer experience and reducing analyst workload.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Sub-100ms Response Time</h4>
            <p className="text-gray-700">Optimized inference pipeline to process transactions in under 100ms, meeting real-time authorization requirements.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Adaptive Learning</h4>
            <p className="text-gray-700">Implemented online learning capabilities to adapt to new fraud patterns without full model retraining.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Model Explainability & Compliance</h3>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex items-start">
          <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold mb-3 text-blue-800">Regulatory Compliance</h4>
            <p className="text-blue-700 text-sm mb-3">
              Implemented model interpretability features using SHAP and LIME to meet regulatory requirements 
              for explainable AI in financial services, ensuring compliance with banking regulations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Key Compliance Features:</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Real-time explanation generation</li>
                  <li>• Audit trail for all decisions</li>
                  <li>• Model bias monitoring</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Regulatory Standards:</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• PCI DSS compliance</li>
                  <li>• GDPR data protection</li>
                  <li>• Banking sector guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Business Impact</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg border text-center">
          <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">$2.4M</h4>
          <p className="text-sm text-gray-600">Annual Fraud Losses Prevented</p>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">30%</h4>
          <p className="text-sm text-gray-600">Analyst Productivity Increase</p>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">98.5%</h4>
          <p className="text-sm text-gray-600">Customer Satisfaction Score</p>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Lessons Learned & Future Enhancements</h3>
      <p className="text-gray-700 mb-4">
        This fraud detection system demonstrates the power of combining multiple machine learning approaches with 
        real-time processing capabilities. Future enhancements include incorporating graph neural networks for 
        better fraud ring detection and implementing federated learning for cross-institutional fraud pattern sharing.
      </p>
      
      <div className="bg-gray-900 text-white p-6 rounded-lg mt-8">
        <h4 className="text-lg font-semibold mb-2">System Impact</h4>
        <p className="text-gray-300">
          This advanced fraud detection system transformed transaction monitoring from a reactive, rule-based approach 
          to a proactive, AI-driven solution. By achieving 20% improved accuracy and 12% fewer false positives, 
          it significantly enhanced both security and customer experience while meeting strict regulatory requirements.
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default WorkwearProject;