import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XSquare } from "lucide-react";

const TabBar = ({ tabs, activeTab, setActiveTab, closeTab }) => (
  <div className="h-8 bg-[#01111d] flex items-center px-4 border-b border-gray-800 overflow-x-auto">
    <AnimatePresence>
      {tabs?.map((tab) => (
        <motion.div
          key={tab.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className={`flex items-center gap-2 px-3 py-1 text-sm cursor-pointer border-t border-l border-r transition-colors ${
            activeTab === tab.id
              ? "bg-[#011627] border-blue-500 text-white"
              : "bg-[#01111d] border-gray-700 text-gray-400"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span>{tab.title}</span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => closeTab(e, tab.id)}
          >
            <XSquare size={14} className="opacity-50 hover:opacity-100" />
          </motion.div>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);

export default TabBar;
