import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center opacity-10" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-300">Email Splash</span>
          </div>
          
          <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 text-transparent bg-clip-text">
            Transform Your Business<br />with AI Intelligence
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-300">
            Harness the power of artificial intelligence to revolutionize your workflow, 
            boost productivity, and unlock new possibilities.
          </p>
          
          <button
            onClick={() => navigate('/auth')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="relative z-10 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -translate-y-full bg-gradient-to-b from-purple-400 to-purple-600 transform transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
