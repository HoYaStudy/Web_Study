import React, { useState } from "react";
import { dbService } from "../../fbConfig";
import styled from "styled-components";
import { Edit } from "@styled-icons/entypo";
import { Delete } from "@styled-icons/material";
import { Check } from "@styled-icons/boxicons-regular";
import { Cancel } from "@styled-icons/typicons";

const ContainerItem = styled.div`
  width: 350px;
  height: 28px;
  padding-left: 6px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Message = styled.h3`
  width: 80%;
  margin-top: 8px;
  color: #81c784;
`;

const Input = styled.input`
  width: 80%;
  margin-top: 8px;
  border: none;
  border-bottom: 1px solid #e0f2f1;
  color: #81c784;
  background-color: #263238;
  font-size: 1rem;
`;

const EditIcon = styled(Edit)`
  width: 10%;
  padding: 9px;
  color: #ffe0b2;
`;

const DeteleIcon = styled(Delete)`
  width: 10%;
  padding: 8px;
  color: #ffe0b2;
`;

const CheckIcon = styled(Check)`
  width: 10%;
  padding: 6px;
  color: #ffe0b2;
`;

const CancelIcon = styled(Cancel)`
  width: 10%;
  padding: 9px;
  color: #ffe0b2;
`;

const Item = ({ itemObj }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState(itemObj.message);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "input") {
      setEditItem(value);
    }
  };

  const onEdit = async () => {
    setIsEdit((prev) => !prev);
  };

  const onDelete = async () => {
    await dbService.doc(`items/${itemObj.docId}`).delete();
  };

  const onCheck = async () => {
    await dbService.doc(`items/${itemObj.docId}`).update({
      message: editItem,
    });
    setIsEdit(false);
  };

  const onCancel = async () => {
    setIsEdit(false);
    setEditItem(itemObj.message);
  };

  return (
    <ContainerItem>
      {isEdit ? (
        <>
          <Input
            name="input"
            type="text"
            value={editItem}
            placeholder="Edit message"
            onChange={onChange}
          />
          <CheckIcon onClick={onCheck} />
          <CancelIcon onClick={onCancel} />
        </>
      ) : (
        <>
          <Message key={itemObj.id}>{itemObj.message}</Message>
          <EditIcon onClick={onEdit} />
          <DeteleIcon onClick={onDelete} />
        </>
      )}
    </ContainerItem>
  );
};

export default Item;
