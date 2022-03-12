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
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

  const { value, setValue } = useContext(PageContext);
  const [board, setBoard] = useState(initBoard);
  const [headx, setHeadx] = useState(2);
  const [heady, setHeady] = useState(2);
  const [dir, setDir] = useState('right');

  useEffect(() => { setValue("snake"); });

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
        jsxBoard.push(<div key={idx + '' + idx2} className="cell">{cellContent}</div>)
      })
    })
    return jsxBoard;
  }

  // === calcBoard ===
  // Calculates the next state of the board
  // Validation: 
  // - Check we can move 1 step to the current direction
  const calcBoard = () => {
    let newBoard = _.cloneDeep(board);

    if (dir === 'right' && headx < 9) {
      setHeadx(headx + 1)
      newBoard[heady][headx + 1] = 2;
    }
    setBoard(newBoard);
  }

  useInterval(() => { calcBoard(); }, 1000);


  return (
    <>
      <p>{headx}</p>
      <div className="board-grid">{renderBoard()}</div>
    </>
  );
};
