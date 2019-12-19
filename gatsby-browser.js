import { Refresh } from 'styled-icons/material/Refresh'

export const onServiceWorkerUpdateReady = () => {
    const showNotification = () => {
        Notification.requestPermission(result => {
            const reload = () => {
                window.location.reload(true);
            }
            if (result === 'granted') {
                navigator.serviceWorker.ready.then(registration => {
                    registration.showNotification('Update', {
                        body: 'New version is available!',
                        icon: Refresh,
                        vibrate: [200, 100, 200, 100, 200, 100, 400],
                        tag: 'request',
                        actions: [
                            {
                                action: reload(),
                                title: 'Update'
                            }
                        ]
                    })
                })
            }
        })
    }

    showNotification()
}