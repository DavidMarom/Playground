import React, { useContext, useEffect, useState, useRef } from "react";
import { PageContext } from "../Context";
import _ from "lodash";


function useInterval(callback: any, delay: number) {
  const savedCallback: any = useRef();
  useEffect(() => { savedCallback.current = callback; }, [callback]);
  useEffect(() => {
    let id = setInterval(() => { savedCallback.current(); }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export const Snake = () => {
  const initBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

  const initSnake: number[][] = [
    [2, 0], //head
    [1, 0],
    [0, 0]]

  const { value, setValue } = useContext(PageContext);
  const [board, setBoard] = useState(initBoard);
  const [snake, setSnake] = useState(initSnake);

  const [dir, setDir] = useState('right');

  useEffect(() => { setValue("snake"); });

  document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case 37:
        setDir('left');
        break;
      case 38:
        setDir('up');
        break;
      case 39:
        setDir('right');
        break;
      case 40:
        setDir('down');
        break;
    }
  });


  // === rederBoard ===
  // Converts the data model (board array) to a JSX elemment. Returns a jsx object
  const renderBoard = () => {
    let jsxBoard: Array<any>;
    jsxBoard = [];
    let cellContent = '';
    board.forEach((row, idx2) => {
      row.forEach((cell, idx) => {
        if (cell === 0) { cellContent = '' }
        if (cell === 1) { cellContent = 'B' }
        if (cell === 2) { cellContent = '😀' }
        if (cell === 4) { cellContent = '🍎' }
        jsxBoard.push(<div key={idx + '' + idx2} className="cell">{cellContent}</div>)
      })
    })
    return jsxBoard;
  }

  // === calcBoard ===
  // Calculates the next state of the board
  // Validation: 
  // - Check we can move 1 step in the current direction
  const calcBoard = () => {
    let newBoard = _.cloneDeep(board);
    let newSnake = _.cloneDeep(snake);

    // If Right
    if (dir === 'right' && snake[0][0] < 8) {
      newSnake.unshift([snake[0][0] + 1, snake[0][1]])
      let removedTail: any = newSnake.pop();
      // Remove tail link
      newBoard[removedTail[1]][removedTail[0]] = 0;
    }


    // If Down
    if (dir === 'down' && snake[0][1] < 8) {
      newSnake.unshift([snake[0][0], snake[0][1] + 1])
      let removedTail: any = newSnake.pop();
      // Remove tail link
      newBoard[removedTail[1]][removedTail[0]] = 0;
    }

    // If Up
    if (dir === 'up' && snake[0][1] > 0) {
      newSnake.unshift([snake[0][0], snake[0][1] - 1])
      let removedTail: any = newSnake.pop();
      // Remove tail link
      newBoard[removedTail[1]][removedTail[0]] = 0;
    }


    // If Left
    if (dir === 'left' && snake[0][0] > 0) {
      newSnake.unshift([snake[0][0] - 1, snake[0][1]])
      let removedTail: any = newSnake.pop();
      // Remove tail link
      newBoard[removedTail[1]][removedTail[0]] = 0;
    }



    // Put snake on board
    newSnake.forEach(bodyLink => {
      newBoard[bodyLink[1]][bodyLink[0]] = 1
    });
    newBoard[newSnake[0][1]][newSnake[0][0]] = 2;


    // Update the state
    setSnake(newSnake);
    setBoard(newBoard);
  }

  useInterval(() => { calcBoard(); }, 500);




  return (
    <>
      <p>head: {snake[0][0]}, {snake[0][1]}</p>
      <p>tail: {snake[snake.length - 1][0]}, {snake[snake.length - 1][1]}</p>
      <div className="board-grid">{renderBoard()}</div>
    </>
  );
};