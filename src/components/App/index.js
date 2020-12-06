import { useContext, useEffect } from 'react'
import { GlobalContext } from 'context/GlobalContext'

import './App.sass'

import Header from 'components/Header'
import Map from 'components/Map'

const App = () => {
	const { getUserIP } = useContext(GlobalContext)
	
	// eslint-disable-next-line
	useEffect(() => {
		getUserIP()
		// eslint-disable-next-line
	}, [])

	return (
		<div className='App'>
			<Header />
			<Map />

			<div className='author__div'>
				<div>
					Challenge by <a href='https://frontendmentor.io'>Frontend Mentor</a>
				</div>
				<div>
					Coded by <a href='https://github.com/Werfit'>Werfit</a>
				</div>
			</div>
		</div>
	)
}

export default App
