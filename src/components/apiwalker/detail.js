import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardText, CardTitle, Col } from 'reactstrap';
import Swal from 'sweetalert2';

export const Detail = () => {

    const { id } = useParams();
    const [people, setPeople] = useState({});

    const navigate = useNavigate();

    const volver = () => {
        navigate('/')
    }

    useEffect(() => {
        if (id) {
            axios.get(`https://swapi.dev/api/people/${id}/`)
                .then(resp => {
                    setPeople({
                        type: 'people',
                        name: resp.data.name,
                        height: resp.data.height,
                        birth_year: resp.data.birth_year,
                        eye_color: resp.data.eye_color,
                    });
                })
                .catch(error => {
                    Swal.fire({
                        text: 'Estos no son los droides que está buscando!',
                        imageUrl: 'https://e.rpp-noticias.io/normal/2021/03/29/291729_1075861.jpg',
                        imageHeight: 200,
                        imageAlt: 'ObiWan'
                    });
                });
        }
    }, [id])

    return <Col md={{ offset: 3, size: 6 }} sm="12">
        <Card body color="light">
            <CardBody>
                <CardTitle tag="h4">{people.name}</CardTitle>
                <CardText><span style={{ fontWeight: 'bold' }}>Height:</span> {people.height}</CardText>
                <CardText><span style={{ fontWeight: 'bold' }}>Birth Year:</span> {people.birth_year}</CardText>
                <CardText><span style={{ fontWeight: 'bold' }}>Eye Color:</span> {people.eye_color}</CardText>
                <Button onClick={volver}>
                    Volver
                </Button>
            </CardBody>
        </Card>
    </Col>
        ;
}
