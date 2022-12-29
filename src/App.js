import { useState } from 'react';
import Card from './components/ui/Card';
import { FetchCardDataProvider } from './context/FetchCardDataContext';
import FetchCardData from './hooks/FetchCardData';
import ResponsiveCard from './components/ui/_test_/ResponsiveCard';

function App() {
  return (
    <FetchCardDataProvider>
      {/* <div id="card-grid" className="card-collection">
        <FetchCardData />
      </div> */}
      <ResponsiveCard />
    </FetchCardDataProvider>
  );
}

export default App;
