import { motion } from "framer-motion";

const Controls = ({ onDirectionChange, gameOver, direction }) => {
  const arrows = [
    { key: "▲", col: "col-start-2", dir: [0, -1] },
    { key: "◄", col: "col-start-1", dir: [-1, 0] },
    { key: "▼", col: "col-start-2", dir: [0, 1] },
    { key: "►", col: "col-start-3", dir: [1, 0] },
  ];

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-[#00FF9C] text-xs"
      >
        {"// use keyboard"}
        <br />
        {"// arrows to play"}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-3 gap-2 w-24 mx-auto text-lynch-300"
      >
        {arrows.map((arrow) => (
          <motion.div
            key={arrow.key}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={arrow.col}
            onClick={() => {
              if (!gameOver) {
                const isOppositeDirection =
                  direction[0] === -arrow.dir[0] &&
                  direction[1] === -arrow.dir[1];
                if (!isOppositeDirection) {
                  onDirectionChange(arrow.dir);
                }
              }
            }}
          >
            <div className="bg-[#011627] p-2 rounded cursor-pointer hover:bg-[#011627]/80 transition-colors">
              {arrow.key}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Controls;
