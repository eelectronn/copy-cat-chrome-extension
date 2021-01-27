import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import AddCircle from '@material-ui/icons/AddCircle'
import { motion } from 'framer-motion'

import CopyTextBox from './CopyTextBox'
import ModalForm from './ModalForm'
import {
    setChromeData,
    getChromeData
} from '../chromeApi/storage'

const CopyTextContainer = () => {
    const [showModal, setShowModal] = useState(false)
    const [textContent, setTextContent] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await getChromeData()
                setTextContent(data)
            }
            catch (e) {
                console.error(e)
            }
        })()
    })

    const handleCreate = async (newEntry) => {
        try {
            await setChromeData([...textContent, newEntry])
            setTextContent([...textContent, newEntry])
        }
        catch (e) {
            console.error(e)
        }
    }

	return (
	    <div>
            <ModalForm
                show={showModal} setShow={setShowModal} formHeading='Add New Text' saveData={handleCreate}
            />
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
                            <CopyTextBox title={content.title} text={content.text} />
                        </Col>
                    ))}
                </Row>
                <br/>
                <Row className='my-row justify-content-center' onClick={() => setShowModal(true)}>
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
        </div>
	)
}

export default CopyTextContainer