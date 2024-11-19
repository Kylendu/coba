import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, FileIcon, FolderIcon, Mail, Phone } from "lucide-react";

const Sidebar = ({ expandedFolders, toggleFolder, addTab }) => (
  <div className="w-64 border-r border-gray-800 flex-shrink-0 p-4 space-y-2">
    <div>
      <motion.button
        onClick={() => toggleFolder("projects")}
        className="flex items-center gap-2 hover:text-white w-full text-left"
      >
        <motion.div
          animate={{ rotate: expandedFolders["projects"] ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight size={16} />
        </motion.div>
        <span>projects</span>
      </motion.button>
      <AnimatePresence>
        {expandedFolders["projects"] && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-6 mt-2 space-y-2 overflow-hidden"
          >
            <motion.div
              className="flex items-center gap-2 cursor-pointer hover:text-white"
              whileHover={{ x: 2 }}
              onClick={() => addTab("about", "About", "about")}
            >
              <FileIcon size={16} />
              <span className="opacity-70">📄 bio</span>
            </motion.div>
            <div className="flex items-center gap-2">
              <FolderIcon size={16} />
              <span className="opacity-70">📂 interests</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);

export default Sidebar;
