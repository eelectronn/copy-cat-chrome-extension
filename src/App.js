import React from 'react'
import './App.css'

import CopyTextContainer from './components/CopyTextContainer'

function App() {
	const textContent = [
		{
			title: 'Text 1',
			text: 'This is text 1'
		},
		{
			title: 'Text number two is here. I am a little longer title here.',
			text: 'This is text 2'
		},
		{
			title: 'Text 3',
			text: 'This is text 3'
		},
		{
			title: 'This is text #4',
			text: 'This is text 4'
		},
		{
			title: 'Number five here',
			text: 'This is text 5'
		},
	]

	return (
		<div className='App'>
			<CopyTextContainer textContent={textContent} />
		</div>
	)
}

export default App
