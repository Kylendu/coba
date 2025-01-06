import { motion } from "framer-motion";

const Notification = ({ show, type = "success" }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const message = type === "success" 
    ? "Message sent successfully! ✨"
    : "Failed to send message, please try again.";

  return (
    show && (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`fixed z-50 top-4 right-4 ${bgColor} text-white px-6 py-3 rounded shadow-lg`}
      >
        {message}
      </motion.div>
    )
  );
};

export default Notification;
