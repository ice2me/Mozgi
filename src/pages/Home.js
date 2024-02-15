import React, { useEffect, useRef } from 'react'
import Circle from '../assets/icons/circle.svg'
import { APP_ROUTE } from "../utils/constants"

const Home = () => {
	const transitionTextBlock = useRef(null)
	const bodyBlock = document.querySelector('.body')

	useEffect(() => {
		if (transitionTextBlock?.current !== undefined || transitionTextBlock?.current !== null) {
			bodyBlock.addEventListener('mousemove', e => {
				let xAxis = (window.innerWidth / 20 - e.pageX) / 500
				let yAxis = (window.innerHeight / 20 - e.pageY) / 500
				transitionTextBlock.current.style.transform = `translateY(${xAxis}%) translateX(${yAxis}%)`
			})
		}
	}, [transitionTextBlock?.current])

	return (
		<div className='home page'>
			<div className='home-bg'>
				<div className='home-bg_wrapper'>
					<p className='home-bg_first'>
						FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
					</p >
				</div >
				<div className='home-bg_wrapper'>
					<p className='home-bg_second'>
						FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
					</p >
				</div >
			</div >
			<div className='home-left'>
				<a
					href={APP_ROUTE.WHERE}
					className='home-left_link'
				>
					where?
				</a >
			</div >
			<div className='home-center'>
				<h1
					className='home-center_name'
					ref={transitionTextBlock}
				>FULL-CYCLE EVENT AGENCY</h1 >
				<div className='home-center_circular'>
					<img
						src={Circle}
						alt='Circle'
						className='home-center_circular-img'
					/>
				</div >
			</div >
			<div className='home-bottom'>
				<a
					href={APP_ROUTE.WHO}
					className='home-bottom_link'
				>
					who?
				</a >
			</div >
			<div className='home-right'>
				<a
					href={APP_ROUTE.WHAT}
					className='home-right_link'
				>
					what?
				</a >
			</div >
		</div >
	)
}

export default Home