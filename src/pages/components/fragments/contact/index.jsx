import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Notification from "./notification";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showNotif, setShowNotif] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    });

    setShowNotif(true);
    e.target.reset();
    setTimeout(() => {
      setShowNotif(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence>
          <Notification show={showNotif} />
        </AnimatePresence>

        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="text-white space-y-6"
        >
          <ContactInfo formData={formData} />
          <ContactForm onSubmit={handleSubmit} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
