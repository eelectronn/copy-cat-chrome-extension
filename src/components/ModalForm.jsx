import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const ModalForm = ({ setShow, values, formHeading, saveData }) => {
    const [title, setTitle] = useState(values ? values.title : '')
    const [text, setText] = useState(values ? values.text : '')

    const handleClose = () => {
        setShow(false)
    }

    const handleSave = () => {
        saveData({
            title,
            text
        })
        setShow(false)
    }

    return (
        <div>
            <Modal
                show={true}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{formHeading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Title
                            </Form.Label>
                            <Form.Control
                                type='text'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Text
                            </Form.Label>
                            <Form.Control
                                as='textarea'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalForm