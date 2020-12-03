
import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import './Intro.css';
import bg from '../img/intro-bg.jpg';
import logo from '../img/logo-white.png';
import galkin from '../img/galkin.png';

const Intro = ({ id, go, route, fetchedUser }) => {
	return (
		<Panel id={id}>
			{fetchedUser &&
				<Fragment>
					<Div className='Intro' style={{ textAlign: "center", backgroundImage: 'url(' + bg + ')', display: "flex", justifyContent: "center", alignItems: "center" }} >
						<Div style={{ minHeight: "70%", color: "#ffffff" }}>
							<h3>Новый год с</h3>
							<h3><img src={logo} alt="" style={{ width: "12rem" }} /></h3>
							<h3>Миссия: <br />“Накрой праздничный стол с&nbsp;Черкизово!”</h3>
							<p>Набери больше всех баллов и&nbsp;получи крутые призы!</p>
							<div style={{ display: "flex", alignItems: "center" }}>
								<div>
									<img src={galkin} alt="Максим Галкин" style={{ width: "12rem" }} />
								</div>
								<div style={{ textAlign: "left", marginLeft: "1.4rem" }}>
									<p>Попробуй набрать больше баллов, <br />чем Максим Галкин</p>
									<p><button className={`btn-red`} onClick={() => go(route)}>Играть</button></p>
								</div>
							</div>
						</Div>
					</Div>
				</Fragment>
			}
		</Panel>
	)
}
export default Intro;