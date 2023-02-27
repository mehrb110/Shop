import { createSlice } from '@reduxjs/toolkit';

let id = 0;

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos_list: [],
    factorItem: [],
  },
  reducers: {
    addFactorItem: (state, action) => {
      console.warn('state action addTodo:');
      console.warn(state);
      console.warn(action);
      state.factorItem = [...state.factorItem, {id: ++id, factorItem: action.payload.factorItem}];
    },    
    addTodo: (state, action) => {
      console.warn('state action addTodo:');
      console.warn(state);
      console.warn(action);
      state.todos_list = [...state.todos_list, {id: ++id, task: action.payload.task}];
    },
    deleteTodo: (state, action) => {
      state.todos_list = [...state.todos_list.filter(todo => todo.id != action.payload)];
    },
  },
});

export const { addTodo, addFactorItem, deleteTodo } = todoSlice.actions;

export const selectTodos = state => state.todos_list;
export const selectFactors = state => state.factorItem;

export default todoSlice.reducer;
