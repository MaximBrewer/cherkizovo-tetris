
import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import ScoreStore from '../stores/score-store';

import './Outro.css';
import bg from '../img/intro-bg.jpg';
import logo from '../img/logo-white.png';

const Outro = ({ id, route, fetchedUser, go, bridge }) => {
	const replay = () => {
		console.log(bridge.send("VKWebAppShowWallPostBox", {"message": `Я набрал ${ScoreStore.getPoints()} очков!`}));
	}

	const pad = (num) => {
		return ('000000000' + num).substr(-6).split('');
	}
	return (
		<Panel id={id}>
			{fetchedUser &&
				<Fragment>
					<Div className='Outro' style={{ textAlign: "center", backgroundImage: 'url(' + bg + ')', display: "flex", justifyContent: "center", alignItems: "center" }} >
						{/* {fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					<h2>Привет, {fetchedUser.first_name}</h2> */}
						<Div style={{ minHeight: "80%", color: "#ffffff" }}>
							<h2>Новый год с</h2>
							<h2><img src={logo} alt="" style={{ width: "12rem" }} /></h2>
							<h3>Миссия: <br /> накрой праздничный стол с&nbsp;Черкизово!</h3>
							<p>Ваш счет:</p>
							<p className={`numbers`}>
								{pad(ScoreStore.getPoints()).map((item, index) => (
									<span key={index}>{item}</span>
								))}
							</p>
							<p>&nbsp;</p>
							<p>
								<button className={`btn-red`} onClick={() => go(route)}>Сыграть еще раз</button>&nbsp;&nbsp;
								<button className={`btn-blue`} onClick={() => replay()}>Рассказать друзьям</button>
							</p>
						</Div>
					</Div>
				</Fragment>
			}
		</Panel>
	)
}
export default Outro;