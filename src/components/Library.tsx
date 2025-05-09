import React, { useState } from 'react';
import '../styles/Library.css';

// Mock game data with local placeholder images
const mockGames = [
  { 
    id: 1, 
    title: "Lords Fallen", 
    coverUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1501750/8c2a09d991a95867499cd559684b56e1a7098875/header_alt_assets_3.jpg?t=1746780188",
    playtime: "12h",
    completion: "In Progress" 
  },
  { 
    id: 2, 
    title: "The Elder Scrolls IV: Oblivion Remastered", 
    coverUrl: "https://i.imgur.com/txAYeDy.jpeg",
    playtime: "85h",
    completion: "Complete" 
  },
  { 
    id: 3, 
    title: "Mario Kart 8 Deluxe", 
    coverUrl: "https://i.imgur.com/ZT5EKCT.jpeg",
    playtime: "24h",
    completion: "In Progress" 
  },
  { 
    id: 4, 
    title: "Super Mario Bros Wonder", 
    coverUrl: "https://i.imgur.com/hTOPV5O.jpeg",
    playtime: "8h",
    completion: "Just Started" 
  },
  { 
    id: 5, 
    title: "Wizordum", 
    coverUrl: "https://i.imgur.com/ZM4pB6V.jpeg",
    playtime: "32h",
    completion: "Complete" 
  },
  { 
    id: 6, 
    title: "Conquest Dark", 
    coverUrl: "https://i.imgur.com/2IHmFCj.jpeg",
    playtime: "5h",
    completion: "Just Started" 
  },
  { 
    id: 7, 
    title: "Super Mario Odyssey", 
    coverUrl: "https://i.imgur.com/OtBxNYF.jpeg",
    playtime: "45h",
    completion: "Complete" 
  },
  { 
    id: 8, 
    title: "Rise of the Ronin", 
    coverUrl: "https://i.imgur.com/0TCZnWt.jpeg",
    playtime: "18h",
    completion: "In Progress" 
  },
  { 
    id: 9, 
    title: "Expedition", 
    coverUrl: "https://i.imgur.com/YxJxcHf.jpeg",
    playtime: "7h",
    completion: "Just Started" 
  },
  { 
    id: 10, 
    title: "Hole", 
    coverUrl: "https://i.imgur.com/z6e7CHr.jpeg",
    playtime: "3h",
    completion: "Just Started" 
  },
];

const Library: React.FC = () => {
  const [games, setGames] = useState(mockGames);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [zoomLevel, setZoomLevel] = useState(50); // 0-100 scale
  
  // Filter games based on search query
  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="library-container">
      <div className="library-header">
        <div className="search-container">
          <svg 
            className="search-icon" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#777' }}
          >
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            type="text" 
            className="search-input"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && <button className="clear-search" onClick={() => setSearchQuery('')}>Clear all</button>}
        </div>
        
        <div className="view-controls">
          <div className="filters-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21M6 12H18M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Filters
          </div>
          
          <div className="view-modes">
            <button 
              className={`view-mode-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button 
              className={`view-mode-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          <div className="zoom-control">
            <button 
              className="zoom-button" 
              onClick={() => setZoomLevel(Math.max(zoomLevel - 10, 0))}
              disabled={zoomLevel <= 0}
            >
              <span>−</span>
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={zoomLevel}
              onChange={(e) => setZoomLevel(Number(e.target.value))}
              className="zoom-slider"
            />
            <button 
              className="zoom-button" 
              onClick={() => setZoomLevel(Math.min(zoomLevel + 10, 100))}
              disabled={zoomLevel >= 100}
            >
              <span>+</span>
            </button>
            <button className="fullscreen-button" title="Toggle Fullscreen">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`games-grid ${viewMode === 'list' ? 'list-view' : ''}`}
        style={{
          '--zoom-factor': `${0.5 + (zoomLevel / 100) * 1.5}`
        } as React.CSSProperties}
      >
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <div key={game.id} className="game-card">
              <div className="game-cover-wrapper">
                <img 
                  src={game.coverUrl} 
                  alt={game.title}
                  className="game-cover"
                  onError={(e) => {
                    // Fallback for broken images
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x450?text=No+Cover';
                  }}
                />
                {viewMode === 'grid' && (
                  <div className="game-info-overlay">
                    <div className="game-title">{game.title}</div>
                    <div className="game-playtime">{game.playtime}</div>
                    <div className="game-completion">{game.completion}</div>
                  </div>
                )}
              </div>
              {viewMode === 'list' && (
                <div className="game-details">
                  <div className="game-title">{game.title}</div>
                  <div className="game-meta">
                    <span className="game-playtime">{game.playtime}</span>
                    <span className="game-completion">{game.completion}</span>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-games-message">
            No games found. Try adjusting your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;