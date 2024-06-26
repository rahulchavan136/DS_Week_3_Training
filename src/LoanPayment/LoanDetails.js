import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';
import { format } from 'date-fns';

const LoanDetails = ({ loan, onDeletePayment }) => {
    const getCurrentSystemTime = () => {
        return format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    };

    const totalPaidAmount = loan.payments.reduce((total, payment) => total + payment.amount, 0);
    const remainingAmount = loan.totalLoanAmount - totalPaidAmount;

    return (
        <>
            <Card className="mt-4">
                <Card.Header>
                    <Card.Title> Personal Loan Payment History</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>Application Loan ID:</strong> {loan.id}
                    </Card.Text>
                    <Card.Text>
                        <strong>Original Amount:</strong> ${loan.amount.toFixed(2)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Interest Rate:</strong> {loan.interestRate}%
                    </Card.Text>
                    <Card.Text>
                        <strong>Interest Amount:</strong> ${loan.interestAmount.toFixed(2)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Total Loan Amount:</strong> ${loan.totalLoanAmount.toFixed(2)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Total Paid:</strong> ${totalPaidAmount.toFixed(2)}
                    </Card.Text>
                    <Card.Text>
                        <strong>Remaining Amount:</strong> ${remainingAmount.toFixed(2)}
                    </Card.Text>
                    <Table striped bordered hover size="sm" className="mt-2">
                        <thead>
                            <tr>
                                <th>Payment ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loan.payments.map(payment => (
                                <tr key={payment.id}>
                                    <td>{payment.id}</td>
                                    <td>${payment.amount.toFixed(2)}</td>
                                    <td>{getCurrentSystemTime()}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => onDeletePayment(loan.id, payment.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="3" className="text-right"><strong>Total Paid Amount:</strong></td>
                                <td>${totalPaidAmount.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="text-right"><strong>Remaining Amount:</strong></td>
                                <td>${remainingAmount.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
};

export default LoanDetails;


// import React from 'react';
// import { Card, Table, Button } from 'react-bootstrap';
// import { format } from 'date-fns';

// const LoanDetails = ({ loan, onDeletePayment }) => {
//     const getCurrentSystemTime = () => {
//         return format(new Date(), 'yyyy-MM-dd HH:mm:ss');
//     };

//     // ===> Calculate total paid amount
//     const totalPaidAmount = loan.payments.reduce((total, payment) => total + payment.amount, 0);
//     // ===> Calculate remaining amount
//     const remainingAmount = loan.amount - totalPaidAmount;

//     return (
//         <Card className="mt-4">
//             <Card.Header>
//                 <Card.Title>Loan Payment History Details</Card.Title>
//             </Card.Header>
//             <Card.Body>
//                 <Card.Text>
//                     <strong>Loan ID:</strong> {loan.id}
//                 </Card.Text>
//                 <Card.Text>
//                     <strong>Amount:</strong> ${loan.amount.toFixed(2)}
//                 </Card.Text>
//                 <Card.Text>
//                     <strong>Total Paid:</strong> ${totalPaidAmount.toFixed(2)}
//                 </Card.Text>
//                 <Card.Text>
//                     <strong>Remaining Amount:</strong> ${remainingAmount.toFixed(2)}
//                 </Card.Text>
//                 <Table striped bordered hover size="sm" className="mt-2">
//                     <thead>
//                         <tr>
//                             <th>Payment ID</th>
//                             <th>Amount</th>
//                             <th>Date</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {loan.payments.map(payment => (
//                             <tr key={payment.id}>
//                                 <td>{payment.id}</td>
//                                 <td>${payment.amount.toFixed(2)}</td>
//                                 <td>{getCurrentSystemTime()}</td>
//                                 <td>
//                                     <Button
//                                         variant="danger"
//                                         size="sm"
//                                         onClick={() => onDeletePayment(loan.id, payment.id)}
//                                     >
//                                         Delete
//                                     </Button>
//                                 </td>
//                             </tr>
//                         ))}
//                          <tr>
//                             <td colSpan="3" className="text-right"><strong>Total Paid Amount:</strong></td>
//                             <td>${totalPaidAmount.toFixed(2)}</td>
//                         </tr>
//                         <tr>
//                             <td colSpan="3" className="text-right"><strong>Remaining Amount:</strong></td>
//                             <td>${remainingAmount.toFixed(2)}</td>
//                         </tr>
//                     </tbody>
//                 </Table>
//             </Card.Body>
//         </Card>
//     );
// };

// export default LoanDetails;
