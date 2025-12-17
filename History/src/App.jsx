import { useState } from 'react'
import './App.css'

const canadianEvents = [
  {
    id: 1,
    title: 'D-Day (Juno Beach)',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    image: '../src/assets/pfp.jpg'
  },
  {
    id: 2,
    title: 'Vimy Ridge',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    image: '../src/assets/pfp.jpg'
  },
  {
    id: 3,
    title: 'Battle of Hong Kong',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    image: '../src/assets/pfp.jpg'
  },
  {
    id: 4,
    title: 'The Great Depression - Canada',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    image: '../src/assets/pfp.jpg'
  },
  {
    id: 5,
    title: 'The Bill of Rights',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    image: '../src/assets/pfp.jpg'
  }
]

const nonCanadianEvents = [
  {
    id: 6,
    title: 'Holocaust - Auschwitz-Birkenau',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    image: '../src/assets/pfp.jpg'
  },
  {
    id: 7,
    title: 'Pearl Harbour',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    image: '../src/assets/pfp.jpg'
  },
  {
    id: 8,
    title: 'Nuremberg Trials',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    image: '../src/assets/pfp.jpg'
  },
  {
    id: 9,
    title: 'Cold War',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    image: '../src/assets/pfp.jpg'
  },
  {
    id: 10,
    title: 'Space Race (1957-1969)',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    image: '../src/assets/pfp.jpg'
  }
]

function App() {
  const [activeTab, setActiveTab] = useState('canadian')

  const currentEvents = activeTab === 'canadian' ? canadianEvents : nonCanadianEvents

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">War Table Archives</h1>
        <p className="app-subtitle">Critical battles that shaped World War II</p>
      </header>

      <div className="tab-nav">
        <button 
          onClick={() => setActiveTab('canadian')}
          className={activeTab === 'canadian' ? 'tab-button tab-button--active' : 'tab-button'}
        >
          Canadian Operations
        </button>
        <button 
          onClick={() => setActiveTab('non-canadian')}
          className={activeTab === 'non-canadian' ? 'tab-button tab-button--active' : 'tab-button'}
        >
          Allied Operations
        </button>
      </div>

      <div className="content-area">
        <div className="event-list">
          {currentEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-card-content">
                <h3 className="event-card-title">{event.title}</h3>
                <p className="event-card-description">{event.description}</p>
              </div>
              <div className="event-card-image">
                <img src={event.image} alt={event.title} className="event-card-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
