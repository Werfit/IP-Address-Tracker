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
		</div>
	)
}

export default App
