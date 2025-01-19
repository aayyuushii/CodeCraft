import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-900"></div>
      </div>
    );
  }

  if (!userId) {
    return <Navigate to="/auth" replace />;
  }

  if (localStorage.getItem('isOnboarded') === 'true') {
    return <Navigate to="/home" replace />; // Skip onboarding and redirect to home
  }

  return <>{children}</>;
}