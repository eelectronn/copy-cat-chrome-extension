import React from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'
import { Row, Col } from 'react-bootstrap'

const CopyTextBox = ({ display, text }) => {

    return (
        <CopyToClipboard text={text}>
            <div
                className='d-flex h-100'
                style={{
                    backgroundColor: '#233546',
                    minHeight: '50px',
                    borderRadius: '10px',
                }}
            >
                <Row
                    className='w-100 m-0'
                    style={{
                        color: 'white',
                    }}
                >
                    <Col
                        className='d-flex align-items-center'
                        xs={8}
                        s={8}
                        style={{
                            // backgroundColor: 'pink'
                        }}
                    >
                        <div
                            className='p-2'
                            style={{
                                // backgroundColor: 'blue'
                            }}
                        >
                            {display}
                        </div>

                    </Col>
                    <Col
                        className='d-flex'
                        xs={4}
                        s={4}
                        style={{
                            // backgroundColor: 'blue'
                        }}
                    >
                        <Row
                            style={{
                                // backgroundColor: 'pink'
                            }}
                        >
                            <Col
                                xs={12}
                                className='d-flex align-items-center'
                                style={{
                                    borderLeft: 'white solid 1px',
                                    borderBottom: 'white solid 1px'
                                }}
                            >
                                <div
                                    className='p-1'
                                    style={{
                                        width: '100%',
                                        textAlign: 'center'
                                    }}
                                >
                                    edit
                                </div>
                            </Col>
                            <Col
                                xs={12}
                                className='d-flex align-items-center'
                                style={{
                                    borderLeft: 'white solid 1px'
                                }}
                            >
                                <div
                                    className='p-1'
                                    style={{

                                        width: '100%',
                                        textAlign: 'center'
                                    }}
                                >
                                    delete
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </CopyToClipboard>
    )
}

CopyTextBox.propTypes = {
    display: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CopyTextBox