import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const ModalForm = ({ setShow, values, formHeading, saveData }) => {
    const [title, setTitle] = useState(values ? values.title : '')
    const [text, setText] = useState(values ? values.text : '')

    const handleClose = () => {
        setShow(false)
    }

    const handleSave = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        else {
            saveData({
                title,
                text
            })
            setShow(false)
        }
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
                <Form onSubmit={handleSave}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>
                                Title
                            </Form.Label>
                            <Form.Control
                                required
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
                                required
                                as='textarea'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' variant='primary'>
                            Save
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default ModalForm