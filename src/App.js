import React, { useState, useEffect } from 'react'

import firebase from './firebase'
import ContextStore from './Store/ContextStore'

import Header from './components/Header'
import EditUserForm from './components/EditUserForm'
import AddUserForm from './components/AddUserForm'
import TableUsers from './components/TableUsers'

import './App.css'

function App() {
	const [ users, setUsers ] = useState([])
	const [ currentUser, setCurrentUser ] = useState({
		id     : null,
		name   : '',
		points : '',
		jumps  : ''
	})

	const [ modal, setModal ] = useState('off')
	const [ hide, setHide ] = useState({
		hidden : false,
		txt    : 'Tabela Simples',
		desc   : 'points'
	})

	useEffect(
		() => {
			const db = firebase.firestore()

			db.collection('users').orderBy(hide.desc, 'desc').onSnapshot(data => {
				setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
			})
		},
		[ hide ]
	)

	const editRow = user => {
		setCurrentUser(user)
	}

	const changeModal = () => {
		if (modal === 'edit') {
			return <EditUserForm />
		} else if (modal === 'add') {
			return <AddUserForm />
		}
	}

	const handleHide = () => {
		if (hide.hidden) {
			setHide({ hidden: false, txt: 'Tabela Simples', desc: 'points' })
		} else {
			setHide({ hidden: true, txt: 'Tabela Completa', desc: 'jumps' })
		}
	}

	return (
		<ContextStore.Provider value={{ users, currentUser, editRow, setModal, hide }}>
			<div className="container">
				<Header />
				<div className="btn-add">
					<button className="btn-green" onClick={() => handleHide()}>
						{hide.txt}
					</button>
					<button className="btn-red" onClick={() => setModal('add')}>
						Adicionar Player
					</button>
				</div>

				{changeModal()}

				<TableUsers />
			</div>
		</ContextStore.Provider>
	)
}

export default App
