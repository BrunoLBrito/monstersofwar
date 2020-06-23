import React, { useState, useEffect, useContext } from 'react'

import ContextStore from '../../Store/ContextStore'
import firebase from '../../firebase'

const EditUserForm = () => {
	const { currentUser, setModal } = useContext(ContextStore)

	const [ user, setUser ] = useState(currentUser)
	const [ alert, setAlert ] = useState({ msg: '', color: '' })

	useEffect(
		() => {
			setUser(currentUser)
		},
		[ currentUser ]
	)

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

		db.collection('users').doc(user.id).set({
			name   : user.name,
			points : +user.points,
			jumps  : +user.jumps
		})

		setAlert({ msg: 'Player alterado com sucesso!', color: 'alert success' })
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
				/>
				<input
					type="number"
					name="points"
					value={user.points}
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="jumps"
					value={user.jumps}
					onChange={handleInputChange}
				/>

				<button type="submit">Alterar</button>
			</form>
		</div>
	)
}

export default EditUserForm
