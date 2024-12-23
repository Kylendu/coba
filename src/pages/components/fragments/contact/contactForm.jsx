import { motion } from "framer-motion";

const ContactForm = ({ onSubmit }) => {
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="show"
      className="space-y-2"
    >
      <motion.p
        variants={inputVariants}
        className="text-gray-500"
      >{`// Send me a message`}</motion.p>
      <motion.form
        variants={inputVariants}
        onSubmit={onSubmit}
        className="ml-4 space-y-4"
      >
        <motion.input
          variants={inputVariants}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-transparent border border-[#4D5BCE] p-2 rounded text-slate-300"
        />
        <motion.input
          variants={inputVariants}
          type="email"
          name="email"
          required
          placeholder="mail@example.com"
          className="w-full bg-transparent border border-[#4D5BCE] p-2 rounded text-slate-300"
        />
        <motion.textarea
          variants={inputVariants}
          name="message"
          placeholder="Your message here..."
          required
          className="w-full bg-transparent border border-[#4D5BCE] p-2 rounded text-slate-300 h-32"
        />
        <motion.button
          variants={inputVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="bg-[#4D5BCE] text-slate-300 px-6 py-2 rounded hover:bg-[#3A4494]"
        >
          Execute
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
