import React, { useContext } from 'react'

import './styles.css'

import { MdDeleteForever, MdModeEdit } from 'react-icons/md'

import ContextStore from '../../Store/ContextStore'
import firebase from '../../firebase'

const TableUsers = () => {
	const { users, editRow, setModal, hide } = useContext(ContextStore)

	const onDelete = id => {
		if (window.confirm('Deseja realmente deletar esse player?')) {
			const db = firebase.firestore()

			db.collection('users').doc(id).delete()
		}
	}

	const action = user => {
		editRow(user)
		setModal('edit')
	}

	const totalPoints = () => {
		return users.reduce((a, b) => a + b.points, 0)
	}

	return (
		<div className="wapper">
			<table className="table-users">
				<thead>
					<tr>
						<th>#</th>
						<th>Nome</th>
						{!hide.hidden ? <th>Pontos</th> : null}
						<th>Pulos</th>
						{!hide.hidden ? <th>%</th> : null}
						{!hide.hidden ? <th>Ações</th> : null}
					</tr>
				</thead>
				<tbody>
					{users.length > 0 ? (
						users.map((user, index) => (
							<tr
								key={user.id}
								style={
									user.jumps > 0 ? (
										{ background: '#dff0d8', fontWeight: '400' }
									) : (
										{ background: '#f2dede', fontWeight: '300' }
									)
								}
							>
								<td>{index + 1}°</td>
								<td>{user.name}</td>
								{!hide.hidden ? (
									<td>{user.points.toLocaleString('pt-BR')}</td>
								) : null}
								<td>{user.jumps}</td>
								{!hide.hidden ? (
									<td>{(user.points * 100 / totalPoints()).toFixed(2)}%</td>
								) : null}
								{!hide.hidden ? (
									<td>
										<div className="button-group">
											<button
												onClick={() => action(user)}
												className="btn-table btn-edit"
											>
												<MdModeEdit />
											</button>
											<button
												onClick={() => onDelete(user.id)}
												className="btn-table btn-del"
											>
												<MdDeleteForever />
											</button>
										</div>
									</td>
								) : null}
							</tr>
						))
					) : (
						<tr>
							<td colSpan="6">Nenhum player encontrado</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}

export default TableUsers
