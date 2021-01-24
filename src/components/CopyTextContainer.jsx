import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import AddCircle from '@material-ui/icons/AddCircle'
import { motion } from 'framer-motion'

import CopyTextBox from './CopyTextBox'

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
			className='d-flex justify-content-center align-items-center flex-column'
			style={{
				height: '100vh',
			}}
		>
			<Row className='my-row justify-content-center'
                 style={{
                     width: '80%'
                 }}
            >
                {textContent.map((content, index) => (
                    <Col className='my-col py-2' lg={4} key={index}>
                        <CopyTextBox display={content.display} text={content.text} />
                    </Col>
                ))}
			</Row>
            <br/>
            <Row className='my-row justify-content-center'>
                <motion.div
                    className='col p-2 px-4'
                    whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                    whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                    style={{
                        backgroundColor: '#233546',
                        borderRadius: '10px'
                    }}
                >
                    <AddCircle
                        style={{
                            fontSize: 40,
                            color: 'white'
                        }}
                    />
                </motion.div>
            </Row>
		</Container>
	)
}

export default CopyTextContainer