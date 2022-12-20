import React from "react";
import { useContext } from "react";
import Spiner from "../layout/assset/Spiner";
import User from "./User";
import GithubContext from "../../Context/github/GitHubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {/* אחרי שהתחבר לשרת במשכנו את כל המשתנים מGithubContext */}
        {/* עובר על המערך משתמשים של הגיט ומחזיר אחד אחד בכרטיס משלו */}
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spiner />;
  }
}

export default UserResults;
