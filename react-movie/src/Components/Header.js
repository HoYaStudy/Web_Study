import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  color: white;
  background-color: rgba(20, 20, 20, 1);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  text-align: center;
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movie</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
