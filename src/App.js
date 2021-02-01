import React from 'react'
import './App.css'

import CopyTextContainer from './components/CopyTextContainer'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
	return (
		<div className='App'>
			<Header />
			<CopyTextContainer />
			<Footer />
		</div>
	)
}

export default App
