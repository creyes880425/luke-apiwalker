import React, { useState } from 'react';
import WalkerForm from './form';
import WalkerInfo from './info';


export const Home = () => {

    const [info, setInfo] = useState({})

    return (
        <>
            <WalkerForm info={info} setInfo={setInfo} />
            <br />
            <WalkerInfo info={info} />
        </>
    )
}
