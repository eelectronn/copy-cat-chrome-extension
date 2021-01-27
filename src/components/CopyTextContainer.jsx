import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import AddButton from './AddButton'

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

    const handleUpdate = async (oldEntry, newEntry) => {
        const newData = textContent.map((elem) => {
            if(elem.title === oldEntry.title) return newEntry
            return elem
        })
        try {
            await setChromeData(newData)
            setTextContent(newData)
        }
        catch (e) {
            console.error(e)
        }
    }

    const handleDelete = async (entry) => {
        const newData = textContent.filter((elem) => {
            return elem.title !== entry.title
        })
        try {
            await setChromeData(newData)
            setTextContent(newData)
        }
        catch (e) {
            console.error(e)
        }
    }

	return (
	    <div>
            {showModal && <ModalForm
                setShow={setShowModal}
                formHeading='Add New Text'
                saveData={handleCreate}
            />}
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
                            <CopyTextBox
                                title={content.title}
                                text={content.text}
                                handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                            />
                        </Col>
                    ))}
                </Row>
                <br/>
                <Row className='my-row justify-content-center' onClick={() => setShowModal(true)}>
                    <AddButton />
                </Row>
            </Container>
        </div>
	)
}

export default CopyTextContainer