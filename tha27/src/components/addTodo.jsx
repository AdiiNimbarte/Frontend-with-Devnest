import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/index"
import "../styles/output.css"
const AddTodo = () => {
    const [item, setItem] = useState("");
    const dispatch = useDispatch();
    return (
        <div >
            <input className="w-3/6 appearance-none bg-transparent border-2 inline text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring focus:border-blue-300 rounded" 
             type="text" placeholder="Add TO Do..."
                value={item}
                onChange={(e) => {
                    setItem(e.target.value);
                }} />
            <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => {
                dispatch(addItem({ title: item, done: false }));
                setItem("")
            }}>Add</button>
        </div>
    )
}
export default AddTodo;