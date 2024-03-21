import React, { useRef, useState } from "react";
import Tabs from "./components/Tabs";
import Sections from "./components/Sections";
import "./index.scss";

export default function App() {
  const [activeTab, setActiveTab] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveSection(index);
  };

  return (
    <div className="main-container">
      <div className="tabs-container">
        <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      </div>
      <div className="sections">
        <Sections activeSection={activeSection} sectionRefs={sectionRefs} />
      </div>
    </div>
  );
}
