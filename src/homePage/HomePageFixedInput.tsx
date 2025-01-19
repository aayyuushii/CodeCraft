
import React, { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import CompanyCategoryComponent from "./CompanyCategoryComponent";
import { companies } from "../store/pitch_mockDataResults.js"; // Your mock data import

const HomePageFixedInput = () => {
  const [companyName, setCompanyName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [matchedCompany, setMatchedCompany] = useState<{
    index: number;
    [key: string]: any;
  } | null>(null); // Object holding index and matched data
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // For error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null); // Reset error message
    setMatchedCompany(null); // Reset matched company

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Find the index of the matching company in the mock data
      const index = companies.findIndex(
        (company) =>
          company.companyName.toLowerCase() === companyName.toLowerCase()
      );

      if (index !== -1) {
        // If a match is found, set the matched company
        setMatchedCompany({ index, data: companies[index] });
      } else {
        setErrorMessage("No company found with that name."); // Show error message
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again."); // Generic error message
    } finally {
      setIsLoading(false);
      setCompanyName(""); // Clear input after search
    }
  };
  console.log(matchedCompany);

  return (
    <div className="myH myWidth bg-gray-50 flex flex-col items-center">
      {/* Main content area */}
      <main className="flex-grow max-w-7xl w-full flex flex-col items-center min-h-screen pt-16">
        {matchedCompany ? (
          <div className="w-full px-4 animate-fadeIn space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Search Results for "{matchedCompany.data.companyName}"
            </h2>
            {/* <SideBar /> */}
            {/* Pass the index and data to CompanyCategoryComponent */}
            <CompanyCategoryComponent
              companyIndex={matchedCompany.index}
              companyData={matchedCompany.data}
            />
          </div>
        ) : (
          <div className="text-center space-y-4 flex-grow flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome to LeadAI Search
            </h1>
            <p className="text-xl text-gray-600">
              Enter an organization name or upload an Excel sheet to get started
            </p>
            {errorMessage && (
              <p className="text-red-500 text-lg mt-4">{errorMessage}</p>
            )}
          </div>
        )}
      </main>

      {/* Search Bar */}
      <div className="w-full bg-gray-50">
        <div className="mx-auto px-4 py-6 max-w-7xl">
          <form onSubmit={handleSubmit} className="relative">
            <div
              className="relative rounded-full bg-gray-100 hover:bg-gray-200 focus-within:bg-gray-200 
              border border-gray-300 focus-within:border-blue-500 shadow transition-all duration-200"
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>

              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Search for an organization..."
                className="w-full pl-12 pr-32 py-4 rounded-full text-gray-900 placeholder-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2 transition-all duration-200 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      <span>Searching</span>
                    </div>
                  ) : (
                    "Search"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePageFixedInput;
