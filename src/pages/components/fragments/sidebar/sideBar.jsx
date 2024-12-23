import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, FileIcon, FolderIcon, Mail, Phone } from "lucide-react";

const Sidebar = ({ expandedFolders = {}, toggleFolder, addTab }) => (
  <div className="w-64 md:border-r md:flex block flex-col border-gray-800 flex-shrink-0 p-4 space-y-2">
    <div>
      <motion.button
        onClick={() => toggleFolder("personal-info")}
        className="flex items-center gap-2 hover:text-white w-full text-left"
      >
        <motion.div
          animate={{ rotate: expandedFolders["personal-info"] ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight size={16} />
        </motion.div>
        <span>personal-info</span>
      </motion.button>
      <AnimatePresence>
        {expandedFolders["personal-info"] && (
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
            <motion.div
              className="flex items-center gap-2 cursor-pointer hover:text-white"
              whileHover={{ x: 2 }}
              onClick={() => addTab("skills", "Skills", "skills")}
            >
              <FileIcon size={16} />
              <span className="opacity-70">📄 Skills</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 cursor-pointer hover:text-white"
              whileHover={{ x: 2 }}
              onClick={() =>
                addTab("certificates", "Certificates", "certificates")
              }
            >
              <FolderIcon size={16} />
              <span className="opacity-70">📂 Certificates</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    {/* Education */}
    <div>
      <motion.button
        onClick={() => toggleFolder("education")}
        className="flex items-center gap-2 hover:text-white w-full text-left"
      >
        <motion.div
          animate={{ rotate: expandedFolders["education"] ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight size={16} />
        </motion.div>
        <span>education</span>
      </motion.button>
      <AnimatePresence>
        {expandedFolders["education"] && (
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
              onClick={() => addTab("high-school", "HighSchool", "high-school")}
            >
              <FileIcon size={16} />
              <span className="opacity-70">high-school</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 cursor-pointer hover:text-white"
              whileHover={{ x: 2 }}
              onClick={() => addTab("university", "University", "university")}
            >
              <FileIcon size={16} />
              <span className="opacity-70">university</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    {/* Contacts */}
    <div>
      <motion.button
        onClick={() => toggleFolder("contacts")}
        className="flex items-center gap-2 hover:text-white w-full text-left"
      >
        <motion.div
          animate={{ rotate: expandedFolders["contacts"] ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight size={16} />
        </motion.div>
        <span>contacts</span>
      </motion.button>
      <AnimatePresence>
        {expandedFolders["contacts"] && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-6 mt-2 space-y-2 overflow-hidden"
          >
            <motion.div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="opacity-70">404imamgg@gmail.com</span>
            </motion.div>
            <motion.div className="flex items-center gap-2">
              <Phone size={14} />
              <span className="opacity-70">+6280000000000</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);

export default Sidebar;
