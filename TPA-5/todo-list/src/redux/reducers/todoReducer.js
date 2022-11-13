import { ADD_TODO, DELETE_TODO, UPDATE_CHECK, UPDATE_TODO } from "../actions/todoAction";

const initialState = [
  {
    id: 1,
    title: "Makan",
    completed: true,
  },
  {
    id: 2,
    title: "Tidur",
    completed: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      const filterData = state.filter((todo) => todo.id != action.payload);
      return filterData;

    case UPDATE_CHECK:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;
    
    case UPDATE_TODO:
      let data = action.payload
      let updateTodo = [];

      state.map((item) => {
        if (item.id === data.id){
          item.id = data.id
          item.title = data.title
          item.completed = data.completed
        }
        updateTodo.push(item)
      })
      return updateTodo

    default:
      return state;
  }
};

export default todoReducer;
