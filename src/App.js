import React, { useCallback, useRef, useState } from "react";
import rem from "services/rem";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "globalStyles";
import { todos as data, id } from "data.json";
import Title from "components/Title";
import TodoInput from "components/TodoInput";
import TodoList from "components/TodoList";
import TodoControls from "components/TodoControls";
import useMode from "hooks/useMode";

const MainContainer = styled.div`
  max-width: ${rem(540)};
  margin: 0 auto;
`;
const TodosContainer = styled.div`
  background-color: ${({ theme }) => theme.listBg};
  border-radius: ${rem(5)};
`;

const App = () => {
  const [todos, setTodos] = useState(data);
  const [filter, setFilter] = useState("All");
  const nextId = useRef(id);
  const activeItems = todos?.filter((todo) => todo.state === "Active").length;
  const filteredTodos =
    filter !== "All" ? todos?.filter((todo) => todo.state === filter) : todos;

  const { checked, setChecked, theme } = useMode();

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleClick = (id) => {
    setTodos(
      todos.filter((todo) =>
        todo.id === id
          ? todo.state === "Active"
            ? (todo.state = "Completed")
            : (todo.state = "Active")
          : todo
      )
    );
  };

  const handleAdd = useCallback((title) => {
    console.log(nextId.current);
    const newTodo = {
      id: nextId.current,
      title,
      state: "Active",
    };
    nextId.current += 1;
    setTodos((todos) => todos.concat(newTodo));
  }, []);

  const handleRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <GlobalStyle />
        <Title checked={checked} setChecked={setChecked} />
        <TodoInput handleAdd={handleAdd} />
        <TodosContainer>
          <TodoList
            todos={filteredTodos}
            handleClick={handleClick}
            handleRemove={handleRemove}
          />
          <TodoControls
            activeItems={activeItems}
            handleFilter={handleFilter}
            filter={filter}
          />
        </TodosContainer>
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
