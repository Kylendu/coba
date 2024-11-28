import React, { useState, useEffect } from "react";
import Sidebar from "./fragments/sidebar/sideBar";
import TabBar from "./fragments/sidebar/tabBar";
import Content from "./fragments/sidebar/content";
import { FaPython } from "react-icons/fa";
import {
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";

const IDE = () => {
  const [expandedFolders, setExpandedFolders] = useState({
    "personal-info": true,
    education: true,
    contacts: true,
  });

  const [tabs, setTabs] = useState([
    { id: "about", title: "About", content: "about" },
  ]);

  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setExpandedFolders({
          "personal-info": false,
          education: false,
          contacts: false,
        });
      } else {
        setExpandedFolders({
          "personal-info": true,
          education: true,
          contacts: true,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      skills: {
        title: "/** Skills </> */",
        content: [
          "Tech Stack: ",
          { icon: <RiHtml5Fill size={20} />, name: "HTML" },
          { icon: <RiCss3Fill size={20} />, name: "CSS" },
          { icon: <RiJavascriptFill size={20} />, name: "JavaScript" },
          { icon: <FaPython size={20} />, name: "Python" },
          { icon: <RiNextjsFill size={20} />, name: "NextJS" },
          { icon: <RiTailwindCssFill size={20} />, name: "Tailwind" },
          "Tools: ",
          "NPM . Github . GIT . VSCode . Figma",
        ],
      },
      "high-school": {
        title: "/** Education - High School */",
        content: [
          "High School: SMKN 1 Blega",
          "Major: Computer and Network Engineering",
          "Years: 2020-2023",
          "Achievement: 1st Place in IT Network System Administration Competition",
        ],
      },
      university: {
        title: "/** Education - University */",
        content: [
          "University: Universitas Trunojoyo Madura",
          "Major: Informatics Engineering",
          "Batch: 2023",
          "Focus Areas: Web Development Full-Stack",
        ],
      },
    };
    return contents[fileId] || contents["about"];
  };

  return (
    <div className="min-h-screen text-gray-300 md:flex block">
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

export default IDE;
