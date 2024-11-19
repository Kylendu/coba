import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const GRID_SIZE = 15;
const CELL_SIZE = 20;
const INITIAL_SPEED = 200;

const Game = () => {
  const [snake, setSnake] = useState([[7, 7]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState([0, 0]);
  const [gameOver, setGameOver] = useState(true);
  const [foodCount, setFoodCount] = useState(0);
  const [score, setScore] = useState(0);

  const generateFood = useCallback(() => {
    const newFood = [
      Math.floor(Math.random() * GRID_SIZE),
      Math.floor(Math.random() * GRID_SIZE),
    ];
    return snake.some(([x, y]) => x === newFood[0] && y === newFood[1])
      ? generateFood()
      : newFood;
  }, [snake]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      const newSnake = [...snake];
      const head = [
        (newSnake[0][0] + direction[0] + GRID_SIZE) % GRID_SIZE,
        (newSnake[0][1] + direction[1] + GRID_SIZE) % GRID_SIZE,
      ];

      if (newSnake.some(([x, y]) => x === head[0] && y === head[1])) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(head);

      if (head[0] === food[0] && head[1] === food[1]) {
        setFood(generateFood());
        setScore(score + 1);
        setFoodCount((prev) => Math.max(0, prev - 1));
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameInterval = setInterval(moveSnake, INITIAL_SPEED);
    return () => clearInterval(gameInterval);
  }, [snake, direction, food, gameOver, generateFood, score]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver) return;

      const keyDirections = {
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0],
      };

      if (keyDirections[e.key]) {
        e.preventDefault();
        setDirection(keyDirections[e.key]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameOver]);

  const startGame = () => {
    setSnake([[7, 7]]);
    setFood(generateFood());
    setDirection([1, 0]);
    setGameOver(false);
    setFoodCount(7);
    setScore(0);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-[#013c3c] rounded-lg p-6 min-w-[300px] shadow-xl border border-[#01474a]"
      >
        {/* Game Grid */}
        <div className="bg-[#011627] rounded-md p-4 mb-4 relative overflow-hidden">
          <div
            className="grid place-items-center"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
            }}
          >
            {/* Snake and Food */}
            {!gameOver &&
              snake.map(([x, y], i) => (
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
            {!gameOver && (
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
            )}
            {/* Game Over */}
            {gameOver && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="text-[#00FF9C] text-4xl mb-2">GAME OVER!</div>
                <div className="text-[#00FF9C] text-sm">Score: {score}</div>
                <button
                  onClick={startGame}
                  className="text-[#00FF9C] text-xs mt-4 hover:text-[#00FF9C]/80 transition-colors"
                >
                  start-again
                </button>
              </motion.div>
            )}
          </div>
        </div>
        {/* Game Controls */}
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
  
          {/* Arrow Keys */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-2 w-24 mx-auto text-lynch-300"
          >
            {[
              { key: "▲", col: "col-start-2", dir: [0, -1] },
              { key: "◄", col: "col-start-1", dir: [-1, 0] },
              { key: "▼", col: "col-start-2", dir: [0, 1] },
              { key: "►", col: "col-start-3", dir: [1, 0] },
            ].map((arrow) => (
              <motion.div
                key={arrow.key}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={arrow.col}
                onClick={() => !gameOver && setDirection(arrow.dir)}
              >
                <div className="bg-[#011627] p-2 rounded cursor-pointer hover:bg-[#011627]/80 transition-colors">
                  {arrow.key}
                </div>
              </motion.div>
            ))}
          </motion.div>
  
          {/* Food Counter */}
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
        </div>
  
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setGameOver(true)}
          className="absolute bottom-4 right-4 text-xs text-white/50 hover:text-white/70 bg-white/10 px-3 py-1 rounded transition-colors"
        >
          skip
        </motion.button>
      </motion.div>
    </>
  );
};

export default Game;
