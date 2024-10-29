// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import InstagramScraper from './pages/InstagramScraper';
// import TwitterScraper from './pages/TwitterScraper';
// import LinkedInScraper from './pages/LinkedInScraper';
// import SignUp from './pages/Signup';
// import Login from './pages/Login';
// import PrivateRoute from './components/PrivateRoute';
// import YoutubeScraper from './pages/Youtube';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow container mx-auto p-4">
//           <Routes>
//             {/* Public routes */}
//             <Route path="/" element={<Login />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/login" element={<Login />} />

//             {/* Protected routes */}
//             <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
//             <Route path="/instagram" element={<PrivateRoute><InstagramScraper /></PrivateRoute>} />
//             <Route path="/twitter" element={<PrivateRoute><TwitterScraper /></PrivateRoute>} />
//             <Route path="/linkedin" element={<PrivateRoute><LinkedInScraper /></PrivateRoute>} />
//             <Route path="/youtube" element={<PrivateRoute><YoutubeScraper /></PrivateRoute>} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import InstagramScraper from './pages/InstagramScraper';
import TwitterScraper from './pages/TwitterScraper';
import LinkedInScraper from './pages/LinkedInScraper';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import YoutubeScraper from './pages/Youtube';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* ToastContainer at the top level for global notifications */}
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
        
        {/* Header */}
        <Header />
        
        {/* Main content area */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            {/* Protected routes */}
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/instagram" element={<PrivateRoute><InstagramScraper /></PrivateRoute>} />
            <Route path="/twitter" element={<PrivateRoute><TwitterScraper /></PrivateRoute>} />
            <Route path="/linkedin" element={<PrivateRoute><LinkedInScraper /></PrivateRoute>} />
            <Route path="/youtube" element={<PrivateRoute><YoutubeScraper /></PrivateRoute>} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
