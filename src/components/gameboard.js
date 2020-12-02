import React from 'react';
import key from 'keymaster';
import AppActions from '../actions/app-actions';
import GameStore from '../stores/game-store';
// import AppConstants from '../constants/app-constants';

// const { states } = AppConstants;

function gameBoard() {
  return {
    gameBoard: GameStore.getGameBoard()
  };
}

const keyboardMap = {
  // x: AppActions.moveDown,
  left: AppActions.moveLeft,
  right: AppActions.moveRight,
  space: AppActions.hardDrop,
  // z: AppActions.flipCounterclockwise,
  // x: AppActions.flipClockwise,
  up: AppActions.flipClockwise,
  // s: AppActions.flipClockwise,
  // p: () => {
  //   if (GameStore.getCurrentState() === states.PLAYING) {
  //     AppActions.pause();
  //   } else {
  //     AppActions.resume();
  //   }
  // },
  // c: AppActions.hold,
  // shift: AppActions.hold
};

const watchKeys = (e) => {
  if (e.isComposing || e.keyCode === 229) {
    return;
  }
  switch (e.keyCode) {
    case 32:
      AppActions.hardDrop()
      e.preventDefault();
      break;
    case 37:
      AppActions.moveLeft()
      e.preventDefault();
      break;
    case 38:
      AppActions.flipClockwise()
      e.preventDefault();
      break;
    case 39:
      AppActions.moveRight()
      e.preventDefault();
      break;
    case 40:
      AppActions.moveDown()
      e.preventDefault();
      break;
    default:
      break;
  }
  // Object.keys(keyboardMap).forEach((k) => {
  //   if(e.)
  // })
}

function addKeyboardEvents() {
  window.addEventListener('keydown', watchKeys)
  // key("up", toUp);
  // key("down", toDown);
  // key("right", toRight);
  // key("left", toLeft);
  // Object.keys(keyboardMap).forEach((k) => {
  //   // if (k === 'shift') {
  //   //   DetectShift.bind(keyboardMap[k]);
  //   // } else {
  //   // key(k, keyboardMap[k]);
  //   // }
  //   window.addEventListener('keydown',)
  // });
}
function removeKeyboardEvents() {
  window.removeEventListener('keydown', watchKeys)
  // key.unbind("up");
  // key.unbind("down");
  // key.unbind("left");
  // key.unbind("right");
  // Object.keys(keyboardMap).forEach((k) => {
  //   // if (k === 'shift') {
  //   //   DetectShift.unbind(keyboardMap[k]);
  //   // } else {
  //   // key.unbind(k);
  //   // }
  // });
}

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = gameBoard();
  }

  componentDidMount() {
    GameStore.addChangeListener(this._onChange);
    addKeyboardEvents();
  }

  componentWillUnmount() {
    removeKeyboardEvents();
    GameStore.pause();
    GameStore.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState(gameBoard());
  };

  render() {
    const rows = this.state.gameBoard.map((row, i) => {
      const blocksInRow = row.map((block, j) => {
        const classString = `game-block ${block || 'block-empty'}`;
        return <td key={j} className={classString} />;
      });

      return <tr key={i}>{blocksInRow}</tr>;
    });
    return (
      <table className="game-board">
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
