import React from 'react'
import { useNavigate } from "react-router-dom"

const What = () => {
	const navigate = useNavigate()
	return (
		<div className='home another-page'>
			<button onClick={() => navigate(-1)}>BACK</button >
			<h1 >
				What
			</h1 >
			<p >
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur aut blanditiis cupiditate esse inventore porro quisquam ratione reprehenderit soluta, voluptas voluptatibus. Ab accusantium alias aliquam animi aperiam assumenda atque blanditiis culpa dignissimos eius eos et exercitationem harum, illo impedit in inventore iste itaque maiores minus nam natus necessitatibus neque nesciunt nihil, nisi pariatur possimus provident quae quaerat quasi quos saepe sed suscipit vitae voluptas voluptatum? Aperiam architecto dolorum reiciendis!
			</p >
		</div >
	)
}

export default What