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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.5V4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Library</span>
          </li>
          <li 
            className={`menu-item ${activeSection === 'Save Backups' ? 'active' : ''}`}
            onClick={() => setActiveSection('Save Backups')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16L21 8V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 3V8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Save Backups</span>
          </li>
          <li 
            className={`menu-item ${activeSection === 'Screenshots' ? 'active' : ''}`}
            onClick={() => setActiveSection('Screenshots')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Screenshots</span>
          </li>
          <li 
            className={`menu-item ${activeSection === 'Completion States' ? 'active' : ''}`}
            onClick={() => setActiveSection('Completion States')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L14 14M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Completion States</span>
          </li>
          <li 
            className={`menu-item ${activeSection === 'Emulation' ? 'active' : ''}`}
            onClick={() => setActiveSection('Emulation')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Emulation</span>
          </li>
          <li 
            className={`menu-item ${activeSection === 'API Keys' ? 'active' : ''}`}
            onClick={() => setActiveSection('API Keys')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 7H18C19.1046 7 20 7.89543 20 9V15C20 16.1046 19.1046 17 18 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 17H6C4.89543 17 4 16.1046 4 15V9C4 7.89543 4.89543 7 6 7H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>API Keys</span>
          </li>
          <li 
            className={`menu-item ${activeSection === 'Themes' ? 'active' : ''}`}
            onClick={() => setActiveSection('Themes')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Themes</span>
          </li>
          <li 
            className={`menu-item ${activeSection === 'Application' ? 'active' : ''}`}
            onClick={() => setActiveSection('Application')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.287 15.9606C19.3467 16.285 19.5043 16.5843 19.738 16.8079L19.79 16.8599C19.976 17.0462 20.1235 17.2662 20.2241 17.5068C20.3248 17.7474 20.3766 18.0032 20.3766 18.2614C20.3766 18.5196 20.3248 18.7754 20.2241 19.016C20.1235 19.2566 19.976 19.4766 19.79 19.6629C19.6037 19.8489 19.3837 19.9964 19.1431 20.097C18.9025 20.1977 18.6467 20.2495 18.3885 20.2495C18.1303 20.2495 17.8745 20.1977 17.6339 20.097C17.3933 19.9964 17.1733 19.8489 16.987 19.6629L16.935 19.6109C16.7113 19.3772 16.412 19.2196 16.0876 19.1599C15.7632 19.1001 15.4286 19.1398 15.127 19.2729C14.8323 19.3984 14.5836 19.6068 14.4088 19.8739C14.234 20.141 14.1416 20.4545 14.144 20.7749V20.9999C14.144 21.5303 13.9333 22.0391 13.5582 22.4142C13.1831 22.7893 12.6743 22.9999 12.144 22.9999C11.6136 22.9999 11.1048 22.7893 10.7297 22.4142C10.3546 22.0391 10.144 21.5303 10.144 20.9999V20.9209C10.1359 20.5946 10.032 20.2775 9.84648 20.0092C9.66095 19.741 9.40398 19.5342 9.10296 19.4149C8.80138 19.2818 8.46678 19.2421 8.14238 19.3018C7.81798 19.3616 7.51868 19.5192 7.29496 19.7529L7.24296 19.8049C7.05665 19.9909 6.83667 20.1384 6.59607 20.239C6.35547 20.3397 6.09966 20.3915 5.84146 20.3915C5.58325 20.3915 5.32744 20.3397 5.08684 20.239C4.84624 20.1384 4.62626 19.9909 4.43996 19.8049C4.25394 19.6186 4.10643 19.3986 4.00581 19.158C3.9052 18.9174 3.85338 18.6616 3.85338 18.4034C3.85338 18.1452 3.9052 17.8894 4.00581 17.6488C4.10643 17.4082 4.25394 17.1882 4.43996 17.0019L4.49196 16.9499C4.72563 16.7262 4.88317 16.4269 4.94293 16.1025C5.00268 15.7781 4.96301 15.4435 4.82996 15.1419C4.70445 14.8472 4.49603 14.5985 4.22889 14.4237C3.96175 14.2489 3.64828 14.1565 3.32796 14.1589H3.09996C2.56953 14.1589 2.06074 13.9483 1.68566 13.5732C1.31059 13.1981 1.09996 12.6894 1.09996 12.1589C1.09996 11.6285 1.31059 11.1197 1.68566 10.7446C2.06074 10.3695 2.56953 10.1589 3.09996 10.1589H3.17896C3.50531 10.1508 3.82237 10.0469 4.09066 9.86135C4.35894 9.67582 4.56574 9.41885 4.68496 9.11783C4.81801 8.81625 4.85768 8.48165 4.79792 8.15725C4.73817 7.83286 4.58063 7.53356 4.34696 7.30984L4.29496 7.25784C4.10894 7.07153 3.96144 6.85156 3.86082 6.61096C3.7602 6.37036 3.70838 6.11454 3.70838 5.85634C3.70838 5.59814 3.7602 5.34232 3.86082 5.10172C3.96144 4.86112 4.10894 4.64115 4.29496 4.45484C4.48126 4.26882 4.70124 4.12132 4.94184 4.0207C5.18244 3.92008 5.43826 3.86826 5.69646 3.86826C5.95466 3.86826 6.21047 3.92008 6.45107 4.0207C6.69167 4.12132 6.91165 4.26882 7.09796 4.45484L7.14996 4.50684C7.37368 4.74051 7.67298 4.89805 7.99738 4.9578C8.32178 5.01756 8.65638 4.97789 8.95796 4.84484H8.99996C9.29466 4.71932 9.54337 4.51091 9.71815 4.24376C9.89293 3.97662 9.98527 3.66316 9.98296 3.34284V3.11484C9.98296 2.58441 10.1936 2.07562 10.5687 1.70054C10.9438 1.32547 11.4525 1.11484 11.983 1.11484C12.5134 1.11484 13.0222 1.32547 13.3973 1.70054C13.7723 2.07562 13.983 2.58441 13.983 3.11484V3.19384C13.9807 3.51416 14.073 3.82763 14.2478 4.09477C14.4226 4.36191 14.6713 4.57033 14.966 4.69584C15.2676 4.82889 15.6022 4.86856 15.9266 4.8088C16.251 4.74904 16.5503 4.59151 16.774 4.35784L16.826 4.30584C17.0123 4.11982 17.2323 3.97231 17.4729 3.87169C17.7135 3.77108 17.9693 3.71926 18.2275 3.71926C18.4857 3.71926 18.7415 3.77108 18.9821 3.87169C19.2227 3.97231 19.4427 4.11982 19.629 4.30584C19.815 4.49214 19.9625 4.71212 20.0631 4.95272C20.1637 5.19332 20.2156 5.44913 20.2156 5.70734C20.2156 5.96554 20.1637 6.22135 20.0631 6.46195C19.9625 6.70255 19.815 6.92253 19.629 7.10884L19.577 7.16084C19.3433 7.38456 19.1858 7.68386 19.126 8.00825C19.0662 8.33265 19.1059 8.66725 19.239 8.96883V9.01083C19.3645 9.30553 19.5729 9.55425 19.84 9.72903C20.1072 9.90381 20.4206 9.99614 20.741 9.99384H20.969C21.4994 9.99384 22.0082 10.2045 22.3833 10.5796C22.7584 10.9546 22.969 11.4634 22.969 11.9939C22.969 12.5243 22.7584 13.0331 22.3833 13.4082C22.0082 13.7832 21.4994 13.9939 20.969 13.9939H20.89C20.5697 13.9962 20.2562 14.0885 19.989 14.2633C19.7219 14.4381 19.5135 14.6868 19.388 14.9815L19.4 15.0001L19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Application</span>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Encryption is available. Your API keys will be stored securely.</span>
              </div>

              <div className="notification info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>No API keys found. Please enter your IGDB API credentials.</span>
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
                <button className="primary-button" onClick={handleSaveApiKeys}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16L21 8V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 3V8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Save API Keys</span>
                </button>
                <button className="secondary-button" onClick={handleTestCredentials}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Test Credentials</span>
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