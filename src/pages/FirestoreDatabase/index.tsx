import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Stack,
  Form,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../libs/firebase-config";

const Index = () => {
  const [todoText, setTodoText] = useState<any>("");
  const [todoList, setTodoList] = useState<any>([]);

  const postCollectionRef = collection(db, "todo");

  const onManageToDo = async () => {
    try {
      const data = await addDoc(postCollectionRef, { todoText });
      setTodoList((previousValue: any) => [
        ...previousValue,
        { id: data?.id, todoText },
      ]);
    } catch (e: any) {
      console.error(e);
    }
  };

  const onEditToDo = (editTodo: any) => {};

  const onDeleteToDo = async (deleteId: any) => {
    try {
      const deleteToDoDoc = doc(db, "todo", deleteId);
      await deleteDoc(deleteToDoDoc);
      setTodoList((priviousList: any) =>
        priviousList.filter(({ id }: any) => id !== deleteId)
      );
    } catch (e: any) {
      console.error(e);
    }
  };

  useEffect(() => {
    try {
      const getToDos = async () => {
        const data = await getDocs(postCollectionRef);
        console.log(data);
        setTodoList(
          data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
        );
      };
      getToDos();
    } catch (e: any) {
      console.error(e);
    }
  }, []);

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
        <Button variant="secondary" onClick={onManageToDo}>
          Submit
        </Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>

      <ListGroup>
        {todoList.map((todo: any) => {
          return (
            <ListGroup.Item key={todo?.id}>
              <Stack direction="horizontal" gap={3}>
                <div className="me-auto">{todo?.todoText}</div>
                <ButtonGroup size="sm">
                  <Button
                    variant="outline-secondary"
                    onClick={() => onEditToDo(todo)}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => onDeleteToDo(todo?.id)}
                    variant="outline-danger"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </Stack>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
};
export default Index;
