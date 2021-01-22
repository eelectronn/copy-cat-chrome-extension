import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

const CopyTextContainer = () => {
    const textContent = [
        {
            display: 'Text 1',
            text: 'This is text 1'
        },
        {
            display: 'Text number two is here. I am a little longer display here.',
            text: 'This is text 2'
        },
        {
            display: 'Text 3',
            text: 'This is text 3'
        },
        {
            display: 'This is text #4',
            text: 'This is text 4'
        },
        {
            display: 'Number five here',
            text: 'This is text 5'
        },
    ]

	return (
	    <Container
			className='d-flex justify-content-center align-items-center'
			style={{
				height: '100vh',
			}}
		>
			<Row className='my-row justify-content-center'>
                {textContent.map((content, index) => (
                    <Col className='my-col' lg={4} key={index}>
                        {content.display}
                    </Col>
                ))}
			</Row>
		</Container>
	)
}

export default CopyTextContainer