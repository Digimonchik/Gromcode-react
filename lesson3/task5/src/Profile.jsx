import React from 'react'
import moment from 'moment'; 


const Profile = (props) => {
    console.log(props.user)
    return <div className='container'>
    <div className='profile__name'>
        {`${props.user.firstName} ${props.user.lastName}`}
    </div>
    <div className='profile__birth'>
            {`Was born ${moment(props.user.birthDate).format('DD MMM YY')} in ${props.user.birthPlace}`}
        </div>
        </div>
}

export default Profile