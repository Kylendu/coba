import { motion } from "framer-motion";

const ContactForm = ({ onSubmit }) => {
  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="show"
      className="space-y-2"
    >
      <motion.p
        variants={itemVariants}
        className="text-gray-500"
      >{`// Send me a message`}</motion.p>
      <motion.div variants={itemVariants} className="text-[#4D5BCE]">
        <span className="text-[#c161e4]">function </span>
        <span className="text-[#5565E8]">sendMessage</span>
        <span className="text-slate-300">() {"{"}</span>
      </motion.div>
      <motion.form
        variants={itemVariants}
        onSubmit={onSubmit}
        className="ml-4 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-transparent border border-[#4D5BCE] p-2 rounded text-slate-300"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="mail@example.com"
          className="w-full bg-transparent border border-[#4D5BCE] p-2 rounded text-slate-300"
        />
        <textarea
          name="message"
          placeholder="Your message here..."
          required
          className="w-full bg-transparent border border-[#4D5BCE] p-2 rounded text-slate-300 h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-[#4D5BCE] text-slate-300 px-6 py-2 rounded hover:bg-[#3A4494]"
        >
          Execute
        </button>
      </motion.form>
      <span className="text-slate-300">{"}"}</span>
    </motion.div>
  );
};

export default ContactForm;
