import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const AddStudentForm = ({ onStudentAdded }) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [maths, setMaths] = useState('');
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/students');
        const students = response.data;
        
        if (students.length > 0) {
          const maxId = Math.max(...students.map(student => student.id));
          setNextId(maxId + 1);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const newStudent = {
      id: nextId,
      name,
      grade: parseInt(grade),
      marks: {
        maths: parseInt(maths),
        physics: parseInt(physics),
        chemistry: parseInt(chemistry),
      },
    };

    try {
      const response = await axios.post('http://localhost:5000/students', newStudent);
      onStudentAdded(response.data);

      setNextId(prevId => prevId + 1);
      setName('');
      setGrade('');
      setMaths('');
      setPhysics('');
      setChemistry('');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit} className="mb-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGrade">
            <Form.Label>Grade</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formMaths">
            <Form.Label>Maths Marks</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter maths marks"
              value={maths}
              onChange={(e) => setMaths(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formPhysics">
            <Form.Label>Physics Marks</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter physics marks"
              value={physics}
              onChange={(e) => setPhysics(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formChemistry">
            <Form.Label>Chemistry Marks</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter chemistry marks"
              value={chemistry}
              onChange={(e) => setChemistry(e.target.value)}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="primary" type="submit">
              Add Student
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddStudentForm;
