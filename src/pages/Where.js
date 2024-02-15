import React from 'react'
import { useNavigate } from "react-router-dom"

const Where = () => {
	const navigate = useNavigate()
	return (
		<div className='home another-page'>
			<button onClick={() => navigate(-1)}>BACK</button >
			<h1 >
				Where
			</h1 >
			<p >
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, beatae dignissimos distinctio ducimus error, facere molestiae nam numquam quas repudiandae tempora voluptates. Alias, amet aut consequuntur corporis cupiditate deleniti dicta dolores eligendi facere, harum libero minima, natus nisi numquam perspiciatis quas quisquam reiciendis. Autem beatae consequuntur deleniti eos exercitationem ipsa quod. Ad cupiditate deserunt eos, et harum ipsum itaque labore laboriosam laborum maiores maxime nesciunt porro quaerat repellat sapiente sed sequi sit voluptatum? Ad aliquam at consequuntur cum dolor dolore dolorum ducimus earum enim excepturi impedit inventore molestias neque nostrum quam quod sunt, vel voluptates? A amet aspernatur assumenda autem, eligendi, est incidunt magni maxime molestias nisi nobis nulla perspiciatis possimus quam sunt unde vel. Consequatur culpa cupiditate dolores ea eaque eligendi error fuga, iusto nostrum quae quidem ratione repudiandae saepe sequi suscipit vel voluptas. Accusamus nam perspiciatis quibusdam veniam?
			</p >
		</div >
	)
}

export default Where