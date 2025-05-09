import React, { useState } from 'react';
import '../styles/Download.css';

interface DownloadItem {
  id: string;
  name: string;
  size: string;
  progress: number;
  status: 'downloading' | 'paused' | 'completed' | 'error';
  speed: string;
  timeRemaining: string;
  banner: string;
}

const Download: React.FC = () => {
  const [downloads, setDownloads] = useState<DownloadItem[]>([
    {
      id: '1',
      name: 'The Witcher 3: Wild Hunt',
      size: '50.2 GB',
      progress: 45,
      status: 'downloading',
      speed: '12.5 MB/s',
      timeRemaining: '45 minutes',
      banner: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg'
    },
    {
      id: '2',
      name: 'Cyberpunk 2077',
      size: '70.8 GB',
      progress: 100,
      status: 'completed',
      speed: '0 MB/s',
      timeRemaining: 'Completed',
      banner: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg'
    },
    {
      id: '3',
      name: 'Red Dead Redemption 2',
      size: '150.4 GB',
      progress: 0,
      status: 'paused',
      speed: '0 MB/s',
      timeRemaining: 'Paused',
      banner: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg'
    }
  ]);

  const handlePauseResume = (id: string) => {
    setDownloads(downloads.map(download => {
      if (download.id === id) {
        return {
          ...download,
          status: download.status === 'downloading' ? 'paused' : 'downloading',
          speed: download.status === 'downloading' ? '0 MB/s' : '12.5 MB/s',
          timeRemaining: download.status === 'downloading' ? 'Paused' : '45 minutes'
        };
      }
      return download;
    }));
  };

  const handleCancel = (id: string) => {
    setDownloads(downloads.filter(download => download.id !== id));
  };

  return (
    <div className="download-container">
      <div className="download-header">
        <h1>Downloads</h1>
        <div className="download-stats">
          <div className="stat">
            <span className="stat-label">Downloading</span>
            <span className="stat-value">{downloads.filter(d => d.status === 'downloading').length}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Completed</span>
            <span className="stat-value">{downloads.filter(d => d.status === 'completed').length}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Paused</span>
            <span className="stat-value">{downloads.filter(d => d.status === 'paused').length}</span>
          </div>
        </div>
      </div>

      <div className="download-list">
        {downloads.map(download => (
          <div key={download.id} className="download-item">
            <div className="download-banner" style={{ backgroundImage: `url(${download.banner})` }}>
              <div className="banner-overlay" />
            </div>
            <div className="download-content">
              <div className="download-info">
                <h3>{download.name}</h3>
                <div className="download-details">
                  <span className="size">{download.size}</span>
                  <span className="speed">{download.speed}</span>
                  <span className="time">{download.timeRemaining}</span>
                </div>
              </div>
              
              <div className="download-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${download.progress}%` }}
                  />
                </div>
                <span className="progress-text">{download.progress}%</span>
              </div>

              <div className="download-actions">
                {download.status === 'downloading' && (
                  <button 
                    className="action-button pause"
                    onClick={() => handlePauseResume(download.id)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                      <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
                    </svg>
                  </button>
                )}
                {download.status === 'paused' && (
                  <button 
                    className="action-button resume"
                    onClick={() => handlePauseResume(download.id)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                    </svg>
                  </button>
                )}
                {download.status === 'completed' && (
                  <button className="action-button completed" disabled>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
                <button 
                  className="action-button cancel"
                  onClick={() => handleCancel(download.id)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download; 