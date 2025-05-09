import { useState } from "react";
import "./App.css";
import Library from "./components/Library";
import Settings from "./components/Settings";

function App() {
  const [activeTab, setActiveTab] = useState("Library");
  
  const renderContent = () => {
    switch(activeTab) {
      case "Library":
        return <Library />;
      case "Settings":
        return <Settings />;
      case "Overview":
      case "Screenshots":
      default:
        return <div className="placeholder-content">Content for {activeTab} will be implemented soon.</div>;
    }
  };

  return (
    <div className="app-container">
      <div className="navbar">
        <div className="app-logo">
          <span>LUMO</span>
        </div>
        <div className="navbar-tabs">
          <button className={activeTab === "Overview" ? "active" : ""} onClick={() => setActiveTab("Overview")}>Overview</button>
          <button className={activeTab === "Library" ? "active" : ""} onClick={() => setActiveTab("Library")}>Library</button>
          <button className={activeTab === "Screenshots" ? "active" : ""} onClick={() => setActiveTab("Screenshots")}>Screenshots</button>
          <button className={activeTab === "Settings" ? "active" : ""} onClick={() => setActiveTab("Settings")}>Settings</button>
        </div>
        <div className="navbar-actions">
          <button title="Download" className="icon-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L12 4M12 16L8 12M12 16L16 12M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button title="Help" className="icon-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9C9 5.5 14.5 5.5 14.5 9C14.5 11.5 12 11 12 14M12 18.01L12.01 17.999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button title="History" className="icon-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L14 14M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button title="Cloud" className="icon-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 18C5.23858 18 3 15.7614 3 13C3 10.2386 5.23858 8 8 8C8.09772 8 8.19472 8.00301 8.29074 8.00889C8.76938 5.72964 10.7988 4 13.2 4C16.0719 4 18.4 6.32812 18.4 9.2C18.4 9.38438 18.3908 9.56624 18.3729 9.74522C20.5264 10.158 22 11.9681 22 14.2C22 16.7614 19.9853 18 17.6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button title="Refresh" className="icon-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
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
