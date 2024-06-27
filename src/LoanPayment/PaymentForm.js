import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const PaymentForm = ({ loans, onAddPayment }) => {
    const [selectedLoanId, setSelectedLoanId] = useState('');
    const [newPaymentAmount, setNewPaymentAmount] = useState('');

    const handleAddPayment = () => {
        const loanId = parseInt(selectedLoanId);
        const paymentAmount = parseFloat(newPaymentAmount);
        onAddPayment(loanId, paymentAmount);
        setNewPaymentAmount('');
    };
    

    return (
        <Card className="mt-4">
            <Card.Header>
                <Card.Title className="mb-0">Make Payment</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId="selectLoan">
                                <Form.Label>Select Loan</Form.Label><br />
                                <select style={{padding:"6px", paddingRight:"200px",border:"0.3px solid gray", borderRadius:"5px"}}
                                    as="select"
                                    value={selectedLoanId}
                                    onChange={(e) => setSelectedLoanId(e.target.value)}
                                >
                                    <option value="">Select a loan...</option>
                                    {loans.map(loan => (
                                        <option key={loan.id} value={loan.id}>
                                            Loan ID: {loan.id} (${loan.amount.toFixed(2)})
                                        </option>
                                    ))}
                                </select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="paymentAmount">
                                <Form.Label>Payment Amount</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={newPaymentAmount}
                                    onChange={(e) => setNewPaymentAmount(e.target.value)}
                                    placeholder="Enter payment amount"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            {/* <Form.Group controlId="paymentAmount">
                                <Form.Label>Payment Amount</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={newPaymentAmount}
                                    onChange={(e) => setNewPaymentAmount(e.target.value)}
                                    placeholder="Enter payment amount"
                                />
                            </Form.Group> */}
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="success" onClick={handleAddPayment}>
                            Add Payment
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default PaymentForm;
