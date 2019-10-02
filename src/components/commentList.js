import React from 'react';
import {connect} from 'react-redux'
import CommentItem from '../components/commentItem'
import {getComments} from '../actions/actions'



class CommentList extends React.Component{
   
    componentDidMount(){
        this.props.getComments()
        
        }
    render(){
    return ( <div>
        {this.props.comments.filter(comment => String(comment.postId) === this.props.match.params.id).map((comment)=><CommentItem comment={comment} key={comment.id}/>)}
    </div> );
}
}
 const mapStateToProps=state=>{
     return{
     comments:state.ReducerComment
     }
 }
export default connect(mapStateToProps,{getComments})(CommentList);