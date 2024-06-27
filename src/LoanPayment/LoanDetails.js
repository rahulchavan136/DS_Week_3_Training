import React from 'react';
import { Card, Table, Row, Col, Button } from 'react-bootstrap';
import { format } from 'date-fns';
import { BsFileExcel, BsFilePdf } from 'react-icons/bs';

const LoanDetails = ({ loan, onDeletePayment }) => {
    const getCurrentSystemTime = () => {
        return format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    };

    const generateTransactionId = () => {
        const prefix = 'TXN'; // You can customize the prefix as needed
        const randomNumber = Math.floor(Math.random() * 1000000); // Generate a random number
        return `${prefix}${randomNumber}`;
    };

    const totalPaidAmount = loan.payments.reduce((total, payment) => total + payment.amount, 0);
    const remainingAmount = loan.totalLoanAmount - totalPaidAmount;

    const exportToExcel = () => {

    }

    const exportToPDF = () => {

    }
    return (
        <>
            <Card className="mt-4">
            <Card.Header>
            <Card.Title>Personal Loan Payment History</Card.Title>
            </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>Application Loan ID:</strong> {loan.id}
                    </Card.Text>
                    <Row>
                        <Col md={4}>
                            <Card.Text>
                                <strong>User Full Name:</strong> {loan.fullName}
                            </Card.Text>
                        </Col>
                        <Col md={4}>
                            <Card.Text>
                                <strong>User Email:</strong> {loan.userEmail}
                            </Card.Text>
                        </Col>
                        <Col md={4}>
                            <Card.Text>
                                <strong>User Contact Number:</strong> {loan.userContactNumber}
                            </Card.Text>
                        </Col>
                    </Row><br />

                    <Row>
                        <Col md={4}>
                            <Card.Text>
                                <strong>Original Amount:</strong> ${loan.amount.toFixed(2)}
                            </Card.Text>
                        </Col>
                        <Col md={4}>
                            <Card.Text>
                                <strong>Interest Rate:</strong> {loan.interestRate}%
                            </Card.Text>
                        </Col>
                        <Col md={4}>
                            <Card.Text>
                                <strong>Interest Amount:</strong> ${loan.interestAmount.toFixed(2)}
                            </Card.Text>
                        </Col>
                    </Row><br />

                    <Row>
                        <Col md={4}>
                            <Card.Text>
                                <strong>Total Loan Amount:</strong> ${loan.totalLoanAmount.toFixed(2)}
                            </Card.Text>
                        </Col>
                        <Col md={4}>
                            <Card.Text>
                                <strong>Total Paid:</strong> ${totalPaidAmount.toFixed(2)}
                            </Card.Text>
                        </Col>
                        <Col md={4}>
                            <Card.Text>
                                <strong>Remaining Amount:</strong> ${remainingAmount.toFixed(2)}
                            </Card.Text>
                        </Col>
                    </Row><br />

                    <Table striped bordered hover size="sm" className="mt-2">
                        <thead>
                            <tr>
                                <th>Transactions ID</th>
                                <th>Loan ID</th>
                                <th>Paid Amount</th>
                                <th>Date</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {loan.payments.map(payment => (
                                <tr key={payment.id}>
                                    <td>{generateTransactionId()}</td>
                                    <td>{loan.id}</td>
                                    <td>${payment.amount.toFixed(2)}</td>
                                    <td>{getCurrentSystemTime()}</td>
                                    {/* <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => onDeletePayment(loan.id, payment.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td> */}
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="3" className="text-right"><strong>Total Paid Amount:</strong></td>
                                <td><strong>${totalPaidAmount.toFixed(2)}</strong></td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="text-right"><strong>Remaining Amount:</strong></td>
                                <td><strong>${remainingAmount.toFixed(2)}</strong></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
};

export default LoanDetails;

