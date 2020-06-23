import React, { useState, useContext } from 'react'

import ContextStore from '../../Store/ContextStore'
import firebase from '../../firebase'

const AddUserForm = () => {
	const initialState = { name: '', points: '', jumps: '' }

	const { setModal } = useContext(ContextStore)

	const [ user, setUser ] = useState(initialState)
	const [ alert, setAlert ] = useState({ msg: '', color: '' })

	const handleInputChange = e => {
		const { name, value } = e.target

		setUser(prev => ({ ...prev, [name]: value }))
	}

	const submit = e => {
		e.preventDefault()

		if (!user.name || !user.points || !user.jumps) {
			return setAlert({ msg: 'Preencha todos os campos!', color: 'alert warning' })
		}

		const db = firebase.firestore()

		db.collection('users').add({
			name   : user.name,
			points : +user.points,
			jumps  : +user.jumps
		})

		setUser(initialState)
		setAlert({ msg: 'Player adicionado com sucesso!', color: 'alert success' })
		// setModal('off')
	}

	return (
		<div className="container-form">
			<form onSubmit={submit}>
				<div>
					<p onClick={() => setModal('off')}>&times;</p>
				</div>

				<div className={alert.color}>
					<span>{alert.msg}</span>
				</div>
				<input
					type="text"
					name="name"
					value={user.name}
					onChange={handleInputChange}
					placeholder="Digite o nickname"
				/>
				<input
					type="number"
					name="points"
					value={user.points}
					onChange={handleInputChange}
					placeholder="Digite os pontos"
				/>
				<input
					type="number"
					name="jumps"
					value={user.jumps}
					onChange={handleInputChange}
					placeholder="Digite os pulos"
				/>

				<button type="submit">Adicionar</button>
			</form>
		</div>
	)
}

export default AddUserForm
