import { Card, CardBody, CardText, CardTitle } from 'reactstrap';


const WalkerInfo = (props) => {

    return (
        <>
            {props.info && (() => {
                switch (props.info.type) {
                    case 'people':
                        return <Card body color="light">
                            <CardBody>
                                <CardTitle tag="h4">{props.info.name}</CardTitle>
                                <CardText>
                                    <p><span style={{ fontWeight: 'bold' }}>Height:</span> {props.info.height}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Birth Year:</span> {props.info.birth_year}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Eye Color:</span> {props.info.eye_color}</p>
                                </CardText>
                            </CardBody>
                        </Card>;
                    case 'films':
                        return <Card body color="light">
                            <CardBody>
                                <CardTitle tag="h4">{props.info.title}</CardTitle>
                                <CardText>
                                    <p><span style={{ fontWeight: 'bold' }}>Director:</span> {props.info.director}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Producer:</span> {props.info.producer}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Opening Crawl:</span> {props.info.opening_crawl}</p>
                                </CardText>
                            </CardBody>
                        </Card>;
                    case 'planets':
                        return <Card body color="light">
                            <CardBody>
                                <CardTitle tag="h4">{props.info.name}</CardTitle>
                                <CardText>
                                    <p><span style={{ fontWeight: 'bold' }}>Gravity:</span> {props.info.gravity}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Orbital Period:</span> {props.info.orbital_period}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Population:</span> {props.info.population}</p>
                                </CardText>
                            </CardBody>
                        </Card>;
                    case 'species':
                        return <Card body color="light">
                            <CardBody>
                                <CardTitle tag="h4">{props.info.name}</CardTitle>
                                <CardText>
                                    <p><span style={{ fontWeight: 'bold' }}>Language:</span> {props.info.language}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Designation:</span> {props.info.designation}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Skin Colors:</span> {props.info.skin_colors}</p>
                                </CardText>
                            </CardBody>
                        </Card>;
                    case 'starships':
                        return <Card body color="light">
                            <CardBody>
                                <CardTitle tag="h4">{props.info.name}</CardTitle>
                                <CardText>
                                    <p><span style={{ fontWeight: 'bold' }}>Model:</span> {props.info.model}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Consumables:</span> {props.info.consumables}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Manufacturer:</span> {props.info.manufacturer}</p>
                                </CardText>
                            </CardBody>
                        </Card>;
                    default:
                        return null;
                }
            })()}
        </>
    )

}

export default WalkerInfo;