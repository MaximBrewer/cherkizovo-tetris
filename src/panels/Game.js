import React, { Fragment, useEffect } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { Left, Right, Rotate, Drop } from '../Icons'
import Tetris from '../components/tetris';
import AppActions from '../actions/app-actions';
import PieceStore from '../stores/piece-store';
import AppConstants from '../constants/app-constants';
import GameStore from '../stores/game-store'
import BoardStore from '../stores/board-store'
import './Game.css';
import bg from '../img/game-bg.jpg';
import canavsBg from '../img/canvas-bg.png';
import ScoreStore from '../stores/score-store';
import { Scrollbars } from 'react-custom-scrollbars-with-mobile';

const { events } = AppConstants;

const Game = ({ id, go, route, fetchedUser, activePanel }) => {



    function renderView({ style, ...props }) {
        const viewStyle = {
            paddingRight: 26
        };
        return (
            <div
                className="box"
                style={{ ...style, ...viewStyle }}
                {...props} />
        );
    }

    function renderThumbHorizontal({ style, ...props }) {
        return (
            <div />
        );
    }

    function renderTrackHorizontal({ style, ...props }) {
        return (
            <div />
        );
    }

    function renderTrackVertical({ style, ...props }) {
        const trackStyle = {
            width: "16px",
            padding: "4px",
            borderRadius: "8px",
            backgroundColor: "#E54C2E",
            position: "absolute",
            right: 0,
            bottom: 0,
            top: 0
        };
        return (
            <div
                style={{ ...style, ...trackStyle }}
                {...props} />
        );
    }

    function renderThumbVertical({ style, ...props }) {
        const thumbStyle = {
            width: "8px",
            height: "102px",
            borderRadius: "4px",
            backgroundColor: "#ffffff",
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }

	const pad = (num) => {
		return ('000000000' + num).substr(-6).split('');
	}

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
	const drop = (e) => {
		e.preventDefault();
		AppActions.hardDrop()
	}

	PieceStore.on(events.PLAYER_LOST, () => {
		go(route);
	});

	useEffect(() => {
		activePanel === 'game' && GameStore.forceStart()
		window.audioMusic.play()
	}, [activePanel])

	BoardStore.on(events.LINE_CLEARED, (additionalLines) => {
		window.woop();
	});


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
										<Div style={{ width: "32%", justifyContent: "center", padding: "0 1rem 0 2rem" }}>
											<Div className={`score`}>
												<p>Ваш счет:</p>
												<p className={`numbers`}>
													{pad(ScoreStore.getPoints()).map((item, index) => (
														<span key={index}>{item}</span>
													))}
												</p>
											</Div>
											<p>Лучшие игроки</p>
											<Div className={`scores`}>
												<Scrollbars style={{ height: 600 }}
													renderView={renderView}
													renderThumbHorizontal={renderThumbHorizontal}
													renderThumbVertical={renderThumbVertical}
													renderTrackHorizontal={renderTrackHorizontal}
													renderTrackVertical={renderTrackVertical}
													mobile={true}
												>
													<div style={{ paddingRight: "10px" }}>
														{questions.map((item, index) => (
															<div key={index} className="faq-item">
																<div onClick={(e) => openQuestion(index)} className="question">{item.question} <ArrowDown style={{ fill: "#ffffff", stroke: "#ffffff", width: "17px", height: "11px" }} /></div>
																<div className="answer" style={{ maxHeight: item.isOpen ? "100%" : "0" }}><div>{parse(item.answer)}</div></div>
															</div>
														))}
													</div>
												</Scrollbars>
												<ol>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
													<li>Михаил: Счет <strong>678 800</strong></li>
												</ol>
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
													<div onClick={drop} style={{ display: "block", width: "25%" }}>
														<Drop style={{ display: "block", width: "100%" }} />
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
