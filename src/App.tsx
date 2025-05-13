import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/home/HomePage';

// Lazy loading other pages to improve initial load time
const ToursPage = React.lazy(() => import('./pages/tours/ToursPage'));
const TourDetailPage = React.lazy(() => import('./pages/tour-detail/TourDetailPage'));
const BookingPage = React.lazy(() => import('./pages/booking/BookingPage'));
const LoginPage = React.lazy(() => import('./pages/auth/LoginPage'));
const SignupPage = React.lazy(() => import('./pages/auth/SignupPage'));
const ProfilePage = React.lazy(() => import('./pages/auth/ProfilePage'));
const BlogPage = React.lazy(() => import('./pages/blog/BlogPage'));
const BlogPostPage = React.lazy(() => import('./pages/blog/BlogPostPage'));

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <React.Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/tours/:id" element={<TourDetailPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
