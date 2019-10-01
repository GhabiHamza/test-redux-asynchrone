import {Get_Users,Get_Posts,Get_Comments, Get_User,} from './types'
import axios from 'axios'


export const getUser =()=>dispatch=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then(res=>res.data)
         .then(users=>dispatch({
             type:Get_Users,
             users
         }))
}
export const getPosts =()=>dispatch=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(res=>res.data)
         .then(posts=>dispatch({
             type:Get_Posts,
             posts
         }))
}
export const getComments =()=>dispatch=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
         .then(res=>res.data)
         .then(comments=>dispatch({
             type:Get_Comments,
             comments
             
         }))
}






