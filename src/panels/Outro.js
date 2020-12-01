
import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import './Outro.css';
import bg from '../img/intro-bg.jpg';
import logo from '../img/logo-white.png';

const Outro = ({ id, route, fetchedUser, go }) => {
	const replay = () => {

	}
	return (
		<Panel id={id}>
			{fetchedUser &&
				<Fragment>
					<Div className='Outro' style={{ textAlign: "center", backgroundImage: 'url(' + bg + ')', display: "flex", justifyContent: "center", alignItems: "center" }} >
						{/* {fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					<h2>Привет, {fetchedUser.first_name}</h2> */}
						<Div style={{ minHeight: "70%", color: "#ffffff" }}>
							<h2>Новый год с</h2>
							<h2><img src={logo} alt="" style={{ width: "12rem" }} /></h2>
							<h3>Миссия: <br /> накрой праздничный стол с&nbsp;Черкизово!</h3>
							<p>Набери больше всех баллов и&nbsp;получи крутые призы!</p>
							<p>&nbsp;</p>
							<p>
								<button className={`btn-red`} onClick={() => go(route)}>Сыграть еще раз</button>&nbsp;
								<button className={`btn-red`} onClick={() => replay}>Рассказать друзьям</button>
							</p>
						</Div>
					</Div>
				</Fragment>
			}
		</Panel>
	)
}
export default Outro;