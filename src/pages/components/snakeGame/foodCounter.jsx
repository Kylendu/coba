import { motion } from "framer-motion";

const FoodCounter = ({ foodCount }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-[#00FF9C] text-xs mt-4"
    >
      {"// food left"}
      <div className="flex gap-1 mt-1">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className={`w-2 h-2 rounded-full ${
              i < foodCount ? "bg-[#00FF9C]" : "bg-[#011627]"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FoodCounter;
