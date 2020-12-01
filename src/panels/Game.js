import React, { Fragment, useEffect } from 'react';
import ReactDOM from "react-dom";
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { Left, Right, Rotate } from '../Icons'
import Tetris from '../components/tetris';
import AppActions from '../actions/app-actions';
import PieceStore from '../stores/piece-store';
import AppConstants from '../constants/app-constants';
import GameStore from '../stores/game-store'
import BoardStore from '../stores/board-store'
import './Game.css';
import bg from '../img/game-bg.jpg';
import canavsBg from '../img/canvas-bg.png';

const { events } = AppConstants;

const Game = ({ id, go, route, fetchedUser, activePanel }) => {

	const moveLeft = (e) => {
		e.preventDefault();
		AppActions.moveLeft()
	}
	const moveRight = (e) => {
		e.preventDefault();
		AppActions.moveRight()

	}
	const rotate = (e) => {
		e.preventDefault();
		AppActions.flipClockwise()
	}

	PieceStore.on(events.PLAYER_LOST, () => {
		go(route);
	});

	useEffect(() => {
		activePanel == 'game' && GameStore.forceStart()
	}, [activePanel])

	return (
		<Panel id={id}>
			{fetchedUser &&
				<Fragment>
					<Div className='Game' style={{ textAlign: "center", backgroundImage: 'url(' + bg + ')', color: "#ffffff" }} >
						<Div style={{ paddingLeft: "1rem" }}>
							<h4>Миссия: <br /> накрой праздничный стол с Черкизово!</h4>
							<p>Набери больше всех баллов и&nbsp;получи крутые призы!</p>
						</Div>
						<Tetris>
							{({ HeldPiece, Gameboard, PieceQueue, points, linesCleared }) => {
								return (
									<Div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
										<Div style={{ width: "32%", justifyContent: "center", alignItems: "center" }}>1</Div>
										<Div style={{ width: "36%", justifyContent: "center", alignItems: "center" }}>
											<div style={{
												backgroundPosition: "center",
												backgroundSize: "contain",
												backgroundImage: 'url(' + canavsBg + ')'
											}}>
												<div>
													{/* <HeldPiece /> */}
													<Gameboard />
													{/* <PieceQueue /> */}
												</div>
											</div>
										</Div>
										<Div style={{ width: "32%", justifyContent: "center", alignItems: "center", padding: "0 1rem 0 2rem" }}>
											<Div className={`scores`}>
												<p>Очков: {points}</p>
												<p>Линий: {linesCleared}</p>
											</Div>
											<Div style={{
												background: "#AA2223",
												border: "2px solid #FFFFFF",
												boxSizing: "border-box",
												boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
												borderRadius: "1.5rem",
												padding: "0.5rem 1.5rem"
											}}>
												<Div className={`control`} style={{ display: "flex", justifyContent: "space-between" }}>
													<div onClick={moveLeft} style={{ display: "block", width: "25%" }}>
														<Left style={{ display: "block", width: "100%" }} />
													</div>
													<div onClick={rotate} style={{ display: "block", width: "25%" }}>
														<Rotate style={{ display: "block", width: "100%" }} />
													</div>
													<div onClick={moveRight} style={{ display: "block", width: "25%" }}>
														<Right style={{ display: "block", width: "100%" }} />
													</div>
												</Div>
											</Div>
										</Div>
									</Div>
								);
							}}
						</Tetris>
					</Div>
				</Fragment>
			}
		</Panel >
	)
}

export default Game;
