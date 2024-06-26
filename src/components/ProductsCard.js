import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import AddStudentForm from './AddStudentForm';

const ProductsCard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleStudentAdded = (newStudent) => {
    // Update students state to include the new student
    setStudents([...students, newStudent]);
  };

  return (
    <Container>
      {/* AddStudentForm component */}<br />
      <AddStudentForm onStudentAdded={handleStudentAdded} />
      <hr />

      {/* Table to display students */}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Maths Marks</th>
            <th>Physics Marks</th>
            <th>Chemistry Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.marks.maths}</td>
              <td>{student.marks.physics}</td>
              <td>{student.marks.chemistry}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductsCard;
