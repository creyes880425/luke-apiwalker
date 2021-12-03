import React, { useState } from 'react'
import { Container } from 'reactstrap'
import WalkerForm from './form'
import WalkerInfo from './info'


export const Home = () => {

    const [info, setInfo] = useState({})

    return (
        <Container>
            <h1>Home</h1>
            <WalkerForm info={info} setInfo={setInfo}/>
            <br/>
            <WalkerInfo info={info}/>
        </Container>
    )
}
