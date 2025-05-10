import React, { useState } from 'react';
import '../styles/Screenshots.css';

// Mock screenshot data
const mockScreenshots = [
  {
    id: 1,
    game: "The Elder Scrolls IV: Oblivion",
    path: "screenshots/oblivion/2024-03-15_14-30-22.png",
    thumbnail: "https://i.imgur.com/txAYeDy.jpeg",
    timestamp: "2024-03-15 14:30:22",
    size: "2.4 MB"
  },
  {
    id: 2,
    game: "Super Mario Odyssey",
    path: "screenshots/mario/2024-03-14_20-15-45.png",
    thumbnail: "https://i.imgur.com/OtBxNYF.jpeg",
    timestamp: "2024-03-14 20:15:45",
    size: "1.8 MB"
  },
  {
    id: 3,
    game: "Mario Kart 8 Deluxe",
    path: "screenshots/mariokart/2024-03-13_16-45-12.png",
    thumbnail: "https://i.imgur.com/ZT5EKCT.jpeg",
    timestamp: "2024-03-13 16:45:12",
    size: "2.1 MB"
  }
];

const Screenshots: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedGame, setSelectedGame] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'game' | 'size'>('date');
  const [searchQuery, setSearchQuery] = useState('');

  const handleDeleteScreenshot = (id: number) => {
    // Add logic to delete screenshot
    console.log("Deleting screenshot:", id);
  };

  const handleShareScreenshot = (id: number) => {
    // Add logic to share screenshot
    console.log("Sharing screenshot:", id);
  };

  const handleOpenScreenshot = (id: number) => {
    // Add logic to open screenshot
    console.log("Opening screenshot:", id);
  };

  return (
    <div className="screenshots-container">
      {/* Header with controls */}
      <div className="screenshots-header">
        <div className="search-container">
          <svg 
            className="search-icon" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            type="text" 
            className="search-input"
            placeholder="Search screenshots..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="view-controls">
          <div className="view-modes">
            <button 
              className={`view-mode-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H10V10H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 4H20V10H14V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 14H10V20H4V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 14H20V20H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className={`view-mode-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="filter-controls">
            <select 
              className="game-filter"
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
            >
              <option value="all">All Games</option>
              <option value="oblivion">The Elder Scrolls IV: Oblivion</option>
              <option value="mario">Super Mario Odyssey</option>
              <option value="mariokart">Mario Kart 8 Deluxe</option>
            </select>

            <select 
              className="sort-filter"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'game' | 'size')}
            >
              <option value="date">Sort by Date</option>
              <option value="game">Sort by Game</option>
              <option value="size">Sort by Size</option>
            </select>
          </div>
        </div>
      </div>

      {/* Screenshots grid/list */}
      <div className={`screenshots-content ${viewMode}`}>
        {mockScreenshots.map(screenshot => (
          <div key={screenshot.id} className="screenshot-item">
            <div className="screenshot-preview" onClick={() => handleOpenScreenshot(screenshot.id)}>
              <img src={screenshot.thumbnail} alt={`Screenshot from ${screenshot.game}`} />
              <div className="screenshot-overlay">
                <div className="screenshot-actions">
                  <button 
                    className="action-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShareScreenshot(screenshot.id);
                    }}
                    title="Share"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="action-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteScreenshot(screenshot.id);
                    }}
                    title="Delete"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="screenshot-info">
              <h4 className="game-title">{screenshot.game}</h4>
              <div className="screenshot-meta">
                <span className="timestamp">{screenshot.timestamp}</span>
                <span className="size">{screenshot.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {mockScreenshots.length === 0 && (
        <div className="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3>No Screenshots Yet</h3>
          <p>Take your first screenshot using the hotkey (F12) while playing a game.</p>
        </div>
      )}
    </div>
  );
};

export default Screenshots; 