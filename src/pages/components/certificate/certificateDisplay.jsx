import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CiCalendar } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const certificates = [
  {
    id: 1,
    title: "Front-End Web Development",
    issuer: "Google Developer Student Club",
    date: "2023",
    image: "/images/Sertifikat1.png",
  },
  {
    id: 2,
    title: "Dasar Artificial Intelligence",
    issuer: "Dicoding Academy",
    date: "2024",
    image: "/images/Sertifikat2.png",
  },
  {
    id: 3,
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Academy",
    date: "2024",
    image: "/images/Sertifikat3.png",
  },
  {
    id: 4,
    title: "Memulai Pemrograman Dengan Python",
    issuer: "Dicoding Academy",
    date: "2024",
    image: "/images/Sertifikat4.png",
  },
];

const CertificateDisplay = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl md:text-start text-center font-bold mb-8 text-white border-b border-gray-700 pb-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="show"
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-700/50"
            onClick={() => setSelectedCert(cert)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative h-48 w-full bg-gray-900/50">
              <Image
                src={cert.image}
                alt={cert.title}
                layout="fill"
                objectFit="contain"
                className="p-4 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 border-t border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-blue-400">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mt-2 flex gap-1 items-center">
                <CiCalendar size={14} />
                {cert.date}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm hover:bg-blue-500/20 transition-colors duration-200">
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-7xl w-full relative flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="hidden md:flex flex-col items-center justify-center absolute left-0 z-50 transform -translate-x-32">
                <div className="-rotate-90 origin-center whitespace-nowrap">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedCert.title}
                  </h3>
                  <p className="text-lg text-gray-300">
                    {selectedCert.issuer} • {selectedCert.date}
                  </p>
                </div>
              </div>

              <div className="relative h-[85vh] md:w-[85%] w-full bg-gray-900 rounded-xl p-4 md:ml-16">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  className="rounded-lg"
                />
                <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gray-900/80 p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">
                      {selectedCert.title}
                    </h3>
                    <p className="text-gray-300">
                      {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="absolute top-4 right-4 text-white bg-gray-800/80 rounded-full p-2 hover:bg-gray-700 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCert(null);
                }}
              >
                <IoIosClose size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CertificateDisplay;
