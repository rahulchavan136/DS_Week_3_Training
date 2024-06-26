import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoanForm from './LoanForm';
import LoanList from './LoanList';
import PaymentForm from './PaymentForm';
import LoanDetails from './LoanDetails';

const LoanPaymentSystem = () => {
    const [loans, setLoans] = useState([]);

    const handleAddLoan = (newLoan) => {
        const loanId = loans.length + 1; // Generate a simple ID (for demo purposes)
        const interestAmount = newLoan.amount * (newLoan.interestRate / 100);
        const totalLoanAmount = newLoan.amount + interestAmount;
        const updatedLoan = { 
            ...newLoan, 
            id: loanId, 
            payments: [], 
            totalPaid: 0, 
            interestAmount, 
            totalLoanAmount 
        };
        setLoans([...loans, updatedLoan]);
    };

    const handleAddPayment = (loanId, paymentAmount) => {
        const updatedLoans = loans.map(loan => {
            if (loan.id === loanId) {
                const paymentId = loan.payments.length + 1; // Generate payment ID
                const newPayment = { id: paymentId, amount: paymentAmount, date: new Date().toLocaleDateString() };
                const updatedPayments = [...loan.payments, newPayment];
                const totalPaid = loan.totalPaid + paymentAmount;
                return { ...loan, payments: updatedPayments, totalPaid };
            }
            return loan;
        });
        setLoans(updatedLoans);
    };

    const handleDeletePayment = (loanId, paymentId) => {
        const updatedLoans = loans.map(loan => {
            if (loan.id === loanId) {
                const updatedPayments = loan.payments.filter(payment => payment.id !== paymentId);
                const totalPaid = updatedPayments.reduce((acc, payment) => acc + payment.amount, 0);
                return { ...loan, payments: updatedPayments, totalPaid };
            }
            return loan;
        });
        setLoans(updatedLoans);
    };

    return (
        <Container style={{marginTop:"9rem"}}>
            <h1 className="text-center mb-4">Personal Loan</h1>
            <Row>
                <Col md={12}>
                    <LoanForm onAddLoan={handleAddLoan} />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <LoanList loans={loans} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <PaymentForm loans={loans} onAddPayment={handleAddPayment} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    {loans.map(loan => (
                        <LoanDetails  key={loan.id} loan={loan} onDeletePayment={handleDeletePayment}  loans={loans}/>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default LoanPaymentSystem;



// import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import LoanForm from './LoanForm';
// import LoanList from './LoanList';
// import PaymentForm from './PaymentForm';
// import LoanDetails from './LoanDetails';

// const LoanPaymentSystem = () => {
//     const [loans, setLoans] = useState([]);

//     const handleAddLoan = (newLoan) => {
//         const loanId = loans.length + 1; // Generate a simple ID (for demo purposes)
//         const interestAmount = newLoan.amount * (newLoan.interestRate / 100);
//         const totalLoanAmount = newLoan.amount + interestAmount;
//         const updatedLoan = { 
//             ...newLoan, 
//             id: loanId, 
//             payments: [], 
//             totalPaid: 0, 
//             interestAmount, 
//             totalLoanAmount 
//         };
//         setLoans([...loans, updatedLoan]);
//     };

//     const handleAddPayment = (loanId, paymentAmount) => {
//         const updatedLoans = loans.map(loan => {
//             if (loan.id === loanId) {
//                 const paymentId = loan.payments.length + 1; // Generate payment ID
//                 const newPayment = { id: paymentId, amount: paymentAmount, date: new Date().toLocaleDateString() };
//                 const updatedPayments = [...loan.payments, newPayment];
//                 const totalPaid = loan.totalPaid + paymentAmount;
//                 return { ...loan, payments: updatedPayments, totalPaid };
//             }
//             return loan;
//         });
//         setLoans(updatedLoans);
//     };

//     const handleDeletePayment = (loanId, paymentId) => {
//         const updatedLoans = loans.map(loan => {
//             if (loan.id === loanId) {
//                 const updatedPayments = loan.payments.filter(payment => payment.id !== paymentId);
//                 const totalPaid = updatedPayments.reduce((acc, payment) => acc + payment.amount, 0);
//                 return { ...loan, payments: updatedPayments, totalPaid };
//             }
//             return loan;
//         });
//         setLoans(updatedLoans);
//     };

//     return (
//         <Container style={{marginTop:"9rem"}}>
//             <h1 className="text-center mb-4">Personal Loan</h1>
//             <Row>
//                 <Col md={12}>
//                     <LoanForm onAddLoan={handleAddLoan} />
//                 </Col>
//             </Row>
//             <Row>
//             <Col md={12}>
//                     <LoanList loans={loans} />
//                 </Col>
//             </Row>
//             <Row className="mt-4">
//                 <Col>
//                     <PaymentForm loans={loans} onAddPayment={handleAddPayment} />
//                 </Col>
//             </Row>
//             <Row className="mt-4">
//                 <Col>
//                     {loans.map(loan => (
//                         <LoanDetails key={loan.id} loan={loan} onDeletePayment={handleDeletePayment} />
//                     ))}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default LoanPaymentSystem;




// // import React, { useState } from 'react';
// // import { Container, Row, Col } from 'react-bootstrap';
// // import LoanForm from './LoanForm';
// // import LoanList from './LoanList';
// // import PaymentForm from './PaymentForm';
// // import LoanDetails from './LoanDetails';

// // const LoanPaymentSystem = () => {
// //     const [loans, setLoans] = useState([]);

// //     // const handleAddLoan = (newLoan) => {
// //     //     const loanId = loans.length + 1; // ====> Generate a simple ID (for demo purposes)
// //     //     const updatedLoan = { ...newLoan, id: loanId, payments: [], totalPaid: 0 };
// //     //     setLoans([...loans, updatedLoan]);
// //     // };


// //     const handleAddLoan = (newLoan) => {
// //         const loanId = loans.length + 1; 
// //         const interestAmount = newLoan.amount * (newLoan.interestRate / 100);
// //         console.log(interestAmount,"interestAmount");

// //         const totalLoanAmount = newLoan.amount + interestAmount;
// //         const updatedLoan = { 
// //             ...newLoan, 
// //             id: loanId, 
// //             payments: [], 
// //             totalPaid: 0, 
// //             interestAmount, 
// //             totalLoanAmount 
// //         };
// //         setLoans([...loans, updatedLoan]);
// //     };

    
// //     const handleAddPayment = (loanId, paymentAmount) => {
// //         const updatedLoans = loans.map(loan => {
// //             if (loan.id === loanId) {
// //                 const paymentId = loan.payments.length + 1; // ===> Generate payment ID
// //                 const newPayment = { id: paymentId, amount: paymentAmount, date: new Date().toLocaleDateString() };
// //                 const updatedPayments = [...loan.payments, newPayment];
// //                 const totalPaid = loan.totalPaid + paymentAmount;
// //                 return { ...loan, payments: updatedPayments, totalPaid };
// //             }
// //             return loan;
// //         });
// //         setLoans(updatedLoans);
// //     };

// //     const handleDeletePayment = (loanId, paymentId) => {
// //         const updatedLoans = loans.map(loan => {
// //             if (loan.id === loanId) {
// //                 const updatedPayments = loan.payments.filter(payment => payment.id !== paymentId);
// //                 const totalPaid = updatedPayments.reduce((acc, payment) => acc + payment.amount, 0);
// //                 return { ...loan, payments: updatedPayments, totalPaid };
// //             }
// //             return loan;
// //         });
// //         setLoans(updatedLoans);
// //     };

// //     return (
// //         <Container style={{marginTop:"9rem"}}>
// //             <h1 className="text-center mb-4">Personal Loan</h1>
// //             <Row>
// //                 <Col md={4}>
// //                     <LoanForm onAddLoan={handleAddLoan} />
// //                 </Col>
// //                 <Col md={8}>
// //                     <LoanList loans={loans} />
// //                 </Col>
// //             </Row>
// //             <Row className="mt-4">
// //                 <Col>
// //                     <PaymentForm loans={loans} onAddPayment={handleAddPayment} />
// //                 </Col>
// //             </Row>
// //             <Row className="mt-4">
// //                 <Col>
// //                     {loans.map(loan => (
// //                         <LoanDetails key={loan.id} loan={loan} onDeletePayment={handleDeletePayment} />
// //                     ))}
// //                 </Col>
// //             </Row>
// //         </Container>
// //     );
// // };

// // export default LoanPaymentSystem;
