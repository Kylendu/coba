import { motion } from "framer-motion";

const ContactInfo = ({ formData = {} }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-1"
    >
      <motion.p
        variants={itemVariants}
        className="text-gray-500"
      >{`// Contact information`}</motion.p>
      <div className="text-[#4D5BCE]">
        <span className="text-[#c161e4]">const </span>
        <span className="text-[#5565E8]">contactDetails</span>
        <span className="text-slate-300"> = </span>
        <span className="text-[#FFA07A]">{"{"}</span>
      </div>
      <div className="ml-4">
        {Object.entries(formData).map(([key, value]) => (
          <motion.div
            key={key}
            className="text-[#4D5BCE]"
            variants={itemVariants}
          >
            <span className="text-[#5565E8]">{key}</span>
            <span className="text-slate-300">: </span>
            <span className="text-[#FFA07A]">{`'${value}'`}</span>
            <span className="text-slate-300">,</span>
          </motion.div>
        ))}
      </div>
      <span className="text-[#FFA07A]">{"}"}</span>
    </motion.div>
  );
};

export default ContactInfo;
