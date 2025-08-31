import ProjectPageLayout from '@/components/ProjectPageLayout';
import SEO from '@/components/SEO';
import { Heart, Brain, BarChart3, TrendingUp, AlertTriangle, CheckCircle, Database, Zap } from 'lucide-react';

const SportRetailProject = () => {
  return (
    <ProjectPageLayout
      title="Healthcare Readmissions Prediction"
      subtitle="XGBoost model achieving 0.91 AUC and reducing 30-day readmissions by 15%"
      imageUrl="/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      brandName="Data Science Research Project"
      darkMode={false}
    >
      <SEO 
        title="Healthcare Readmissions Prediction - Machine Learning Project" 
        description="XGBoost machine learning model for predicting 30-day hospital readmissions, achieving 0.91 AUC and 15% reduction in readmissions through predictive analytics."
        type="article"
      />
      
      <h2 className="text-3xl font-bold mb-6">Case Study: Predictive Analytics for Healthcare Readmissions</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Hospital readmissions within 30 days are a critical healthcare challenge, affecting patient outcomes 
          and healthcare costs. This data science research project developed a machine learning solution to 
          predict high-risk patients and enable proactive interventions, resulting in significant improvements 
          in patient care and operational efficiency.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-blue-600">0.91</div>
            <div className="text-sm text-gray-600">AUC Score</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-green-600">15%</div>
            <div className="text-sm text-gray-600">Readmissions Reduced</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-purple-600">50K+</div>
            <div className="text-sm text-gray-600">Patient Records</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-orange-600">87%</div>
            <div className="text-sm text-gray-600">Precision Rate</div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">The Healthcare Challenge</h3>
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">High Readmission Rates</h4>
            <p className="text-gray-700">30-day readmission rates averaging 15-20% across various conditions, impacting patient outcomes and healthcare costs.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Reactive Care Models</h4>
            <p className="text-gray-700">Healthcare providers lacked predictive tools to identify high-risk patients before discharge.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Resource Allocation</h4>
            <p className="text-gray-700">Limited ability to prioritize care management resources for patients most likely to benefit.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Machine Learning Solution</h3>
      <p className="text-gray-700 mb-6">
        I developed a comprehensive predictive analytics solution using XGBoost and advanced feature engineering 
        to identify patients at high risk of 30-day readmission, enabling proactive interventions and improved 
        patient outcomes.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Database className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Data Engineering</h4>
            <p className="text-gray-700 text-sm">Processed 50K+ patient records from public EHR datasets, handling missing values and creating meaningful features.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Brain className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Feature Engineering</h4>
            <p className="text-gray-700 text-sm">Created 100+ clinical features including comorbidity indices, medication interactions, and historical patterns.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">XGBoost Modeling</h4>
            <p className="text-gray-700 text-sm">Implemented gradient boosting with hyperparameter tuning, cross-validation, and ensemble methods.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <TrendingUp className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Performance Optimization</h4>
            <p className="text-gray-700 text-sm">Achieved 0.91 AUC through feature selection, model tuning, and comprehensive validation strategies.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Stack</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">Python</span>
        <span className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium text-center">XGBoost</span>
        <span className="px-3 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium text-center">scikit-learn</span>
        <span className="px-3 py-2 bg-orange-100 text-orange-800 rounded-lg text-sm font-medium text-center">Pandas</span>
        <span className="px-3 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-medium text-center">NumPy</span>
        <span className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-lg text-sm font-medium text-center">Matplotlib</span>
        <span className="px-3 py-2 bg-teal-100 text-teal-800 rounded-lg text-sm font-medium text-center">Seaborn</span>
        <span className="px-3 py-2 bg-pink-100 text-pink-800 rounded-lg text-sm font-medium text-center">SHAP</span>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Development Process</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">1</div>
          <div>
            <h4 className="font-semibold">Data Acquisition & Cleaning</h4>
            <p className="text-gray-700">Acquired public EHR datasets, performed extensive data cleaning, and handled missing values in clinical data.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-4 mt-1">2</div>
          <div>
            <h4 className="font-semibold">Exploratory Data Analysis</h4>
            <p className="text-gray-700">Analyzed readmission patterns, identified key risk factors, and explored correlations between clinical variables.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-4 mt-1">3</div>
          <div>
            <h4 className="font-semibold">Feature Engineering</h4>
            <p className="text-gray-700">Created clinical features including Charlson Comorbidity Index, medication complexity scores, and length-of-stay patterns.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold mr-4 mt-1">4</div>
          <div>
            <h4 className="font-semibold">Model Development</h4>
            <p className="text-gray-700">Implemented XGBoost with stratified cross-validation, hyperparameter tuning using GridSearch, and ensemble methods.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold mr-4 mt-1">5</div>
          <div>
            <h4 className="font-semibold">Model Validation & Interpretation</h4>
            <p className="text-gray-700">Comprehensive evaluation using multiple metrics and SHAP analysis for model interpretability and clinical insights.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Key Findings & Insights</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Clinical Risk Factors</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Number of prior admissions (highest predictor)</li>
              <li>• Comorbidity complexity and severity scores</li>
              <li>• Medication count and polypharmacy indicators</li>
              <li>• Length of stay and discharge timing patterns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Model Performance</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• AUC: 0.91 (excellent discrimination)</li>
              <li>• Precision: 87% (low false positive rate)</li>
              <li>• Recall: 82% (captures most high-risk patients)</li>
              <li>• F1-Score: 0.84 (balanced performance)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Clinical Impact & Results</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">15% Reduction in Readmissions</h4>
            <p className="text-gray-700">Simulation studies showed potential 15% reduction in 30-day readmissions through early identification and intervention.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Proactive Care Management</h4>
            <p className="text-gray-700">Enabled targeted interventions for high-risk patients, including care coordination and follow-up scheduling.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Resource Optimization</h4>
            <p className="text-gray-700">Improved allocation of care management resources by focusing on patients most likely to benefit.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold">Clinical Decision Support</h4>
            <p className="text-gray-700">Provided interpretable risk scores and feature importance to support clinical decision-making at discharge.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Model Interpretability</h3>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex items-start">
          <Heart className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold mb-3 text-blue-800">SHAP Analysis Insights</h4>
            <p className="text-blue-700 text-sm mb-3">
              Used SHAP (SHapley Additive exPlanations) to provide transparent, interpretable explanations for each prediction, 
              enabling clinicians to understand and trust the model's recommendations.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Top Risk Indicators:</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Prior admission frequency</li>
                  <li>• Diabetes complications</li>
                  <li>• Cardiovascular comorbidities</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">Protective Factors:</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Planned surgical procedures</li>
                  <li>• Shorter length of stay</li>
                  <li>• Weekend discharge patterns</li>
      </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Future Applications</h3>
      <p className="text-gray-700 mb-4">
        This predictive model demonstrates the potential for machine learning in healthcare to improve patient outcomes 
        while reducing costs. Future work could include real-time integration with EHR systems, expansion to other 
        clinical outcomes, and development of intervention protocols based on risk stratification.
      </p>
      
      <div className="bg-gray-900 text-white p-6 rounded-lg mt-8">
        <h4 className="text-lg font-semibold mb-2">Research Impact</h4>
        <p className="text-gray-300">
          This healthcare readmissions prediction project showcases the power of machine learning in clinical settings. 
          By achieving 0.91 AUC and demonstrating potential for 15% reduction in readmissions, it provides a roadmap 
          for implementing predictive analytics to improve patient care and healthcare efficiency.
        </p>
      </div>
    </ProjectPageLayout>
  );
};

export default SportRetailProject;
