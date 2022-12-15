import { useState } from "react";
import { GithubUser } from "./GithubUser";
import { Link } from "react-router-dom";

export function GithubUserList() {
  const [userArray, setUserArray] = useState([]);
  const [user, setUser] = useState("");

  function handleInputChange(event) {
    setUser(event.target.value);
  }

  function handleBtnClick() {
    setUserArray([...userArray, user]);
  }

  return (
    <div>
      <div>
        <input onChange={handleInputChange} type="text" />
        <button onClick={handleBtnClick}>send</button>
      </div>
      {user.map((username, index) => {
        return (
          <div key={index}>
            <Link to={username}>{username}</Link>
          </div>
        );
      })}
      {/* {userArray.map((githubName)=> (<div> <GithubUser username={githubName}/> </div> ))} */}
    </div>
  );
}
