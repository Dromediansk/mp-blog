import React, { useEffect } from 'react';

const GoogleAds = ({ slot }) => {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return (
        <ins className='adsbygoogle'
            style={{ display: 'block', padding: '1rem 0' }}
            data-ad-client="ca-pub-4635184049553237"
            data-ad-slot={slot}
            data-ad-format='auto'
            data-full-width-responsive="true"
        >
        </ins>
    )
}

export default GoogleAds;