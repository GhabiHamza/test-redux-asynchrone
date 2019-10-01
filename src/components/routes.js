import React from 'react';

import {Route} from 'react-router-dom'
import ProfileList from '../components/profileList'
import PostList from '../components/postList'
import CommentList from '../components/commentList'

const Routes = () => {
    return ( <div>
        <Route exact path='/' component={ProfileList}/>
        <Route exact path='/users/:id' component={PostList}/>
        <Route exact path='/posts/:id' component={CommentList}/>
    </div> );
}
 
export default Routes;

