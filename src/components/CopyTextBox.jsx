import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'
import { Row, Col } from 'react-bootstrap'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

import ModalForm from './ModalForm'

const CopyTextBox = ({ title, text, handleUpdate, handleDelete }) => {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleEdit = (updatedEntry) => {
        handleUpdate({ title, text }, updatedEntry)
    }

    return (
        <React.Fragment>
            {showModal && <ModalForm
                setShow={setShowModal}
                formHeading='Edit Item'
                values={{ title, text }}
                saveData={handleEdit}
            />}

            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseDown={() => setClicked(true)}
                onMouseUp={() => setClicked(false)}
                className='d-flex h-100'
                style={{
                    backgroundColor: '#233546',
                    minHeight: '80px',
                    borderRadius: '10px',
                    color: (clicked && hovered) ? '#ffa5a5' : hovered ? 'white' : '#ffa5a5',
                    transform: (clicked && hovered) ? 'scale(0.95)' : hovered ? 'scale(1.05)' : '',
                    transition: 'transform .2s',
                }}
            >
                <Row
                    className='w-100 m-0'
                >
                    <Col
                        className='d-flex align-items-center p-0'
                        xs={10}
                    >
                        <CopyToClipboard text={text}>
                            <div
                                className='d-flex align-items-center p-3'
                                style={{
                                    height: '100%',
                                    width: '100%',
                                }}
                            >
                                {title}
                            </div>
                        </CopyToClipboard>

                    </Col>
                    {hovered && <Col
                        className='d-flex p-0 justify-content-center'
                        xs={2}
                    >
                        <Row
                            className='w-100'
                        >
                            <Col
                                xs={12}
                                className='d-flex p-1 justify-content-center align-items-center'
                                style={{
                                    borderLeft: 'white solid 1px',
                                    borderBottom: 'white solid 1px'
                                }}
                                onClick={() => setShowModal(true)}
                            >
                                <Edit/>
                            </Col>
                            <Col
                                xs={12}
                                className='d-flex p-1 justify-content-center align-items-center'
                                style={{
                                    borderLeft: 'white solid 1px'
                                }}
                                onClick={() => handleDelete({ title, text })}
                            >
                                <Delete/>
                            </Col>
                        </Row>
                    </Col>
                    }
                </Row>
            </div>
        </React.Fragment>
    )
}

export default CopyTextBox