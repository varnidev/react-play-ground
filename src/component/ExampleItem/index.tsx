import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

interface ExampleItemProps {
  item: Array<any>;
}

const Index = (props: ExampleItemProps) => {
  const { item }: any = props;
  return (
    <Nav.Link
      as={Link}
      to={item?.link}
      style={{ minWidth: "16rem", width: "16rem" }}
      className="m-2 flex-grow-1 cursor-pointer"
    >
      <Card>
        <Card.Body>
          <Card.Title>{item?.title}</Card.Title>
          <Card.Text>{item?.description}</Card.Text>
        </Card.Body>
      </Card>
    </Nav.Link>
  );
};
export default Index;
