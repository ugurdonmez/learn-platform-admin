import { Card, Row, Col, Accordion, Button, Form } from 'react-bootstrap'
import Layout from '../components/Layout'


export default function Index() {




    return (
        <Layout>

            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Form>
                            <Form as={Row} controlId="formPlaintextEmail">
                                <Col sm="9">
                                    <Form.Control placeholder="Python'a giris" />
                                </Col>
                                <Col sm="3">
                                    <Button variant="primary" type="submit">
                                        Konu Ekle
                                    </Button>
                                </Col>
                            </Form>
                        </Form>
                    </Card.Header>
                </Card>
            </Accordion>
        </Layout>

    )
}