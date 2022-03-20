
import { createStore } from 'redux';

// Action
export const onAction=()=>{
    return {type:'ON'};
}
export const offAction=()=>{
    return {type:'OFF'};
}

// Reducer
export const reducerStatus=(state=0,action)=>{

    switch(action.type)
    {
        case "ON":
        return state=1;
        break;
        case "OFF":
        return state=0;
        break;
        
        default:
            return 0;
    }

}


