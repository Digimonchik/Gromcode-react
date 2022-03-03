import React from 'react'
import moment from 'moment'; 


const Profile = (props) => {
    console.log(props.user)
    return <div className='profile'>
        {`${props.user.firstName} ${props.user.lastName} Was born ${moment(props.user.birthDate).format('DD MMM YY')} in ${props.user.birthPlace}`}
    </div>
}

export default Profile