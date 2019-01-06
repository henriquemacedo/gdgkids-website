import React, { Component } from "react";
import styled from "styled-components";

const ActivityContent = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / -1;
  display: flex;
  min-height: 100%;
  padding: 2vw;
  overflow-y: scroll;
`;

export default class extends Component {
  render() {
    return <ActivityContent>{this.props.children}</ActivityContent>;
  }
}
