import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const LoanForm = ({ onAddLoan }) => {
    const [newLoanAmount, setNewLoanAmount] = useState('');
    const [fullName, setFullName] = useState('');
    const [selectedInterestRate, setSelectedInterestRate] = useState('');

    const handleAddLoan = () => {
        const newLoan = {
            amount: parseFloat(newLoanAmount),
            interestRate: parseFloat(selectedInterestRate),
            fullName: fullName,
        };
        onAddLoan(newLoan);
        setNewLoanAmount('');
        setSelectedInterestRate('');
        setFullName(''); // Reset full name
    };

    return (
        <Card className="mt-4">
            <Card.Header>
                <Card.Title className="mb-0">Add New Loan</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId="fullName">
                                <Form.Label>Your Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Enter Your Full Name"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="newLoanAmount">
                                <Form.Label>Loan Amount</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={newLoanAmount}
                                    onChange={(e) => setNewLoanAmount(e.target.value)}
                                    placeholder="Enter loan amount"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId="newLoanInterestRate">
                                <Form.Label>Interest Rate (%)</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={selectedInterestRate}
                                    onChange={(e) => setSelectedInterestRate(e.target.value)}
                                >
                                    <option value="">Select interest rate...</option>
                                    {[10, 11, 12, 13, 14, 15, 16, 17, 18].map(rate => (
                                        <option key={rate} value={rate}>{rate}%</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="success" onClick={handleAddLoan}> Add Loan </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default LoanForm;



// import React, { useState } from 'react';
// import { Card, Button, Form, Row, Col } from 'react-bootstrap';

// const LoanForm = ({ onAddLoan }) => {
//     const [newLoanAmount, setNewLoanAmount] = useState('');
//     const [fullName, setFullName] = useState('');

//     const [selectedInterestRate, setSelectedInterestRate] = useState('');

//     const handleAddLoan = () => {
//         const newLoan = {
//             amount: parseFloat(newLoanAmount),
//             interestRate: parseFloat(selectedInterestRate),
//         };
//         onAddLoan(newLoan);
//         setNewLoanAmount('');
//         setSelectedInterestRate('');
//     };

//     return (
//         <Card className="mt-4">
//             <Card.Header>
//                 <Card.Title className="mb-0">Add New Loan</Card.Title>
//             </Card.Header>
//             <Card.Body>
//                 <Form>
//                     <Row>
//                     <Col md={4}>
//                             <Form.Group controlId="newLoanAmount">
//                                 <Form.Label>Your Full Name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     value={fullName}
//                                     onChange={(e) => setFullName(e.target.value)}
//                                     placeholder="Enter Your Full Name"
//                                 />
//                             </Form.Group>
//                         </Col>
                     
//                         <Col md={4}>
//                             <Form.Group controlId="newLoanAmount">
//                                 <Form.Label>Loan Amount</Form.Label>
//                                 <Form.Control
//                                     type="number"
//                                     value={newLoanAmount}
//                                     onChange={(e) => setNewLoanAmount(e.target.value)}
//                                     placeholder="Enter loan amount"
//                                 />
//                             </Form.Group>
//                         </Col>
//                         <Col md={4}>
//                             <Form.Group controlId="newLoanInterestRate">
//                                 <Form.Label>Interest Rate (%)</Form.Label>
//                                 <Form.Control
//                                     as="select"
//                                     value={selectedInterestRate}
//                                     onChange={(e) => setSelectedInterestRate(e.target.value)}
//                                 >
//                                     <option value="">Select interest rate...</option>
//                                     {[10, 11, 12, 13, 14, 15, 16, 17, 18].map(rate => (
//                                         <option key={rate} value={rate}>{rate}%</option>
//                                     ))}
//                                 </Form.Control>
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Button variant="success" onClick={handleAddLoan} className="mt-3">
//                         Add Loan
//                     </Button>
//                 </Form>
//             </Card.Body>
//         </Card>
//     );
// };

// export default LoanForm;


// import React, { useState } from 'react';
// import { Card, Button, Form, Row, Col } from 'react-bootstrap';

// const LoanForm = ({ onAddLoan }) => {
//     const [newLoanAmount, setNewLoanAmount] = useState('');
//     const [newLoanInterestRate, setNewLoanInterestRate] = useState('');

//     const handleAddLoan = () => {
//         const newLoan = {
//             amount: parseFloat(newLoanAmount),
//             interestRate: parseFloat(newLoanInterestRate),
//         };
//         onAddLoan(newLoan);
//         setNewLoanAmount('');
//         setNewLoanInterestRate('');
//     };

//     return (
//         <Card className="mt-4">
//             <Card.Header>
//                 <Card.Title className="mb-0">Add New Loan</Card.Title>
//             </Card.Header>
//             <Card.Body>
//                 <Form>
//                     <Row>
//                         <Col md={6}>
//                             <Form.Group controlId="newLoanAmount">
//                                 <Form.Label>Loan Amount</Form.Label>
//                                 <Form.Control
//                                     type="number"
//                                     value={newLoanAmount}
//                                     onChange={(e) => setNewLoanAmount(e.target.value)}
//                                     placeholder="Enter loan amount"
//                                 />
//                             </Form.Group>
//                         </Col>
//                         <Col md={6}>
//                             <Form.Group controlId="newLoanInterestRate">
//                                 <Form.Label>Interest Rate (%)</Form.Label>
//                                 <Form.Control
//                                     type="number"
//                                     value={newLoanInterestRate}
//                                     onChange={(e) => setNewLoanInterestRate(e.target.value)}
//                                     placeholder="Enter interest rate"
//                                 />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Button variant="success" onClick={handleAddLoan} className="mt-3">
//                         Add Loan
//                     </Button>
//                 </Form>
//             </Card.Body>
//         </Card>
//     );
// };

// export default LoanForm;
