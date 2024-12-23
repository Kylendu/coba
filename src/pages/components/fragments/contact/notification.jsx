import { motion } from "framer-motion";

const Notification = ({ show }) => {
  return (
    show && (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed z-50 top-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg"
      >
        Message sent successfully! ✨
      </motion.div>
    )
  );
};

export default Notification;
