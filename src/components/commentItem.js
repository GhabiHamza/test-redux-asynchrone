import React, { Component } from 'react';
import {connect} from 'react-redux'


class CommentItem extends Component {
   
    
    render() { 
        const {comment}=this.props
        return ( <div>
            <h1>{comment.name}</h1>
            <p>{comment.body}</p>

        </div> );
    }
}
const mapStateToProps=state=>{
    return{
    comments:state.ReducerComment
    }
}
export default connect(mapStateToProps)(CommentItem);