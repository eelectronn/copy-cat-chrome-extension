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
    const [deleteClicked, setDeleteClicked] = useState(false)

    const handleEdit = (updatedEntry) => {
        handleUpdate({ title, text }, updatedEntry)
    }

    const handleDeleteClick = () => {
        if (!deleteClicked) {
            setDeleteClicked(true)
        }
        else {
            setDeleteClicked(false)
            handleDelete({ title, text })
        }
    }

    const handleMouseLeave = () => {
        setHovered(false)
        setDeleteClicked(false)
        setClicked(false)
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
                onMouseLeave={handleMouseLeave}
                className='d-flex h-100'
                style={{
                    backgroundColor: '#233546',
                    fontFamily: '\'Montserrat\', sans-serif',
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
                                onClick={() => setDeleteClicked(false)}
                                onMouseDown={() => setClicked(true)}
                                onMouseUp={() => setClicked(false)}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                }}
                            >
                                {title}
                            </div>
                        </CopyToClipboard>

                    </Col>
                    {
                        hovered && <Col
                        className='d-flex p-0 justify-content-center'
                        xs={2}
                        >
                            <Row
                                className='w-100'
                            >
                                <Col
                                    xs={12}
                                    className='d-flex p-1 justify-content-center align-items-center'
                                    onClick={() => setShowModal(true)}
                                >
                                    <Edit/>
                                </Col>
                                <Col
                                    xs={12}
                                    className='d-flex p-1 justify-content-center align-items-center'
                                    onClick={handleDeleteClick}
                                >
                                    <div
                                        style={{
                                            transform: deleteClicked ? 'scale(2.5)' : '',
                                            transition: 'transform .2s'
                                        }}
                                    >
                                        <Delete color={deleteClicked ? 'error' : 'inherit'} />
                                    </div>
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