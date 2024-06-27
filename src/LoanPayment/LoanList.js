import React from 'react';
import { Card, Table } from 'react-bootstrap';

const LoanList = ({ loans }) => {
    
    return (
        <Card className="mt-4">
            <Card.Header>
                <Card.Title className="mb-0">Loan List</Card.Title>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Contact</th>
                            <th>Loan Amt</th>
                            <th>ROT (%)</th>
                            <th>Interest Amt</th>
                            <th>Total Loan Amt</th>
                            <th>Total Paid</th>
                            <th>Pending Amt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loans.map(loan => (
                            <tr key={loan.id}>
                                <td>{loan.id}</td>
                                <td>{loan.fullName}</td>
                                <td>{loan.userEmail}</td>
                                <td>{loan.userContactNumber}</td>
                                <td>${loan.amount.toFixed(2)}</td>
                                <td>{loan.interestRate}%</td>
                                <td>${loan.interestAmount.toFixed(2)}</td>
                                <td>${loan.totalLoanAmount.toFixed(2)}</td>
                                <td>${loan.totalPaid.toFixed(2)}</td>
                                <td>${(loan.totalLoanAmount - loan.totalPaid).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default LoanList;



// import React from 'react';
// import { Card, Table } from 'react-bootstrap';

// const LoanList = ({ loans }) => {
//     return (
//         <Card className="mt-4">
//             <Card.Header>
//                 <Card.Title className="mb-0">Loan List</Card.Title>
//             </Card.Header>
//             <Card.Body>
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Loan ID</th>
//                             <th>Loan Amount</th>
//                             <th>Interest Rate</th>
//                             <th>Interest Amount</th>
//                             <th>Total Loan Amount</th>
//                             <th>Total Paid</th>
//                             <th>Remaining Amount</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {loans.map(loan => (
//                             <tr key={loan.id}>
//                                 <td>{loan.id}</td>
//                                 <td>${loan.amount.toFixed(2)}</td>
//                                 <td>{loan.interestRate}%</td>
//                                 <td>${loan.interestAmount.toFixed(2)}</td>
//                                 <td>${loan.totalLoanAmount.toFixed(2)}</td>
//                                 <td>${loan.totalPaid.toFixed(2)}</td>
//                                 <td>${(loan.totalLoanAmount - loan.totalPaid).toFixed(2)}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </Card.Body>
//         </Card>
//     );
// };

// export default LoanList;



// // import React from 'react';
// // import { Card, Table } from 'react-bootstrap';

// // const LoanList = ({ loans }) => {
// //     return (
// //         <Card className="mt-4">
// //             <Card.Header>
// //                 <Card.Title className="mb-0">Loan List</Card.Title>
// //             </Card.Header>
// //             <Card.Body>
// //                 <Table striped bordered hover>
// //                     <thead>
// //                         <tr>
// //                             <th>Loan ID</th>
// //                             <th>Loan Amount</th>
// //                             <th>Total Paid</th>
// //                             <th>Remaining Amount</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {loans.map(loan => (
// //                             <tr key={loan.id}>
// //                                 <td>{loan.id}</td>
// //                                 <td>${loan.amount.toFixed(2)}</td>
// //                                 <td>${loan.totalPaid.toFixed(2)}</td>
// //                                 <td>${(loan.amount - loan.totalPaid).toFixed(2)}</td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </Table>
// //             </Card.Body>
// //         </Card>
// //     );
// // };

// // export default LoanList;
