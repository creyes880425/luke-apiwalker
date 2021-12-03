import { Card, CardBody, CardText, CardTitle, Col } from 'reactstrap';


const WalkerInfo = (props) => {

    return (
        <Col md={{ offset: 3, size: 6 }} sm="12">
            {props.info && (() => {
                switch (props.info.type) {
                    case 'people':
                        return <Card body color="light">
                            <CardBody>
                                <CardTitle tag="h4">{props.info.name}</CardTitle>
                                <CardText><span style={{ fontWeight: 'bold' }}>Height:</span> {props.info.height}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Birth Year:</span> {props.info.birth_year}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Eye Color:</span> {props.info.eye_color}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Homeworld:</span> {props.info.homeworld}</CardText>
                            </CardBody>
                        </Card>;
                    case 'films':
                        return <Card body color="light">
                            <CardBody>
                                <CardTitle tag="h4">{props.info.title}</CardTitle>
                                <CardText><span style={{ fontWeight: 'bold' }}>Director:</span> {props.info.director}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Producer:</span> {props.info.producer}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Opening Crawl:</span> {props.info.opening_crawl}</CardText>
                            </CardBody>
                        </Card>;
                    case 'planets':
                        return <Card body color="light">
                            <CardBody>
                                <CardTitle tag="h4">{props.info.name}</CardTitle>
                                <CardText><span style={{ fontWeight: 'bold' }}>Gravity:</span> {props.info.gravity}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Orbital Period:</span> {props.info.orbital_period}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Population:</span> {props.info.population}</CardText>
                            </CardBody>
                        </Card>;
                    case 'species':
                        return <Card body color="light">
                            <CardBody>
                                <CardTitle tag="h4">{props.info.name}</CardTitle>
                                <CardText><span style={{ fontWeight: 'bold' }}>Language:</span> {props.info.language}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Designation:</span> {props.info.designation}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Skin Colors:</span> {props.info.skin_colors}</CardText>
                            </CardBody>
                        </Card>;
                    case 'starships':
                        return <Card body color="light">
                            <CardBody>
                                <CardTitle tag="h4">{props.info.name}</CardTitle>
                                <CardText><span style={{ fontWeight: 'bold' }}>Model:</span> {props.info.model}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Consumables:</span> {props.info.consumables}</CardText>
                                <CardText><span style={{ fontWeight: 'bold' }}>Manufacturer:</span> {props.info.manufacturer}</CardText>
                            </CardBody>
                        </Card>;
                    default:
                        return null;
                }
            })()}
        </Col>
    )

}

export default WalkerInfo;