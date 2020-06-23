import React from 'react'
import { MdMenu } from 'react-icons/md'

import logo from '../assets/imgs/logo192.png'

import './styles.css'

const Header = () => {
	return (
		<div className="container-header">
			<header>
				<div className="logo">
					<img src={logo} alt="" />
					<p>MoWᴵᴷᴵ</p>
				</div>

				<div
					className="menu"
					onClick={() => alert('Aplicação em desenvolvimento - by: Bruno Brito')}
				>
					<MdMenu />
				</div>
			</header>
		</div>
	)
}

export default Header
