import React from 'react';
import ProfileItem from '../components/profileItem'
import { getUser } from '../actions/actions'
import {connect} from 'react-redux'







class ProfileList extends React.Component {
    
    componentDidMount(){
        this.props.getUser()
            
        }

    render(){
        const {users}=this.props
    return ( <div>
        {users.map((user)=><ProfileItem user={user} key={user.id}/>)}
        
    </div> );
}
}
 const mapStateToProps=state=>{
     return{
     users:state.ReducerProfile
     }
 }
export default connect(mapStateToProps,{getUser})(ProfileList);