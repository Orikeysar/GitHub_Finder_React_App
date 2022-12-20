import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function User({ user: { login, avatar_url } }) {
  return (
    <div className="crd shadow-md compact-side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          {/* avatar start here */}
          <div className="avatar">
            <div className="rounded-full shadow-sm h-14">
              <img src={avatar_url} alt="Profile"></img>
            </div>
          </div>
        </div>
 {/* title */}
      <h1 className="card-title">{login}</h1>
      <Link
        className=" text-base-content text-opacity-40"
        to={`/user/${login}`}
      >Visit Profile</Link>

      </div>
     
    </div>
  );
}

User.PropType = {
    user: PropTypes.object.isRequired,
  };
export default User;
