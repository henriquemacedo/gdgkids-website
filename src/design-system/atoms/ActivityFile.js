import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import styled from "styled-components";
import duration from "../../images/activity-duration.svg";
import group from "../../images/activity-group.svg";
import difficult from "../../images/activity-difficult.svg";
import material from "../../images/activity-material.svg";

const ActivityFile = styled.div``;

const ActivityInfo = styled.div`
  margin-bottom: 2vw;
  border-radius: 20px;
  background-color: var(--white, hsl(0, 0%, 0%));
  padding: 2vw;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);

  ul {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      width: 100%;

      img {
        margin-right: 10px;
        width: auto;
        height: 50px;
      }

      > div {
        line-height: 0.8rem;

        span {
          &:first-child {
            display: block;
            font-size: 0.5rem;
            font-weight: var(--black, 900);
            text-transform: uppercase;
          }

          &:last-child {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
`;

const File = styled.div`
  border-radius: 20px;
  background-color: var(--white, hsl(0, 0%, 0%));
  padding: 2vw;
`;

export default class extends Component {
  static propTypes = {
    file: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { md: null };
  }

  componentWillMount() {
    fetch(this.props.file)
      .then(response => response.text())
      .then(text => {
        this.setState({ md: text });
      });
  }

  render() {
    return (
      <ActivityFile>
        <ActivityInfo>
          <ul>
            <li>
              <img src={duration} alt="" />
              <div>
                <span>Duration</span>
                <span>{this.props.duration} min</span>
              </div>
            </li>
            <li>
              <img src={group} alt="" />
              <div>
                <span>Group</span>
                <span>{this.props.group}</span>
              </div>
            </li>
            <li>
              <img src={difficult} alt="" />
              <div>
                <span>Difficult</span>
                <span>{this.props.difficult}</span>
              </div>
            </li>
            <li>
              <img src={material} alt="" />
              <div>
                <span>Material</span>
                <span>{this.props.material}</span>
              </div>
            </li>
          </ul>
        </ActivityInfo>
        <File>
          <ReactMarkdown source={this.state.md} />
        </File>
      </ActivityFile>
    );
  }
}
