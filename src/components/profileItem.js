import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import {Link} from 'react-router-dom'
  


class ProfileItem extends Component {
    state = {  }
    
    render() { 
        const {user}=this.props
        return ( <div>
            <Card>
        {/* <CardImg top width="100%" src={user.img} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{user.name}</CardTitle>
          <CardSubtitle>{user.username}</CardSubtitle>
          <CardText>{user.email}</CardText>
          <Link to={`/users/${user.id}`} >
          <Button>See Posts</Button>
          </Link>
        </CardBody>
      </Card>

        </div>  );
    }
}
 
export default ProfileItem;