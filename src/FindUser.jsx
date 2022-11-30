import React, {useState} from 'react';
import GitHubUser from "./GitHubUser"

const FindUser = () => {
    const[userName, setUserName] = useState("")
  return (
    <div className="find-user">
      <h1>Find user</h1>
      <form>
        <div className="form-group">
            <label htmlFor='username'></label>
            <input type="text" placeholder='Enter Username'
            onChange={(event)=>setUserName(event.target.value)}></input>
        </div>
      </form>
      <div className="result">
        {userName ?
        <GitHubUser username={userName}></GitHubUser>:
        <p>Please Initiate a search!!!</p>
        }
      </div>
    </div>
  )
}

export default FindUser
