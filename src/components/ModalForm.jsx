import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const ModalForm = ({ show, setShow, values, formHeading }) => {
    const [title, setTitle] = useState(values ? values.title : '')
    const [text, setText] = useState(values ? values.text : '')

    const handleClose = () => {
        console.log('title: ', title)
        console.log('text: ', text)
        setTitle('')
        setText('')
        setShow(false)
    }

    const handleSave = () => {
        const newTitle = title
        const newText = text
        setTitle('')
        setText('')
        console.log('title: ', newTitle)
        console.log('text: ', newText)
        console.log('save action')
        setShow(false)
    }

    return (
        <div>
            <Modal
                show={show}
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
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Text
                            </Form.Label>
                            <Form.Control
                                as='textarea'
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