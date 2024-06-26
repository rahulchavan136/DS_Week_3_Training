import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'

const LoanCalculator = () => {
    const loanTypes = [{
        name: 'Personal Loan',
        rois: [10, 11, 12, 13, 14, 15, 16, 17, 18]
    }, {
        name: 'Home Loan',
        rois: [7, 8, 9, 10, 11]
    }, {
        name: 'Car Loan',
        rois: [7,8,9,10,11,12]
    }]

    const formFieldStyle = {
        display: 'flex', flexDirection: 'column', fontWeight: '600', alignItems: 'flex-start'
    }

    const [loanForm, setLoanForm] = useState({ loantype: '', amount: 0, tenure: 0, tenureType: 'year', roi: 0 })
    const [calculatedEMI, setCalculatedEMI] = useState(0)
    const [roiOptions, setRoiOptions] = useState([])

    useEffect(() => {
        if (loanForm.loantype) {
            const selectedLoan = loanTypes.find(loan => loan.name === loanForm.loantype)
            setRoiOptions(selectedLoan ? selectedLoan.rois : [])
        }
    }, [loanForm.loantype])

    const handleChange = (e) => {
        setLoanForm({ ...loanForm, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        const ROI = parseFloat(loanForm.roi)
        const monthlyROI = ROI / 12 / 100
        const principle = parseFloat(loanForm.amount)
        const tenure = loanForm.tenureType === 'year' ? parseFloat(loanForm.tenure) * 12 : parseFloat(loanForm.tenure)
        const EMI = (principle * monthlyROI * Math.pow((1 + monthlyROI), tenure)) / (Math.pow((1 + monthlyROI), tenure) - 1)
        setCalculatedEMI(EMI.toFixed(2))
    }

    return (
        <Container style={{ marginTop: '150px' }}>
            <h2 style={{textAlign:"center"}}> <strong>Loan Calculator</strong></h2> 
            <br />
            <Row>
                <Col lg={5} sm={12} style={{ border: '1px solid #c3c3c3', padding: '25px', borderRadius: '10px', margin: '0 15px' }}>
                    <div><b>Fill the details to calculate your Loan and EMI</b></div>
                    <br />
                    <Form >
                        <Form.Group className="mb-3" controlId="loan" style={formFieldStyle}>
                            <Form.Select aria-label="Loan Type" name="loantype" onChange={(e) => handleChange(e)}>
                                <option>Enter Loan Type</option>
                                {
                                    loanTypes.map((loan, index) => <option value={loan.name} key={index}>{loan.name}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="roi" style={formFieldStyle}>
                            <Form.Label>Rate of Interest</Form.Label>
                            <Form.Select aria-label="Rate of Interest" name="roi" onChange={(e) => handleChange(e)}>
                                <option>Select Rate of Interest</option>
                                {
                                    roiOptions.map((rate, index) => <option value={rate} key={index}>{rate}%</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="amount" style={formFieldStyle}>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="Loan Amount" name="amount" onChange={(e) => handleChange(e)} />
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="tenureType" style={formFieldStyle}>
                            <Form.Label>Tenure Type</Form.Label>
                            <Form.Select aria-label="Tenure Type" name="tenureType" onChange={(e) => handleChange(e)}>
                                <option value="year">Years</option>
                                <option value="month">Months</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tenure" style={formFieldStyle}>
                            <Form.Label>Tenure</Form.Label>
                            <Form.Control type="text" placeholder="Tenure" name="tenure" onChange={(e) => handleChange(e)} />
                        </Form.Group>
                        <Button onClick={handleClick}>Calculate</Button>
                    </Form>
                </Col>
                <Col lg={1} sm={12}></Col>
                <Col lg={5} sm={12} style={{ border: '1px solid #c3c3c3', padding: '25px', borderRadius: '10px', margin: '0 15px' }}>
                    <div>
                        <b>Here's how your repayments might look</b>
                    </div>
                    <br />
                    <Table striped bordered hover size="md">
                        <tbody>
                            <tr>
                                <td>Monthly Repayment</td>
                                <td>Rs. {parseInt(calculatedEMI)}</td>
                            </tr>
                            <tr>
                                <td>Interest Rate</td>
                                <td>{loanForm.amount && calculatedEMI ? loanForm.roi : 0}% p.a.</td>
                            </tr>
                            <tr>
                                <td>Interest</td>
                                <td>Rs. {loanForm.amount && calculatedEMI ? (calculatedEMI * (loanForm.tenureType === 'year' ? loanForm.tenure * 12 : loanForm.tenure) - parseFloat(loanForm.amount)).toFixed(2) : 0}</td>
                            </tr>
                            <tr>
                                <td>Total Outflow</td>
                                <td>Rs. {loanForm.amount && calculatedEMI ? (calculatedEMI * (loanForm.tenureType === 'year' ? loanForm.tenure * 12 : loanForm.tenure)).toFixed(2) : 0}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <br /><br />
        </Container>
    )
}

export default LoanCalculator
