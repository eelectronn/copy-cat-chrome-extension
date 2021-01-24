import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'
import { Row, Col } from 'react-bootstrap'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

const CopyTextBox = ({ title, text }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <CopyToClipboard text={text}>
            <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className='d-flex h-100'
                style={{
                    backgroundColor: '#233546',
                    minHeight: '50px',
                    borderRadius: '10px',
                    color: 'white'
                }}
            >
                <Row
                    className='w-100 m-0'
                >
                    <Col
                        className='d-flex align-items-center p-3'
                        xs={10}
                    >
                        {title}

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
                            >
                                <Edit/>
                            </Col>
                            <Col
                                xs={12}
                                className='d-flex p-1 justify-content-center align-items-center'
                                style={{
                                    borderLeft: 'white solid 1px'
                                }}
                            >
                                <Delete/>
                            </Col>
                        </Row>
                    </Col>
                    }
                </Row>
            </motion.div>
        </CopyToClipboard>
    )
}

CopyTextBox.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CopyTextBox