import {Get_Comments} from '../actions/types'
  const ReducerComment=(state=[],action)=>{
      switch(action.type){
        case Get_Comments:
          return [
            ...state,
            ...action.comments
          ]
        default:
            return state
      }
  }
  export default ReducerComment;