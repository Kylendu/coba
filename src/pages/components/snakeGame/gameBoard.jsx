import Snake from './snake';
import Food from './food';
import GameOver from './gameOver';

const GameBoard = ({ GRID_SIZE, CELL_SIZE, snake, food, gameOver, score, onRestart }) => {
  return (
    <div className="bg-[#011627] rounded-md p-4 mb-4 relative overflow-hidden">
      <div
        className="grid place-items-center"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {!gameOver && <Snake snake={snake} CELL_SIZE={CELL_SIZE} />}
        {!gameOver && <Food food={food} CELL_SIZE={CELL_SIZE} />}
        {gameOver && <GameOver score={score} onRestart={onRestart} />}
      </div>
    </div>
  );
};

export default GameBoard;
