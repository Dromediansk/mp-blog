exports.onServiceWorkerUpdateReady = () => {
    if (
        window.confirm(
            "MP blog has been updated. Please refresh the page to get the newest version."
        )
    ) {
        window.location.reload(true);
    }
};