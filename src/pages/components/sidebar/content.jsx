import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateDisplay from "../certificate/certificateDisplay";

const Content = ({ tabs, activeTab, getFileContent }) => (
  <div className="p-4 font-mono text-sm">
    <AnimatePresence mode="wait">
      {tabs?.map(
        (tab) =>
          activeTab === tab.id && (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {tab.content === "certificates" ? (
                <CertificateDisplay />
              ) : (
                <>
                  <div className="text-gray-600 pr-4 text-right select-none">
                    {Array.from(
                      {
                        length: getFileContent(tab.content).content.length + 2,
                      },
                      (_, i) => (
                        <div key={i + 1}>{i + 1}</div>
                      )
                    )}
                  </div>
                  <div className="text-gray-300">
                    <div>{getFileContent(tab.content).title}</div>
                    {getFileContent(tab.content).content.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-blue-400"
                      >
                        * {item.icon && <span>{item.icon}</span>}{" "}
                        <span>{item.name || item}</span>{" "}
                      </div>
                    ))}
                    <div> */</div>
                  </div>
                </>
              )}
            </motion.div>
          )
      )}
    </AnimatePresence>
  </div>
);

export default Content;
