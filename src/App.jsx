// Import React and our Presentation component
import React from 'react';
import Presentation from './components/Presentation';

// Define our main App component
// This serves as the top-level component for our application
function App() {
  return (
    // We wrap our presentation in a main container
    // This gives us flexibility to add navigation or other elements later
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* The Presentation component contains all our slides and navigation */}
      <Presentation />
    </main>
  );
}

// Export the App component as the default export
export default App;