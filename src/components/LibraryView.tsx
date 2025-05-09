import { useState } from 'react';
import '../styles/LibraryView.css';

interface Game {
  id: string;
  title: string;
  coverImage: string;
  installed?: boolean;
  playTime?: string;
  completionState?: string;
}

const LibraryView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [games, setGames] = useState<Game[]>([
    { 
      id: '1', 
      title: 'ELIM', 
      coverImage: 'https://via.placeholder.com/300x400/222222/FFFFFF?text=ELIM' 
    },
    { 
      id: '2', 
      title: 'No Man\'s Sky', 
      coverImage: 'https://via.placeholder.com/300x400/0c64a0/FFFFFF?text=No+Man%27s+Sky' 
    },
    { 
      id: '3', 
      title: 'RimWorld', 
      coverImage: 'https://via.placeholder.com/300x400/333333/FFFFFF?text=RimWorld' 
    },
    { 
      id: '4', 
      title: 'Kingdom Come: Deliverance', 
      coverImage: 'https://via.placeholder.com/300x400/654321/FFFFFF?text=Kingdom+Come:+Deliverance',
      installed: true,
      playTime: '43h 37m',
      completionState: 'Not Set'
    },
    { 
      id: '5', 
      title: 'Ropuka\'s Idle Island', 
      coverImage: 'https://via.placeholder.com/300x400/5fa049/FFFFFF?text=Ropuka%27s+Idle+Island' 
    },
    { 
      id: '6', 
      title: 'Noita', 
      coverImage: 'https://via.placeholder.com/300x400/000000/FFD700?text=Noita' 
    },
    { 
      id: '7', 
      title: 'Shredders', 
      coverImage: 'https://via.placeholder.com/300x400/FFFFFF/222222?text=Shredders' 
    },
    { 
      id: '8', 
      title: 'Zero Sievert', 
      coverImage: 'https://via.placeholder.com/300x400/333333/FFFF00?text=Zero+Sievert' 
    },
    { 
      id: '9', 
      title: 'The Binding of Isaac', 
      coverImage: 'https://via.placeholder.com/300x400/990000/FFFFFF?text=Isaac' 
    },
    { 
      id: '10', 
      title: 'Forza Horizon 4', 
      coverImage: 'https://via.placeholder.com/300x400/0047AB/FFFFFF?text=Forza+Horizon+4' 
    },
    { 
      id: '11', 
      title: 'Vampire Survivors', 
      coverImage: 'https://via.placeholder.com/300x400/8B0000/FFFFFF?text=Vampire+Survivors' 
    },
    { 
      id: '12', 
      title: 'Palworld', 
      coverImage: 'https://via.placeholder.com/300x400/66CCFF/222222?text=Palworld' 
    },
    { 
      id: '13', 
      title: 'Rainbow Six Siege', 
      coverImage: 'https://via.placeholder.com/300x400/000000/FFFFFF?text=R6+Siege' 
    },
    { 
      id: '14', 
      title: 'Animal Crossing', 
      coverImage: 'https://via.placeholder.com/300x400/88cc88/000000?text=Animal+Crossing' 
    },
    { 
      id: '15', 
      title: 'Dinkum', 
      coverImage: 'https://via.placeholder.com/300x400/FFD700/663300?text=Dinkum' 
    },
    { 
      id: '16', 
      title: 'Hollow Knight', 
      coverImage: 'https://via.placeholder.com/300x400/333333/FFFFFF?text=Hollow+Knight' 
    },
    { 
      id: '17', 
      title: 'Need For Speed', 
      coverImage: 'https://via.placeholder.com/300x400/000000/FF0000?text=Need+For+Speed' 
    },
    { 
      id: '18', 
      title: 'Oblivion', 
      coverImage: 'https://via.placeholder.com/300x400/FF4500/000000?text=Oblivion' 
    }
  ]);

  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleGameClick = (game: Game) => {
    console.log('Game clicked:', game.title);
  };

  const handleInfoClick = (e: React.MouseEvent, game: Game) => {
    e.stopPropagation();
    console.log('Info clicked for:', game.title);
  };

  const handlePlayClick = (e: React.MouseEvent, game: Game) => {
    e.stopPropagation();
    console.log('Play clicked for:', game.title);
  };

  return (
    <div className="library-view">
      <div className="library-header">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={handleClearSearch}>
              ×
            </button>
          )}
        </div>
        <div className="library-controls">
          <button className="clear-all-button">Clear all</button>
          <div className="filters-button">
            <span className="filter-icon">≡</span>
            <span>Filters (1)</span>
          </div>
          <div className="view-toggle">
            <button 
              className={`grid-view-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <span className="grid-icon">▦</span>
            </button>
            <button 
              className={`list-view-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <span className="list-icon">≡</span>
            </button>
          </div>
          <div className="sort-options">
            <button className="sort-button">↕</button>
          </div>
          <div className="display-options">
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <button className="fullscreen-button">⛶</button>
        </div>
      </div>

      <div className={`games-container ${viewMode}`}>
        {filteredGames.map((game) => (
          <div 
            key={game.id} 
            className="game-card" 
            onClick={() => handleGameClick(game)}
          >
            <div className="game-cover" style={{ backgroundImage: `url(${game.coverImage})` }}>
              {game.installed && (
                <div className="game-info">
                  <div className="install-status">Installed</div>
                  <div className="playtime">{game.playTime}</div>
                  <div className="completion-status">
                    <div>Completion state</div>
                    <div>{game.completionState}</div>
                  </div>
                  <div className="game-actions">
                    <button 
                      className="info-button"
                      onClick={(e) => handleInfoClick(e, game)}
                    >
                      ℹ
                    </button>
                    <button 
                      className="play-button"
                      onClick={(e) => handlePlayClick(e, game)}
                    >
                      ▶
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryView;