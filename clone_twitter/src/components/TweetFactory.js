import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const TweetFactory = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [attachment, setAttachment] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (event) => {
      const {
        currentTarget: { result },
      } = event;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onRemoveAttachment = () => setAttachment("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (tweet === "") {
      return;
    }

    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const tweetObj = {
      creatorId: userObj.uid,
      text: tweet,
      attachmentUrl,
      createdAt: Date.now(),
    };
    await dbService.collection("tweets").add(tweetObj);
    setTweet("");
    setAttachment("");
  };

  return (
    <form className="factoryForm" onSubmit={onSubmit}>
      <div className="factoryInput__container">
        <input
          className="factoryInput__input"
          type="text"
          value={tweet}
          maxLength={120}
          placeholder="What's on your mind?"
          onChange={onChange}
        />
        <input className="factoryInput__arrow" type="submit" value="&rarr;" />
      </div>
      <label className="factoryInput__label" for="attach-file">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{ opacity: 0 }}
      />
      {attachment && (
        <div className="factoryForm__remove" onClick={onRemoveAttachment}>
          <span>Remove</span>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      )}
    </form>
  );
};

export default TweetFactory;
