import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { supabase } from './lib/supabase';
import { getClientProject } from './lib/supabaseService';

// Screens
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProjectStatus from './screens/ProjectStatus';
import BeforeAfterGallery from './screens/BeforeAfterGallery';
import BookingScreen from './screens/BookingScreen';


function AppShell() {
  const { user, loading: authLoading, signOut } = useAuth();
  const [currentPage, setCurrentPage] = useState('landing');
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [guestMode, setGuestMode] = useState(false);

  // Check if the user is "authenticated" (either real Supabase user or guest mode)
  const isAuthenticated = !!user || guestMode;

  // Redirect to landing if user logs out while on a protected page (and NOT guest)
  useEffect(() => {
    if (!authLoading && !isAuthenticated && ['home', 'project-status', 'before-after'].includes(currentPage)) {
      setCurrentPage('landing');
    }
  }, [user, authLoading, currentPage, guestMode]);

  // Navigate to home when user logs in via Supabase
  useEffect(() => {
    if (user && currentPage === 'landing') {
      setCurrentPage('home');
    }
  }, [user]);

  // Load project data when on protected pages
  useEffect(() => {
    async function loadProject() {
      if (currentPage === 'home' || currentPage === 'project-status' || currentPage === 'before-after') {
        setLoading(true);
        let data = null;
        if (supabase && user) {
          data = await getClientProject(user.id);
        }
        if (data) {
          setProjectData(data);
        } else {
          // Fallback demo data for UI display testing
          setProjectData({
            id: 'demo-1',
            status: 'in_progress',
            address: 'Budapest, Budai Vár köz 4.',
            progress_percentage: 65,
            estimated_completion_date: '2026-05-20',
            updates: [
              { id: 1, message: 'Alapozás és szintezés befejezve.', created_at: '2026-03-01' },
              { id: 2, message: 'Öntözőrendszer telepítése folyamatban.', created_at: '2026-03-05' }
            ],
            before_after_media: [{
              before_url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800',
              after_url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800',
              share_text: 'Nézzétek milyen csodás kertet épít nekem a Grandiflora! 🌿🏡'
            }]
          });
        }
        setLoading(false);
      }
    }
    loadProject();
  }, [currentPage, user]);

  const handleLoginSuccess = () => {
    // When Supabase is connected, onAuthStateChange handles real auth.
    // In demo mode, enable guest access.
    setGuestMode(true);
    setCurrentPage('home');
  };

  const handleLogout = async () => {
    await signOut();
    setGuestMode(false);
    setCurrentPage('landing');
  };

  return (
    <div className="relative min-h-screen w-full font-sans text-primary">

      {/* Full-bleed Background container (Fixed to viewport) */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src="/assets/background_v3.png"
          alt="Háttér"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] transition-all"></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Loading Overlay */}
        {(loading || authLoading) && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/30 backdrop-blur-md transition-all duration-300">
            <div className="w-12 h-12 border-4 border-accent/40 border-t-accent rounded-full animate-spin shadow-lg" />
          </div>
        )}

        {/* Router Content Container */}
        {currentPage === 'landing' ? (
          <LandingScreen onNavigate={(page) => {
            if (page === 'home') { setGuestMode(true); }
            setCurrentPage(page);
          }} />
        ) : (
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 flex flex-col">
            {currentPage === 'login' && <LoginScreen onBack={() => setCurrentPage('landing')} onLoginSuccess={handleLoginSuccess} />}
            {currentPage === 'register' && <RegisterScreen onBack={() => setCurrentPage('landing')} onRegisterSuccess={handleLoginSuccess} onGoToLogin={() => setCurrentPage('login')} />}
            {currentPage === 'home' && <HomeScreen onLogout={handleLogout} onNavigateTo={setCurrentPage} projectData={projectData} />}
            {currentPage === 'project-status' && <ProjectStatus project={projectData} onBack={() => setCurrentPage('home')} />}
            {currentPage === 'before-after' && <BeforeAfterGallery project={projectData} onBack={() => setCurrentPage('home')} />}
            {currentPage === 'booking' && <BookingScreen onBack={() => setCurrentPage('home')} />}
          </main>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}
