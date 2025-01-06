import { motion } from "framer-motion";

const Snake = ({ snake, CELL_SIZE }) => {
  return (
    <>
      {snake.map(([x, y], i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute bg-[#00FF9C] rounded-sm"
          style={{
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            left: x * CELL_SIZE,
            top: y * CELL_SIZE,
          }}
        />
      ))}
    </>
  );
};

export default Snake;
