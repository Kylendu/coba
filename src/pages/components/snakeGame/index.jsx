import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import GameBoard from "./GameBoard";
import Controls from "./controls";
import FoodCounter from "./foodCounter";

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
        const newDirection = keyDirections[e.key];

        const isOppositeDirection =
          direction[0] === -newDirection[0] &&
          direction[1] === -newDirection[1];

        if (!isOppositeDirection) {
          setDirection(newDirection);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameOver, direction]);

  const startGame = () => {
    setSnake([[7, 7]]);
    setFood(generateFood());
    setDirection([1, 0]);
    setGameOver(false);
    setFoodCount(7);
    setScore(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-[#013c3c] rounded-lg p-6 min-w-[300px] shadow-xl border border-[#01474a]"
    >
      <GameBoard
        GRID_SIZE={GRID_SIZE}
        CELL_SIZE={CELL_SIZE}
        snake={snake}
        food={food}
        gameOver={gameOver}
        score={score}
        onRestart={startGame}
      />
      <Controls
        onDirectionChange={setDirection}
        gameOver={gameOver}
        direction={direction}
      />
      <FoodCounter foodCount={foodCount} />

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
  );
};

export default Game;
