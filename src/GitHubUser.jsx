import React, { useState, useEffect } from "react";

const GitHubUser = ({ username }) => {
  // https://api.github.com/users/username

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const responseData = await response.json();
        setUser(responseData);
        setLoading(false);
        console.log(responseData);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="github-user">
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {user && (
      <ul className="details">
        <li>
            <img src={user.avatar_url} alt={user.login}></img>
        </li>
        <li>
            <strong>Name:</strong> {user.name}
        </li>
        <li>
            <strong>Bio:</strong> {user.bio? user.bio: "NA"}
        </li>
        <li>
            <strong>Location:</strong> {user.location? user.location:"NA"}
        </li>
        <li>
            <strong>Blog or Site:</strong> {user.blog?user.blog:"NA"}
        </li>
        <li>
            <strong>Followers:</strong> {user.followers?user.followers:"NA"}
        </li>
        <li>
            <strong>Following:</strong> {user.following?user.following:"NA"}
        </li>
      </ul>
      )}
    </div>
  );
};

export default GitHubUser;
