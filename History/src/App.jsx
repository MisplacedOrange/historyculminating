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
        title="CANADIAN THEATRE"
        bgColor="#979797"
      >
        <CanadianTheatre />
      </TheatrePanel>

      <TheatrePanel
        index={1}
        isExpanded={expandedIndex === 1}
        onClick={() => setExpandedIndex(1)}
        title="PACIFIC THEATRE"
        bgColor="#8b8c8b"
      >
        <PacificTheatre />
      </TheatrePanel>

      <TheatrePanel
        index={2}
        isExpanded={expandedIndex === 2}
        onClick={() => setExpandedIndex(2)}
        title="EUROPEAN THEATRE"
        bgColor="#909090"
      >
        <EuropeanTheatre />
      </TheatrePanel>

      <TheatrePanel
        index={3}
        isExpanded={expandedIndex === 3}
        onClick={() => setExpandedIndex(3)}
        title="HOMEFRONT THEATRE"
        bgColor="#8B8B8B"
      >
        <HomeFrontTheatre />
      </TheatrePanel>

      <TheatrePanel
        index={4}
        isExpanded={expandedIndex === 4}
        onClick={() => setExpandedIndex(4)}
        title="POST-WAR THEATRE"
        bgColor="#848484"
      >
        <PostWarTheatre />
      </TheatrePanel>
    </div>
  );
}

export default App;
