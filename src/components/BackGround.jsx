import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BackGround = () => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
        alt="Fruit"
      />
      <Card.ImgOverlay
        style={{
          color: "black",
          display: "block",
          height: "5vh",
          width: "100%",
        }}
      >
        <Card.Title style={{ color: "black" }}>
          Order Groceries for delivery or pick up today
        </Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default BackGround;
