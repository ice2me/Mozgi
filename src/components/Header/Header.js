import React, { useEffect, useState } from 'react'
import HeaderDesktop from "./HeaderDesktop"
import HeaderMob from "./HeaderMob"

const Header = () => {
	const [countOffset, setCountOffset] = useState(0)
	const [loadingWind, setLoadingWind] = useState(false)
	const [toggleBurger, setToggleBurger] = useState(false)
	const windowUserWidth = window?.innerWidth

	useEffect(() => {
		window.onload = () => setLoadingWind(true)
	}, [])

	useEffect(() => {
		if (countOffset !== 100 && loadingWind !== false) {
			setTimeout(() => setCountOffset(countOffset + 1), 20)
		}
	}, [countOffset, loadingWind])

	return (
		<div className='header'>
			{
				windowUserWidth && windowUserWidth > 767
					?
					<HeaderDesktop countOffset={countOffset} />
					:
					<HeaderMob
						countOffset={countOffset}
						toggleBurger={toggleBurger}
						setToggleBurger={setToggleBurger}
					/>
			}
		</div >
	)
}

export default Header