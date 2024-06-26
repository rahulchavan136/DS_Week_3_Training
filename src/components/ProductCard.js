import React, { useState } from 'react';
import { Card, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const ProductCard = ({ product, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(product.title);
    const [editedPrice, setEditedPrice] = useState(product.price);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/products/${product.id}`);
            onDelete(product.id); // Notify parent component of deletion
        } catch (error) {
            console.error('Error deleting product: ', error);
        }
    };

    const handleEdit = async () => {
        try {
            await axios.put(`http://localhost:5000/products/${product.id}`, {
                title: editedTitle,
                price: editedPrice,
            });
            setIsEditing(false); // Exit edit mode after successful edit
        } catch (error) {
            console.error('Error updating product: ', error);
        }
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
        // Reset edited values to current product values when exiting edit mode
        if (!isEditing) {
            setEditedTitle(product.title);
            setEditedPrice(product.price);
        }
    };

    return (
        <Card className="h-100">
            <Card.Body>
                <div>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Button variant="danger" onClick={handleDelete} className="mr-2">
                        Delete
                    </Button>
                    <Button variant="primary" onClick={toggleEdit}>
                        Edit
                    </Button>
                </div>
            </Card.Body>
            <Card.Img
                variant="top"
                src={product.image}
                style={{ objectFit: 'cover', height: '200px' }} // Adjust height as needed
            />
        </Card>
    );
};

export default ProductCard;
