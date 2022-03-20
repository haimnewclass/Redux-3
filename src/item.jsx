
import { useDispatch,useSelector } from "react-redux";
import {AddOneCharAction} from './reducerCounter';

export const Item=()=>{
    const dispachNow = useDispatch();
    let counter = useSelector(s=>s.counter);
    return <div>Item

        <button onClick={()=>{
            // dispatch
            dispachNow(AddOneCharAction());
        }}>+</button>

        Updated:{counter}
    </div>;
}