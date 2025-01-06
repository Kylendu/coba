import { motion } from "framer-motion";

const Food = ({ food, CELL_SIZE }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 1 }}
      className="absolute bg-[#FF4D4D] rounded-full"
      style={{
        width: CELL_SIZE - 2,
        height: CELL_SIZE - 2,
        left: food[0] * CELL_SIZE,
        top: food[1] * CELL_SIZE,
      }}
    />
  );
};

export default Food;
