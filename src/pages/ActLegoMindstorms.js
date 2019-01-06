import React, { Component } from "react";
import ActivityFile from "../design-system/atoms/ActivityFile";
import actLegoMindstorms from "../utils/actLegoMindstorms.md";

export default class extends Component {
  render() {
    return (
      <ActivityFile
        duration="60-120"
        group="1-10"
        difficult="Medium"
        material="EV3 robot, computer or tablet"
        file={actLegoMindstorms}
      />
    );
  }
}
