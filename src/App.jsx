import { useState } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import { Dialog } from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { SubHeading } from "./components/SubHeading";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { TextInput } from "./components/TextInput";
import { FormButton } from "./components/FormButton";
import { Form } from "./components/Form";

const initialTodos = [
  {
    id: 1,
    description: "JSX e componentes",
    completed: false,
    createdAt: "2022-10-31",
  },
  {
    id: 2,
    description: "Controle de inputs e formulários controlados",
    completed: true,
    createdAt: "2022-10-31",
  },
  {
    id: 3,
    description: "Rotas dinâmicas",
    completed: true,
    createdAt: "2022-10-31",
  },
];

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [todos, setTodos] = useState(initialTodos);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  const addTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      return [...prevState, todo];
    });
    toggleDialog();
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) =>
        t.id == todo.id ? { ...t, completed: !t.completed } : t,
      );
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos
              .filter((t) => t.completed == false)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    onToggleCompleted={toggleTodoCompleted}
                    onDeleteTodo={deleteTodo}
                  />
                );
              })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos
              .filter((t) => t.completed == true)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    onToggleCompleted={toggleTodoCompleted}
                    onDeleteTodo={deleteTodo}
                  />
                );
              })}
          </ToDoList>
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleDialog}>
              <Form className="form-save-item" onSubmit={addTodo}>
                <TextInput
                  placeholder="Digite o item que deseja adicionar"
                  name="description"
                  required
                />
                <FormButton>Salvar item</FormButton>
              </Form>
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
