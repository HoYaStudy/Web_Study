import React, { useState, useEffect } from "react";
import { dbService } from "../../fbConfig";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import Item from "./Item";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 350px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  padding-left: 6px;
`;

const Submit = styled.input`
  outline: none;
  width: 20%;
  height: 28px;
  border: none;
  color: white;
  background-color: #ffa726;
  &:active {
    background-color: #f57c00;
  }
`;

const Database = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    dbService.collection("items").onSnapshot((snapshot) => {
      const itemArray = snapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }));
      setItems(itemArray);
    });
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "input") {
      setNewItem(value);
    }
  };

  const onInput = async () => {
    const itemObj = { id: uuid(), message: newItem, createdTime: Date.now() };
    await dbService.collection("items").add(itemObj);
    setNewItem("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          name="input"
          type="text"
          value={newItem}
          placeholder="Input message"
          onChange={onChange}
        />
        <Submit type="submit" value="Input" onClick={onInput} />
      </Form>
      {items.map((item) => (
        <Item key={item.docId} itemObj={item} />
      ))}
    </Container>
  );
};

export default Database;
