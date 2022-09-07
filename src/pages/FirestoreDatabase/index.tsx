import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Stack,
  Form,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../libs/firebase-config";

const Index = () => {
  const [todoText, setTodoText] = useState<any>("");
  const [todoList, setTodoList] = useState<any>([]);

  const postCollectionRef = collection(db, "todo");

  const createToDo = async () => {
    await addDoc(postCollectionRef, { todoText });
  };

  useEffect(() => {
    const getToDos = async () => {
      const data = await getDocs(postCollectionRef);
      setTodoList(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    };
    // getToDos();
  });

  return (
    <Container style={{ maxWidth: "500px" }} className="pt-2" fluid>
      <h1 className="text-center mb-4">To Do List</h1>
      <Stack direction="horizontal" gap={3} className="mb-4">
        <Form.Control
          value={todoText}
          onChange={(event: any) => {
            setTodoText(event?.target?.value);
          }}
          className="me-auto"
          placeholder="Add your to do..."
        />
        <Button variant="secondary" onClick={createToDo}>
          Submit
        </Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>

      <ListGroup>
        <ListGroup.Item className="text-right">
          <Stack direction="horizontal" gap={3}>
            <div className="me-auto">dsds</div>
            <ButtonGroup size="sm">
              <Button variant="outline-secondary" onClick={createToDo}>
                Edit
              </Button>
              <Button variant="outline-danger">Delete</Button>
            </ButtonGroup>
          </Stack>
        </ListGroup.Item>
        <ListGroup.Item>ABC</ListGroup.Item>
        {todoList.map((todo: any) => {
          return (
            <ListGroup.Item key={todo?.id}>{todo?.todoText}</ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
};
export default Index;
