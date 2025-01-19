import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, ArrowRight } from 'lucide-react';


export default function OnboardingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationName: '',
    services: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your Flask backend
    localStorage.setItem('isOnboarded', 'true');
    navigate('/home');
  };

  return (
    <div className="min-h-screen  bg-[url(https://i.pinimg.com/originals/1a/a4/60/1aa4608ae3ec6562dc394ab747b26124.gif)] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="bg-white opacity- rounded-md mt-5 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="m-4 flex justify-center">
          <Building2 className="h-12 w-12 text-purple-600" />
        </div>
        <h2 className="mt-6 mx-4 text-center text-3xl font-extrabold text-gray-900">
          Tell us about your organization
        </h2>
        <p className="mt-5 text-center text-sm text-gray-600">
          We'll customize your experience based on your needs
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
                Organization Name
              </label>
              <div className="mt-1">
                <input
                  id="organizationName"
                  name="organizationName"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="services" className="block text-sm font-medium text-gray-700">
                Services Provided
              </label>
              <div className="mt-1">
                <textarea
                  id="services"
                  name="services"
                  rows={4}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  value={formData.services}
                  onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
