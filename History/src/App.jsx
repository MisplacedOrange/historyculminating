import { useState } from 'react';
import MainPanel from './components/MainPanel';
import EventPanel from './components/EventPanel';
import { railData } from './data/railData';

/**
 * Main application component
 * Manages horizontal accordion layout with main panel and theatre event panels
 * Uses state to control which panel is currently expanded
 * 
 * @returns {JSX.Element} Root application component
 */
function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <MainPanel 
        isExpanded={expandedIndex === null}
        onClick={() => setExpandedIndex(null)}
      />
      {railData.map((rail, index) => (
        <EventPanel
          key={rail.id}
          rail={rail}
          index={index}
          isExpanded={expandedIndex === index}
          onClick={() => setExpandedIndex(index)}
        />
      ))}
    </div>
  );
}

export default App;
