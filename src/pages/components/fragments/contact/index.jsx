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
  const [showNotif, setShowNotif] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: name.value,
          email: email.value,
          message: message.value,
        },
        "IWbJi61y2ImX6-lKU"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            name: name.value,
            email: email.value,
            message: message.value,
          });
          setShowNotif(true);
          setTimeout(() => setShowNotif(false), 3000);
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send message, please try again.");
        }
      );
    e.target.reset();
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
          {showNotif && <Notification show={showNotif} />}
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
