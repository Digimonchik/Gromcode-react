import React from "react";
import moment from "moment";
import UserInfo from "./UserInfo";

const formatDate = date => moment(date).format("DD MMM YYYY");

const Comment = (props) => {
   console.log(props)
    const element = (
      <>
        <div className="comment">
          <UserInfo user={props.user} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
            </div>
    </>
   );
   return element
}

export default Comment;
