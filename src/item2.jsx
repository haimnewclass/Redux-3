
import { useDispatch,useSelector } from "react-redux";
import {AddOneCharAction} from './reducerCounter';

export const Item2=()=>{
    
    let counter = useSelector(s=>s.counter);
    
    return <div>Item2    
        Updated:{counter} Item2
    </div>;
}