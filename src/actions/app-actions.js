import AppConstants from '../constants/app-constants';
import AppDispatcher from '../dispatchers/app-dispatcher';

const { actions } = AppConstants;

const AppActions = {
  moveDown(piece) {
    AppDispatcher.handleViewAction({
      actionType: actions.MOVE_DOWN,
      piece
    });
		window.woop();
  },

  moveLeft(piece) {
    AppDispatcher.handleViewAction({
      actionType: actions.MOVE_LEFT,
      piece
    });
		window.woop();
  },

  moveRight(piece) {
    AppDispatcher.handleViewAction({
      actionType: actions.MOVE_RIGHT,
      piece
    });
		window.woop();
  },

  hardDrop(piece) {
    AppDispatcher.handleViewAction({
      actionType: actions.HARD_DROP,
      piece
    });
		window.woop();
  },

  flipClockwise(piece) {
    AppDispatcher.handleViewAction({
      actionType: actions.FLIP_CLOCKWISE,
      piece
    });
		window.woop();
  },

  flipCounterclockwise(piece) {
    AppDispatcher.handleViewAction({
      actionType: actions.FLIP_COUNTERCLOCKWISE,
      piece
    });
		window.woop();
  },

  pause() {
    AppDispatcher.handleViewAction({
      actionType: actions.PAUSE
    });
  },

  resume() {
    AppDispatcher.handleViewAction({
      actionType: actions.RESUME
    });
		window.woop();
  },

  hold() {
    AppDispatcher.handleViewAction({
      actionType: actions.HOLD
    });
		window.woop();
  }
};

export default AppActions;
