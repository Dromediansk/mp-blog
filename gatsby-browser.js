import React from 'react'

export const onServiceWorkerUpdateReady = () => {
    const update = () => {
        window.location.reload()
    }
    return <div>
        <span>New version of app is available</span>
        <button onClick={update}>Update</button>
    </div>
}