import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newProductTitle, setNewProductTitle] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/products/${productId}`);
            const updatedProducts = products.filter(product => product.id !== productId);
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Error deleting product: ', error);
        }
    };

    const handleAdd = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const handleShowAddModal = () => {
        setShowAddModal(true);
    };

    const handleCloseAddModal = () => {
        setShowAddModal(false);
        // Reset form fields when modal is closed
        setNewProductTitle('');
        setNewProductPrice('');
    };

    const handleAddProduct = async () => {
        try {
            const response = await axios.post('http://localhost:5000/products', {
                title: newProductTitle,
                price: newProductPrice,
                image: 'https://via.placeholder.com/150', // Placeholder image URL
            });
            handleAdd(response.data);
            setShowAddModal(false); // Close modal after successful addition
        } catch (error) {
            console.error('Error adding product: ', error);
        }
    };

    return (
        <Container>
            <h1 className="mt-4 mb-4">Products</h1>
            <Button variant="success" onClick={handleShowAddModal} className="mb-2">
                Add Product
            </Button>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={3}>
                        <ProductCard product={product} onDelete={handleDelete} />
                    </Col>
                ))}
            </Row>

            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="newProductTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={newProductTitle}
                            onChange={(e) => setNewProductTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="newProductPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            value={newProductPrice}
                            onChange={(e) => setNewProductPrice(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAddProduct}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Product;
