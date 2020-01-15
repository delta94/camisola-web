import React from 'react';
import {
  Button, Figure, Row, Col,
} from 'react-bootstrap';

function PreviewImages({
  images,
  handleFileUpload,
  handleOnDeleteImage,
  handleDefaultImageChanged,
  defaultImage,
}) {
  return (
    <div>
      <input className="m-t-sm" type="file" id="multi" onChange={handleFileUpload} multiple />
      {images.map((img) => (
        <div key={img.name}>
          <Row>
            <Col>
              <Figure>
                <Figure.Image width={256} src={img.url} />
              </Figure>
            </Col>
            <Col>
              <span className="m-r-sm">Imagem Padrao</span>
              <input className="m-r-sm" type="radio" onChange={() => handleDefaultImageChanged(img)} checked={img.url === defaultImage.url} />
              <Button variant="danger" type="button" onClick={() => handleOnDeleteImage(img)}>
                x
              </Button>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default PreviewImages;
