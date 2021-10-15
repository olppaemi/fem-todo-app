import styled from "styled-components";
import { rem } from "styles/utils";
import { TodoItem } from "./TodoItem/styles";
import { TodosControl } from "./TodosControl/styles";

export const TodosPanel = styled.div`
  width: 100%;
  border-radius: ${rem(5)};

  ${TodoItem}:first-child {
    border-top-left-radius: ${rem(5)};
    border-top-right-radius: ${rem(5)};
  }

  ${TodosControl} {
    border-bottom-left-radius: ${rem(5)};
    border-bottom-right-radius: ${rem(5)};
  }
`;

export const Todos = styled.div`
  max-height: ${rem(452)};
  overflow-y: auto;
`;
