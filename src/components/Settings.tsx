import React, { useState } from 'react';
import '../styles/Settings.css';

const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('API Keys');
  const [igdbClientId, setIgdbClientId] = useState("");
  const [igdbClientSecret, setIgdbClientSecret] = useState("");
  
  const handleSaveApiKeys = () => {
    // Add logic to save API keys
    console.log("Saving API keys:", { igdbClientId, igdbClientSecret });
  };

  const handleTestCredentials = () => {
    // Add logic to test API credentials
    console.log("Testing credentials:", { igdbClientId, igdbClientSecret });
  };

  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        <h2>Settings</h2>
        <ul className="settings-menu">
          <li 
            className={`menu-item ${activeSection === 'Library' ? 'active' : ''}`}
            onClick={() => setActiveSection('Library')}
          >
            <span className="icon">📚</span> Library
          </li>
          <li 
            className={`menu-item ${activeSection === 'Save Backups' ? 'active' : ''}`}
            onClick={() => setActiveSection('Save Backups')}
          >
            <span className="icon">💾</span> Save Backups
          </li>
          <li 
            className={`menu-item ${activeSection === 'Screenshots' ? 'active' : ''}`}
            onClick={() => setActiveSection('Screenshots')}
          >
            <span className="icon">📸</span> Screenshots
          </li>
          <li 
            className={`menu-item ${activeSection === 'Completion States' ? 'active' : ''}`}
            onClick={() => setActiveSection('Completion States')}
          >
            <span className="icon">⏱</span> Completion States
          </li>
          <li 
            className={`menu-item ${activeSection === 'Emulation' ? 'active' : ''}`}
            onClick={() => setActiveSection('Emulation')}
          >
            <span className="icon">🎮</span> Emulation
          </li>
          <li 
            className={`menu-item ${activeSection === 'API Keys' ? 'active' : ''}`}
            onClick={() => setActiveSection('API Keys')}
          >
            <span className="icon">🔑</span> API Keys
          </li>
          <li 
            className={`menu-item ${activeSection === 'Themes' ? 'active' : ''}`}
            onClick={() => setActiveSection('Themes')}
          >
            <span className="icon">🎨</span> Themes
          </li>
          <li 
            className={`menu-item ${activeSection === 'Application' ? 'active' : ''}`}
            onClick={() => setActiveSection('Application')}
          >
            <span className="icon">⚙️</span> Application
          </li>
        </ul>
      </div>

      <div className="settings-content">
        {activeSection === 'API Keys' && (
          <>
            <div className="settings-header">
              <h1>API Keys</h1>
              <p>Configure API keys for external services used by Lumo.</p>
            </div>

            <div className="notifications">
              <div className="notification success">
                <span className="notification-icon">✓</span> Encryption is available. Your API keys will be stored securely.
              </div>

              <div className="notification info">
                <span className="notification-icon">ℹ</span> No API keys found. Please enter your IGDB API credentials.
              </div>
            </div>

            <div className="form-section">
              <div className="form-group">
                <label>IGDB Client ID</label>
                <input 
                  type="text" 
                  placeholder="Enter your IGDB Client ID" 
                  value={igdbClientId} 
                  onChange={(e) => setIgdbClientId(e.target.value)} 
                />
                <p className="field-help">The IGDB Client ID from your Twitch Developer account.</p>
              </div>

              <div className="form-group">
                <label>IGDB Client Secret</label>
                <input 
                  type="password" 
                  placeholder="Enter your IGDB Client Secret" 
                  value={igdbClientSecret} 
                  onChange={(e) => setIgdbClientSecret(e.target.value)} 
                />
                <p className="field-help">The IGDB Client Secret from your Twitch Developer account.</p>
              </div>

              <div className="action-buttons">
                <button className="primary-button" onClick={handleSaveApiKeys}>Save API Keys</button>
                <button className="secondary-button" onClick={handleTestCredentials}>
                  <span className="test-icon">⚡</span>
                  Test Credentials
                </button>
              </div>
            </div>

            <div className="help-section">
              <h3>How to get IGDB API keys</h3>
              <ol>
                <li>Go to Twitch Developer Console</li>
                <li>Register or log in to your Twitch account</li>
                <li>Create a new application</li>
                <li>Set the OAuth Redirect URL to http://localhost (it won't be used)</li>
                <li>Select the "Application Integration" category</li>
                <li>Once created, you'll see your Client ID and can generate a Client Secret</li>
                <li>Copy both values to the fields above</li>
              </ol>
            </div>
          </>
        )}

        {activeSection === 'Library' && (
          <div className="settings-header">
            <h1>Library Settings</h1>
            <p>Configure how your game library is organized and displayed.</p>
            <div className="placeholder-content">Library settings content will be implemented soon.</div>
          </div>
        )}

        {activeSection === 'Save Backups' && (
          <div className="settings-header">
            <h1>Save Backups</h1>
            <p>Manage game save backups and cloud synchronization.</p>
            <div className="placeholder-content">Save backup settings content will be implemented soon.</div>
          </div>
        )}

        {activeSection === 'Screenshots' && (
          <div className="settings-header">
            <h1>Screenshots</h1>
            <p>Configure screenshot capture settings and storage location.</p>
            <div className="placeholder-content">Screenshot settings content will be implemented soon.</div>
          </div>
        )}
        
        {activeSection === 'Completion States' && (
          <div className="settings-header">
            <h1>Completion States</h1>
            <p>Customize game completion tracking and status labels.</p>
            <div className="placeholder-content">Completion states settings will be implemented soon.</div>
          </div>
        )}
        
        {activeSection === 'Emulation' && (
          <div className="settings-header">
            <h1>Emulation</h1>
            <p>Configure emulator paths and integration settings.</p>
            <div className="placeholder-content">Emulation settings content will be implemented soon.</div>
          </div>
        )}
        
        {activeSection === 'Themes' && (
          <div className="settings-header">
            <h1>Themes</h1>
            <p>Customize the look and feel of the application.</p>
            <div className="placeholder-content">Theme settings content will be implemented soon.</div>
          </div>
        )}
        
        {activeSection === 'Application' && (
          <div className="settings-header">
            <h1>Application</h1>
            <p>General application settings and preferences.</p>
            <div className="placeholder-content">Application settings will be implemented soon.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;