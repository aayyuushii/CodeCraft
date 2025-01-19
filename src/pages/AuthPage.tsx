import { SignIn, SignUp } from '@clerk/clerk-react';
import { Brain } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function AuthPage() {
  const location = useLocation();
  const isSignUp = location.pathname.includes('/sign-up');


  return (
    <div className="min-h-screen flex">
      {/* Left Side - AI Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-purple-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1676299081847-c3c9b2d93ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          <Brain className="w-20 h-20 mb-8 text-purple-300" />
          <h2 className="text-4xl font-bold mb-4">Welcome to AI SaaS</h2>
          <p className="text-lg text-purple-200 text-center">
            Join us in revolutionizing the future of business with AI-powered solutions
          </p>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {isSignUp ? (
            <SignUp 
              redirectUrl="/onboarding"
              appearance={{
                elements: {
                  formButtonPrimary: 
                    'bg-purple-600 hover:bg-purple-700 text-sm normal-case'
                }
              }}
            />
          ) : (
            <SignIn 
              redirectUrl="/onboarding"
              appearance={{
                elements: {
                  formButtonPrimary: 
                    'bg-purple-600 hover:bg-purple-700 text-sm normal-case'
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}