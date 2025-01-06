import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import Notification from "./notification";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState({
    show: false,
    type: "success",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };

      emailjs.init("IWbJi61y2ImX6-lKU");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setFormData(templateParams);
      setNotification({ show: true, type: "success" });
      e.target.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setNotification({ show: true, type: "error" });
    } finally {
      setTimeout(() => setNotification({ show: false, type: "success" }), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {notification.show && (
            <Notification show={notification.show} type={notification.type} />
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
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
