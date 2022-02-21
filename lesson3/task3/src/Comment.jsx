import React from "react";
import moment from "moment";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const formatDate = date => moment(date).format("DD MMM YYYY");

 const Comment = (props) => {
    return (
    <>
    <Avatar/>
            <div className="comment">
                <UserInfo user={props.UserInfo}/>
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
            </div>
    </>
  );
}

export default Comment;
