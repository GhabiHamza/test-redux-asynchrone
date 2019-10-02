import React,{Component} from 'react';
import {connect} from 'react-redux'
import  PostItem from'../components/postItem'
import {getPosts} from '../actions/actions'


class PostList extends Component {
  
    componentDidMount(){
        this.props.getPosts()
            
        }
    render(){
       const {posts}=this.props
        return ( 
            <div>
                {posts.filter(post => String(post.userId) === this.props.match.params.id).map((post)=><PostItem post={post} key={post.id}/>)}
                
            </div>
             );
}
}
const mapStateToProps=state=>{
    return{
        posts:state.ReducerPost
    }
}
 
export default connect(mapStateToProps,{getPosts})(PostList);


