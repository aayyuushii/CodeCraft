import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import OnboardingPage from './pages/OnboardingPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './pages/ProtectedRoute';
import { Dashboard } from './pages/dashboard';


const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    "Missing Clerk Publishable Key. Please add VITE_CLERK_PUBLISHABLE_KEY to your .env file. Get your key from https://dashboard.clerk.com/last-active?path=api-keys"
  );
}


function App() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Router>
        <Routes>
          {/* Landing page with auth check */}
          <Route path="/" element={
            <>
              <SignedIn>
                <Navigate to="/home" replace />
              </SignedIn>
              <SignedOut>
                <LandingPage />
              </SignedOut>
            </>
          } />

          {/* Auth page */}
          <Route path="/auth" element={
            <SignedOut>
              <AuthPage />
            </SignedOut>
          } />

          {/* Protected routes */}
          {/* <Route path="/onboarding" element={
            <SignedIn>
              <OnboardingPage />
            </SignedIn>
          } /> */}

          <Route
            path="/onboarding"
            element={
              <ProtectedRoute>
                <OnboardingPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Dashboard"
            element={
                <SignedIn>
                  <Dashboard />
               </SignedIn>
            }
          />

          <Route path="/home" element={
            <SignedIn>
              <HomePage />
            </SignedIn>
          } />

          {/* Catch-all redirect to landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;

