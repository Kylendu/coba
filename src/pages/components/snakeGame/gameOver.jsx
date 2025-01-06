import { motion } from "framer-motion";

const GameOver = ({ score, onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center"
    >
      <div className="text-[#00FF9C] text-4xl mb-2">GAME OVER!</div>
      <div className="text-[#00FF9C] text-sm">Score: {score}</div>
      <button
        onClick={onRestart}
        className="text-[#00FF9C] text-xs mt-4 hover:text-[#00FF9C]/80 transition-colors"
      >
        start-again
      </button>
    </motion.div>
  );
};

export default GameOver;
