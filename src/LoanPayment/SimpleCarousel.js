import React from 'react';
import { Carousel } from 'react-bootstrap';
import ss1 from '../ss1.jpg';
import sl1 from '../sl1.jpg';
import ss2 from '../ss2.jpg';
import ss4 from '../ss4.jpg';

const SimpleCarousel = () => {
    return (
        <>
        <br /><br /><br /><br /><br />
        <Carousel>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ss4}
                    // src="https://via.placeholder.com/800x400.png?text=First+Slide"
                    alt="First slide"
                    />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ss1}
                    // src="https://via.placeholder.com/800x400.png?text=First+Slide"
                    alt="First slide"
                    />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sl1}
                    // src="https://via.placeholder.com/800x400.png?text=Second+Slide"
                    alt="Second slide"
                    />
                <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                    {/* <p>Lorem ipsum dolor si/t amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ss2}
                    // src="https://via.placeholder.com/800x400.png?text=Third+Slide"
                    alt="Third slide"
                    />
                <Carousel.Caption>
                    {/* <h3>Third slide label</h3> */}
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
                    </>
    );
};

export default SimpleCarousel;
