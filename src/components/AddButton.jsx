import React, { useState } from 'react'
import AddCircle from '@material-ui/icons/AddCircle'

const AddButton = () => {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)

    return (
        <div
            className='col p-2 px-4'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseDown={() => setClicked(true)}
            onMouseUp={() => setClicked(false)}
            style={{
                backgroundColor: '#233546',
                borderRadius: '10px',
                color: (clicked && hovered) ? '#ffa5a5' : hovered ? 'white' : '#ffa5a5',
                transform: (clicked && hovered) ? 'scale(0.95)' : hovered ? 'scale(1.05)' : '',
                transition: 'transform .2s',
            }}
        >
            <AddCircle
                style={{
                    fontSize: 40,
                }}
            />
        </div>
    )
}

export default AddButton