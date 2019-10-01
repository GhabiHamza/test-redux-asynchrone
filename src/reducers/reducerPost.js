
import {Get_Posts} from '../actions/types'



  const ReducerPost=(state=[],action)=>{
      switch(action.type){
        case Get_Posts:
          return [
            ...state,
            ...action.posts
          ]
        default:
            return state
      }
  }
  export default ReducerPost;