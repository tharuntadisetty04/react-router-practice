import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { uid } = useParams()
    return (
        <div className='text-center font-semibold text-xl p-4'>User : {uid}</div>
    )
}

export default User