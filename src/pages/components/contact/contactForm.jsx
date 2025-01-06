import { motion } from "framer-motion";

const ContactForm = ({ onSubmit }) => {
  const inputStyles =
    "w-full bg-transparent border border-[#4D5BCE] p-3 rounded text-slate-300 focus:border-green-400 focus:shadow-[0_0_10px_rgba(74,222,128,0.3)] transition-all duration-300 outline-none";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-2"
    >
      <motion.p className="text-gray-500">{`// Send me a message`}</motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="ml-4 space-y-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", staggerChildren: 0.1 }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          autoComplete="off"
          className={inputStyles}
        />

        <motion.input
          type="email"
          name="email"
          required
          autoComplete="off"
          placeholder="mail@example.com"
          className={inputStyles}
        />

        <motion.textarea
          name="message"
          placeholder="Your message here..."
          required
          className={inputStyles}
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }}
          dragElastic={10}
          type="submit"
          className="bg-[#4D5BCE] text-slate-300 px-6 py-2 rounded hover:bg-[#3A4494] transition-all duration-300"
        >
          Execute
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
