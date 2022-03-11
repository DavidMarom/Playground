import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../Context";
import _ from "lodash";


export const Snake = () => {
  let _X = 0;

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
  // const [headx, setHeadx] = useState(2);
  const [heady, setHeady] = useState(2);
  const [dir, setDir] = useState('right');

  useEffect(() => { setValue("snake"); });

  useEffect(() => {
    const interval = setInterval(() => {
      calcBoard();
      console.log(_X + ' : ' + heady);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const renderBoard = () => {
    let jsxBoard: Array<any>;
    jsxBoard = [];
    let cellContent = '';
    board.forEach((row, idx2) => {
      row.forEach((element, idx) => {
        if (element === 0) { cellContent = '' }
        if (element === 1) { cellContent = 'B' }
        if (element === 2) { cellContent = '😀' }
        jsxBoard.push(<div key={idx + '' + idx2} className="cell">{cellContent}</div>)
      })
    })
    return jsxBoard;
  }

  const calcBoard = () => {
    let newBoard = _.cloneDeep(board);

    if (dir === 'right' && _X < 9) {
      _X++;
      newBoard[heady][_X ] = 2;
    }
    setBoard(newBoard);
  }



  return (
    <>
      <p>{_X}</p>
      <div className="board-grid">{renderBoard()}</div>
    </>
  );
};
