import React from 'react'
import { useNavigate } from "react-router-dom"

const Who = () => {
	const navigate = useNavigate()
	return (
		<div className='home another-page'>
		<button onClick={() => navigate(-1)}>BACK</button >
			<h1 >
				Who
			</h1 >
			<p >
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius illum nostrum praesentium ratione tempore? Atque, aut consectetur cum cumque debitis delectus dignissimos doloremque ducimus eaque fugit ipsam ipsum non numquam perspiciatis sapiente, vel vero voluptatibus! Culpa dolor et laboriosam maiores minus pariatur suscipit veniam veritatis. A alias delectus error illum?
			</p >
		</div >
	)
}

export default Who