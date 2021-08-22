import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import {removeItem} from '../actions/index'; 
import "../styles/output.css";



const ListTodo = () => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    return (
        <div className="bg-blue-100 w-4/6 m-auto rounded py-4 my-4">
            {todos.map((todo, index) => (
                <div className=" relative bg-white m-auto shadow-md rounded w-3/6 px-8 pt-4 pb-5 mb-1">
                  <p class="text-xl text-left text-green-600 list inline-block">{todo.title}</p>
                  <button
                  class="absolute my-auto right-0  bg-red-500  hover:bg-red-600 text-white font-bold py-2 px-2 border-b-4 border-red-700 hover:border-red-500 rounded"
                  onClick={() => {
                      dispatch(removeItem(index))
                  }}>DELETE</button>
                  
                </div>
            ))}
        </div>
    );
};  

export default ListTodo;