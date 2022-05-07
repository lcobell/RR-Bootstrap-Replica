import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StoreListings = () => {
  return (
    <Container>
      <Row>
        <Col>Marianos</Col>
        <Col>
          <img src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/7/cf1e5d97-2c12-4adf-aafd-bdf944c6e654.png" />
        </Col>
      </Row>
      <Row>
        <Col>Tony's Fresh Market</Col>
        <Col>
          <img src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/60/7c3f91e9-a9cf-43cb-86fb-6d503b065af9.png"></img>
        </Col>
      </Row>
      <Row>
        <Col>Binny's</Col>
        <Col>
          <img src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/152/6786ead3-d45c-4614-a32d-35766143ada1.png" />
        </Col>
      </Row>
    </Container>
  );
};

export default StoreListings;
