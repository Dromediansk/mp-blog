import React, { useEffect } from 'react';

const GoogleFixedAds = ({ style }) => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return (
        <ins className="adsbygoogle"
            style={style}
            data-ad-client="ca-pub-4635184049553237"
        >
        </ins>
    );
}

export default GoogleFixedAds;