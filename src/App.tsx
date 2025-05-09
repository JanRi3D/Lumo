import { useState } from "react";
import "./App.css";
import LibraryView from "./components/LibraryView";

function App() {
  const [activeTab, setActiveTab] = useState("Library");
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

  const renderContent = () => {
    switch(activeTab) {
      case "Library":
        return <LibraryView />;
      case "Settings":
        return renderSettingsView();
      case "Overview":
      case "Screenshots":
      default:
        return <div className="placeholder-content">Content for {activeTab} will be implemented soon.</div>;
    }
  };

  const renderSettingsView = () => {
    return (
      <div className="content-area">
        <div className="sidebar">
          <h2>Settings</h2>
          <ul className="settings-menu">
            <li className="menu-item"><span className="icon">📚</span> Library</li>
            <li className="menu-item"><span className="icon">💾</span> Save Backups</li>
            <li className="menu-item"><span className="icon">📸</span> Screenshots</li>
            <li className="menu-item"><span className="icon">⏱</span> Completion States</li>
            <li className="menu-item"><span className="icon">🎮</span> Emulation</li>
            <li className="menu-item active"><span className="icon">🔑</span> API Keys</li>
            <li className="menu-item"><span className="icon">🎨</span> Themes</li>
            <li className="menu-item"><span className="icon">⚙️</span> Application</li>
          </ul>
        </div>

        <div className="settings-content">
          <div className="settings-header">
            <h1>API Keys</h1>
            <p>Configure API keys for external services used by Lumo.</p>
          </div>

          <div className="notification success">
            <span className="notification-icon">✓</span> Encryption is available. Your API keys will be stored securely.
          </div>

          <div className="notification info">
            <span className="notification-icon">ℹ</span> No API keys found. Please enter your IGDB API credentials.
          </div>

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
            <button className="save-button" onClick={handleSaveApiKeys}>Save API Keys</button>
            <button className="test-button" onClick={handleTestCredentials}>
              <span className="test-icon">⚡</span>
              Test Credentials
            </button>
          </div>

          <div className="help-section">
            <h3>How to get IGDB API keys</h3>
            <ol>
              <li>1. Go to Twitch Developer Console</li>
              <li>2. Register or log in to your Twitch account</li>
              <li>3. Create a new application</li>
              <li>4. Set the OAuth Redirect URL to http://localhost (it won't be used)</li>
              <li>5. Select the "Application Integration" category</li>
              <li>6. Once created, you'll see your Client ID and can generate a Client Secret</li>
              <li>7. Copy both values to the fields above</li>
            </ol>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <div className="navbar">
        <div className="navbar-tabs">
          <button className={activeTab === "Overview" ? "active" : ""} onClick={() => setActiveTab("Overview")}>Overview</button>
          <button className={activeTab === "Library" ? "active" : ""} onClick={() => setActiveTab("Library")}>Library</button>
          <button className={activeTab === "Screenshots" ? "active" : ""} onClick={() => setActiveTab("Screenshots")}>Screenshots</button>
          <button className={activeTab === "Settings" ? "active" : ""} onClick={() => setActiveTab("Settings")}>Settings</button>
        </div>
        <div className="navbar-actions">
          <button title="Download" className="icon-button">↓</button>
          <button title="Help" className="icon-button">?</button>
          <button title="History" className="icon-button">⏱</button>
          <button title="Cloud" className="icon-button">☁</button>
          <button title="Refresh" className="icon-button">↻</button>
          <button title="Minimize" className="window-control">−</button>
          <button title="Maximize" className="window-control">□</button>
          <button title="Close" className="window-control">×</button>
        </div>
      </div>

      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
