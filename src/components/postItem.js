import React, { Component } from 'react';
import {Card, CardText, CardBody,
CardTitle, Button
} from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class PostItem extends Component {

    render() {
        const {post} = this.props
        return (<div>
            <Card>
        <CardBody>
          <CardTitle>{post.title}</CardTitle>
          <CardText>{post.body}</CardText>
          <Link to={`/posts/${post.id}`} >
          <Button><i class="fal fa-comment-exclamation"></i></Button>
          </Link>
        </CardBody>
      </Card>


        </div>  );
    }
}
 const mapStateToProps=state=>{
    return{
        posts:state.ReducerPost
    }
}
export default connect(mapStateToProps)(PostItem);