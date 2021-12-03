import axios from 'axios';
import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';
import Swal from 'sweetalert2';

const initialState = {
    recurso: '',
    id: ''
}

const WalkerForm = (props) => {

    const [inputs, setInputs] = useState(initialState);

    const actualizarValor = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const buscar = (e) => {
        e.preventDefault();
        const data = { ...inputs };

        if (data.recurso && data.id) {
            axios.get(`https://swapi.dev/api/${data.recurso}/${data.id}/`)
                .then(async resp => {
                    setInputs(initialState);
                    switch (data.recurso) {
                        case 'people':
                            props.setInfo({
                                type: 'people',
                                name: resp.data.name,
                                height: resp.data.height,
                                birth_year: resp.data.birth_year,
                                eye_color: resp.data.eye_color,
                                homeworld: await buscarHomeWorld(resp.data.homeworld)
                            });
                            break;
                        case 'films':
                            props.setInfo({
                                type: 'films',
                                title: resp.data.title,
                                director: resp.data.director,
                                producer: resp.data.producer,
                                opening_crawl: resp.data.opening_crawl,
                            });
                            break;
                        case 'planets':
                            props.setInfo({
                                type: 'planets',
                                name: resp.data.name,
                                gravity: resp.data.gravity,
                                orbital_period: resp.data.orbital_period,
                                population: resp.data.population,
                            });
                            break;
                        case 'species':
                            props.setInfo({
                                type: 'species',
                                name: resp.data.name,
                                language: resp.data.language,
                                designation: resp.data.designation,
                                skin_colors: resp.data.skin_colors,
                            });
                            break;
                        case 'starships':
                            props.setInfo({
                                type: 'starships',
                                name: resp.data.name,
                                model: resp.data.model,
                                consumables: resp.data.consumables,
                                manufacturer: resp.data.manufacturer
                            });
                            break;
                        default:
                            break;
                    }
                })
                .catch(error => {
                    Swal.fire({
                        text: 'Estos no son los droides que está buscando!',
                        imageUrl: 'https://e.rpp-noticias.io/normal/2021/03/29/291729_1075861.jpg',
                        imageHeight: 200,
                        imageAlt: 'ObiWan'
                    });
                });
        } else {
            Swal.fire('Error', `Debe seleccionar un recurso e ingresar un id`, 'error')
        }
    }

    const buscarHomeWorld = async (homeworld) => {
        try {
            const response = await axios.get(`${homeworld}`);
            return response.data.name;
        } catch (error) {
            Swal.fire({
                text: 'Estos no son los droides que está buscando!',
                imageUrl: 'https://e.rpp-noticias.io/normal/2021/03/29/291729_1075861.jpg',
                imageHeight: 200,
                imageAlt: 'ObiWan'
            });
            return null;
        }
    }

    return <Col md={{ offset: 3, size: 6 }} sm="12">
        <Form onSubmit={buscar}>
            <FormGroup >
                <Label htmlFor="recurso">Burcar por:</Label>
                <Input id="recurso" name="recurso" type="select" value={inputs.recurso} onChange={actualizarValor}>
                    <option value={'---'}>---</option>
                    <option value={'people'}>People</option>
                    <option value={'films'}>Film</option>
                    <option value={'planets'}>Planet</option>
                    <option value={'species'}>Species</option>
                    <option value={'starships'}>Starship</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="id">Id</Label>
                <Input id="id" name="id" type="text" value={inputs.id} onChange={actualizarValor} />
            </FormGroup>
            <Button type="submit">Buscar</Button>
        </Form>
    </Col>
}

export default WalkerForm;