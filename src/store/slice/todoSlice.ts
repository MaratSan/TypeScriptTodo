import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  list: Todo[];
};

const initialState: TodoState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTodo: Todo = {
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      };
      state.list = [newTodo, ...state.list];
    },
    
    toggleComplete(state, action: PayloadAction<string>) {
      const toggleTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggleTodo) {
        toggleTodo!.completed = !toggleTodo!.completed;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});


export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
