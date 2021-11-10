import { Form, Row, Col, Button } from "react-bootstrap"
import { AUTH_FILTER_OPTIONS, CORS_FILTER_OPTIONS, HTTPS_FILTER_OPTIONS } from "../utils/constants";

const ApisTableFilters = ({onAuthFilter, onHttpsFilter, onCorsFilter, onUpdateFilters, onNameFilter, onDescriptionFilter, onCategoryFilter}) => {

    const updateData = e => {
        e.preventDefault();
        onUpdateFilters();
    }

    return (
        <div className="p-2">
            <Form>
                <Row className="py-2">
                    {/* AUTH */}
                    <Col>
                        <Form.Group>
                            <Form.Label>Auth</Form.Label>
                                <Form.Select onChange={e => onAuthFilter(e.target.value)}>
                                    <option></option>
                                    <option value={AUTH_FILTER_OPTIONS.API_KEY}>{AUTH_FILTER_OPTIONS.API_KEY}</option>
                                    <option value={AUTH_FILTER_OPTIONS.NULL}>{AUTH_FILTER_OPTIONS.NULL}</option>
                                </Form.Select>
                            </Form.Group>
                    </Col>

                    {/* HTTPS */}

                    <Col>
                        <Form.Group>
                            <Form.Label>HTTPS</Form.Label>
                                <Form.Select onChange={e => onHttpsFilter(e.target.value)}>
                                    <option></option>
                                    <option value={HTTPS_FILTER_OPTIONS.TRUE}>{HTTPS_FILTER_OPTIONS.TRUE}</option>
                                    <option value={HTTPS_FILTER_OPTIONS.FALSE}>{HTTPS_FILTER_OPTIONS.FALSE}</option>
                                </Form.Select>
                            </Form.Group>
                    </Col>

                    {/* CORS */}
                    <Col>
                        <Form.Group>
                            <Form.Label>CORS</Form.Label>
                                <Form.Select onChange={e => onCorsFilter(e.target.value)}>
                                    <option></option>
                                    <option value={CORS_FILTER_OPTIONS.YES}>{CORS_FILTER_OPTIONS.YES}</option>
                                    <option value={CORS_FILTER_OPTIONS.NO}>{CORS_FILTER_OPTIONS.NO}</option>
                                    <option value={CORS_FILTER_OPTIONS.UNKNOWN}>{CORS_FILTER_OPTIONS.UNKNOWN}</option>
                                </Form.Select>
                            </Form.Group>
                    </Col>

                    {/* Name */}
                    <Col>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" onChange={e => onNameFilter(e.target.value)}/>
                    </Col>

                    {/* Description */}
                    <Col>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" onChange={e => onDescriptionFilter(e.target.value)}/>
                    </Col>

                    {/* Category */}
                    <Col>
                        <Form.Label>Category:</Form.Label>
                        <Form.Control type="text" onChange={e => onCategoryFilter(e.target.value)}/>
                    </Col>
                    
                </Row>
                <Row className="py-2">
                    <Col>
                        <Button className="btn yellow-bg" type="submit" onClick={e => updateData(e)}>Update</Button>
                    </Col>
                </Row>
            </Form>
        </div>
        
    );
}

export default ApisTableFilters;