import React, { useState } from "react";
import Sidebar from "./sidebar";
import TabBar from "./tabbar";
import Content from "./content";

const Project = () => {
  const [expandedFolders, setExpandedFolders] = useState({
    "personal-info": true,
    education: true,
    contacts: true,
  });

  const [tabs, setTabs] = useState([
    { id: "about", title: "About", content: "about" },
  ]);

  const [activeTab, setActiveTab] = useState("about");

  const toggleFolder = (folder) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };

  const addTab = (id, title, content) => {
    if (!tabs.find((tab) => tab.id === id)) {
      setTabs((prev) => [...prev, { id, title, content }]);
    }
    setActiveTab(id);
  };

  const closeTab = (e, tabId) => {
    e.stopPropagation();
    setTabs((prev) => prev.filter((tab) => tab.id !== tabId));
    if (activeTab === tabId) {
      setActiveTab(tabs[0]?.id);
    }
  };

  const getFileContent = (fileId) => {
    const contents = {
      about: {
        title: "/** About me */",
        content: [
          "I am a student majoring in Informatics Engineering",
          "with a focus on Frontend and Backend development.",
          "I have a strong determination to continue",
          "learning and honing my skills",
          "in order to achieve perfection through my educational journey,",
          "I continue to hone my skills and creativity in this field.",
          "Welcome to my world.",
        ],
      },
    };
    return contents[fileId] || contents["about"];
  };

  return (
    <div className="min-h-screen bg-[#011627] text-gray-300 flex">
      <Sidebar
        expandedFolders={expandedFolders}
        toggleFolder={toggleFolder}
        addTab={addTab}
      />
      <div className="flex-grow">
        <TabBar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          closeTab={closeTab}
        />
        <Content
          tabs={tabs}
          activeTab={activeTab}
          getFileContent={getFileContent}
        />
      </div>
    </div>
  );
};

export default Project;
