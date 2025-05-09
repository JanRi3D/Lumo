import React, { useState } from 'react';
import '../styles/Overview.css';

// Mock game data to match the existing Library component
const recentGames = [
  { 
    id: 1, 
    title: "Lords Fallen", 
    coverUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1501750/8c2a09d991a95867499cd559684b56e1a7098875/header_alt_assets_3.jpg?t=1746780188",
    playtime: "12h",
    lastPlayed: "Yesterday",
    achievement: "Defeated the Dragon Lord" 
  },
  { 
    id: 7, 
    title: "Super Mario Odyssey", 
    coverUrl: "https://i.imgur.com/OtBxNYF.jpeg",
    playtime: "45h",
    lastPlayed: "2 days ago",
    achievement: "Collected 500 moons" 
  },
  { 
    id: 3, 
    title: "Mario Kart 8 Deluxe", 
    coverUrl: "https://i.imgur.com/ZT5EKCT.jpeg",
    playtime: "24h",
    lastPlayed: "3 days ago",
    achievement: "Won 150cc Gold Cup" 
  },
];

const featuredGames = [
  { 
    id: 2, 
    title: "The Elder Scrolls IV: Oblivion Remastered", 
    coverUrl: "https://i.imgur.com/txAYeDy.jpeg",
    description: "Return to the iconic world of Cyrodiil in this remastered classic.",
    playtime: "85h",
    completion: "85%" 
  },
  { 
    id: 5, 
    title: "Wizordum", 
    coverUrl: "https://i.imgur.com/ZM4pB6V.jpeg",
    description: "Master arcane spells and explore mystical dungeons in this magical adventure.",
    playtime: "32h",
    completion: "100%" 
  },
];

const friendActivity = [
  {
    id: 1,
    name: "Alex",
    avatar: "https://i.imgur.com/J1qVUy4.jpeg",
    status: "In-Game",
    game: "The Elder Scrolls IV: Oblivion Remastered",
    timeElapsed: "2 hours"
  },
  {
    id: 2,
    name: "Taylor",
    avatar: "https://i.imgur.com/N7UR0Dq.jpeg",
    status: "Online",
    lastOnline: "5 minutes ago"
  },
  {
    id: 3,
    name: "Jordan",
    avatar: "https://i.imgur.com/P5JoqCm.jpeg",
    status: "In-Game",
    game: "Expedition",
    timeElapsed: "4 hours"
  }
];

// News items in Steam format
const newsItems = [
  {
    id: 1,
    game: "The Elder Scrolls IV: Oblivion Remastered",
    coverUrl: "https://i.imgur.com/txAYeDy.jpeg",
    title: "Oblivion Remastered Patch 1.3 Released",
    date: "May 8, 2025",
    content: "This update brings improved lighting effects, bug fixes, and new quality of life features."
  },
  {
    id: 2,
    game: "Wizordum",
    coverUrl: "https://i.imgur.com/ZM4pB6V.jpeg",
    title: "New expansion announced!",
    date: "May 7, 2025",
    content: "The upcoming 'Arcane Depths' expansion will add 10 new dungeons and 5 new spells."
  }
];

// Game recommendations
const recommendations = [
  {
    id: 1,
    title: "Super Mario Bros Wonder",
    coverUrl: "https://i.imgur.com/hTOPV5O.jpeg",
    reason: "Because you played Super Mario Odyssey"
  },
  {
    id: 2,
    title: "Rise of the Ronin",
    coverUrl: "https://i.imgur.com/0TCZnWt.jpeg",
    reason: "Popular among your friends"
  },
  {
    id: 3,
    title: "Conquest Dark",
    coverUrl: "https://i.imgur.com/2IHmFCj.jpeg",
    reason: "On your wishlist"
  }
];

const Overview: React.FC = () => {
  const [viewMode, setViewMode] = useState('friend-activity');

  return (
    <div className="overview-container">
      {/* Top section with search, filters and view controls (similar to Library) */}
      <div className="overview-header">
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
          />
        </div>
        
        <div className="view-controls">
          <div className="view-modes">
            <button 
              className={`view-mode-button ${viewMode === 'friend-activity' ? 'active' : ''}`}
              onClick={() => setViewMode('friend-activity')}
              title="Friend Activity"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button 
              className={`view-mode-button ${viewMode === 'game-news' ? 'active' : ''}`}
              onClick={() => setViewMode('game-news')}
              title="Game News"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1M15 8h2m-2 4h4m0 8a2 2 0 0 0 2-2v-4m0-4V9a2 2 0 0 0-2-2h-2m-8 8h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          <div className="filters-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21M6 12H18M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Filters
          </div>
        </div>
      </div>

      {/* Main content grid with two columns */}
      <div className="overview-content">
        {/* Left column (wider) - Main featured content */}
        <div className="overview-main-column">
          {/* Recent activity section with horizontal scrolling cards */}
          <div className="overview-section">
            <div className="section-header">
              <h3>Recently Played</h3>
              <button className="view-all-button">VIEW ALL</button>
            </div>
            
            <div className="recent-games">
              {recentGames.map(game => (
                <div key={game.id} className="recent-game-card">
                  <div className="recent-game-banner">
                    <img src={game.coverUrl} alt={game.title} />
                  </div>
                  <div className="recent-game-info">
                    <h4 className="game-title">{game.title}</h4>
                    <div className="game-meta">
                      <div className="meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8v4l2 2M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{game.playtime}</span>
                      </div>
                      <div className="meta-item">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19.693 10.689a1.704 1.704 0 010 2.612l-6.206 6.206a1.04 1.04 0 01-1.47 0l-6.206-6.206a1.704 1.704 0 010-2.612l6.206-6.206a1.04 1.04 0 011.47 0l6.206 6.206z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>Last played: {game.lastPlayed}</span>
                      </div>
                    </div>
                    <div className="achievement-unlock">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4M6 10V8a6 6 0 1 1 12 0v2M2 10h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Achievement Unlocked: {game.achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured games with progress section */}
          <div className="overview-section">
            <div className="section-header">
              <h3>Your Library Highlights</h3>
            </div>
            
            <div className="featured-games">
              {featuredGames.map(game => (
                <div key={game.id} className="featured-game-card">
                  <div className="featured-game-banner">
                    <img src={game.coverUrl} alt={game.title} />
                    <div className="game-info-overlay">
                      <h4 className="game-title">{game.title}</h4>
                      <div className="completion-bar">
                        <div className="completion-progress" style={{width: game.completion}}></div>
                      </div>
                      <div className="game-meta">
                        <span>{game.playtime} played</span>
                        <span>{game.completion} complete</span>
                      </div>
                    </div>
                  </div>
                  <div className="featured-game-description">
                    <p>{game.description}</p>
                    <button className="continue-button">CONTINUE</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What's New / News section */}
          <div className="overview-section">
            <div className="section-header">
              <h3>What's New</h3>
              <button className="view-all-button">VIEW ALL</button>
            </div>
            
            <div className="news-items">
              {newsItems.map(item => (
                <div key={item.id} className="news-item">
                  <div className="news-image">
                    <img src={item.coverUrl} alt={item.game} />
                  </div>
                  <div className="news-content">
                    <div className="news-game">{item.game}</div>
                    <h4 className="news-title">{item.title}</h4>
                    <div className="news-date">{item.date}</div>
                    <p className="news-text">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column (narrower) - Sidebar content */}
        <div className="overview-sidebar-column">
          {/* Steam-like user profile card */}
          <div className="overview-section user-profile">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src="https://avatars.steamstatic.com/b5bd56c1aa4d05210e5455e907f2e7d30a3c1517_full.jpg" alt="User avatar" />
              </div>
              <div className="profile-name">
                <h3>Player Name</h3>
                <div className="profile-status online">Online</div>
              </div>
            </div>
            
            <div className="profile-stats">
              <div className="stat-row">
                <div className="stat-item">
                  <div className="stat-value">10</div>
                  <div className="stat-label">Games</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">157</div>
                  <div className="stat-label">Achievements</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">247h</div>
                  <div className="stat-label">Playtime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Friend activity section */}
          <div className="overview-section">
            <div className="section-header">
              <h3>Friend Activity</h3>
            </div>
            
            <div className="friend-activity">
              {friendActivity.map(friend => (
                <div key={friend.id} className="friend-card">
                  <div className="friend-avatar">
                    <img src={friend.avatar} alt={friend.name} />
                    <div className={`friend-status ${friend.status.toLowerCase().replace(/\s+/g, '-')}`}></div>
                  </div>
                  <div className="friend-info">
                    <div className="friend-name">{friend.name}</div>
                    {friend.status === 'In-Game' ? (
                      <>
                        <div className="friend-game-status">{friend.status}</div>
                        <div className="friend-game-name">{friend.game}</div>
                        <div className="friend-game-time">{friend.timeElapsed}</div>
                      </>
                    ) : (
                      <div className="friend-online-status">{friend.lastOnline}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended games section */}
          <div className="overview-section">
            <div className="section-header">
              <h3>Recommended For You</h3>
            </div>
            
            <div className="recommended-games">
              {recommendations.map(game => (
                <div key={game.id} className="recommended-game">
                  <div className="recommended-game-image">
                    <img src={game.coverUrl} alt={game.title} />
                  </div>
                  <div className="recommended-game-info">
                    <div className="game-title">{game.title}</div>
                    <div className="recommendation-reason">{game.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;