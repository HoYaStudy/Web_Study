import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "fbase";

export default ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  return (
    <div className="container">
      <form className="profileForm" onSubmit={onSubmit}>
        <input
          className="formInput"
          type="text"
          value={newDisplayName}
          placeholder="Display name"
          autoFocus
          onChange={onChange}
        />
        <input
          className="formBtn"
          type="submit"
          value="Update Profile"
          style={{ marginTop: 10 }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};
