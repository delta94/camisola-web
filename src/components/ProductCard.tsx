import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';
import defaultshirt from '../assets/defaultshirt.png';

interface IProps {
  id: string,
  name: string,
  price: number,
  image?: string,
  className?: string
}

const ProductCard = ({
  id, name, price, image = defaultshirt, className,
}: IProps) => {
  const history = useHistory();
  return (
    <Card
      className={className}
      style={{ width: '14rem', cursor: 'pointer' }}
      onClick={() => history.push(`/products/${id}`)}
    >
      <Card.Img variant="top" src={image} style={{ height: '10rem' }}/>
      <Card.Body>
        {name}
        <h5>€{price}</h5>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
