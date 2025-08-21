import React from 'react'

export default function Button({ children, style }) {
    return (
        <button className='orange-button' style={style}>{children}</button>
    )
}
