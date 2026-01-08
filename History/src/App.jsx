import { useState } from 'react';
import MainPanel from './components/MainPanel';
import TheatrePanel from './components/TheatrePanel';
import CanadianTheatre from './components/theatres/CanadianTheatre';
import PacificTheatre from './components/theatres/PacificTheatre';
import EuropeanTheatre from './components/theatres/EuropeanTheatre';
import HomeFrontTheatre from './components/theatres/HomeFrontTheatre';
import PostWarTheatre from './components/theatres/PostWarTheatre';

/** Main application component - manages horizontal accordion layout */
function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <MainPanel 
        isExpanded={expandedIndex === null}
        onClick={() => setExpandedIndex(null)}
      />
      
      <TheatrePanel
        index={0}
        isExpanded={expandedIndex === 0}
        onClick={() => setExpandedIndex(0)}
        title="PANEL 1" /* TODO: Panel 1 title */
        bgColor="#8B4545" /* TODO: Panel 1 background color */
      >
        <CanadianTheatre />
      </TheatrePanel>

      <TheatrePanel
        index={1}
        isExpanded={expandedIndex === 1}
        onClick={() => setExpandedIndex(1)}
        title="PANEL 2" /* TODO: Panel 2 title */
        bgColor="#3B5875" /* TODO: Panel 2 background color */
      >
        <PacificTheatre />
      </TheatrePanel>

      <TheatrePanel
        index={2}
        isExpanded={expandedIndex === 2}
        onClick={() => setExpandedIndex(2)}
        title="PANEL 3" /* TODO: Panel 3 title */
        bgColor="#6B6B6B" /* TODO: Panel 3 background color */
      >
        <EuropeanTheatre />
      </TheatrePanel>

      <TheatrePanel
        index={3}
        isExpanded={expandedIndex === 3}
        onClick={() => setExpandedIndex(3)}
        title="PANEL 4" /* TODO: Panel 4 title */
        bgColor="#9B7653" /* TODO: Panel 4 background color */
      >
        <HomeFrontTheatre />
      </TheatrePanel>

      <TheatrePanel
        index={4}
        isExpanded={expandedIndex === 4}
        onClick={() => setExpandedIndex(4)}
        title="PANEL 5" /* TODO: Panel 5 title */
        bgColor="#4A6B7C" /* TODO: Panel 5 background color */
      >
        <PostWarTheatre />
      </TheatrePanel>
    </div>
  );
}

export default App;
