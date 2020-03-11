import ReactStopwatch from "../node_modules/react-stopwatch";
import * as React from "react";

const Stopwatch = () => (
  <ReactStopwatch
    seconds={0}
    minutes={1}
    hours={0}
    limit="00:00:00"
    onChange={({ hours, minutes, seconds }) => {
      // do something
    }}
    onCallback={() => console.log("Finish")}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <div>
          <p>Formatted: {formatted}</p>
          <p>Hours: {hours}</p>
          <p>Minutes: {minutes}</p>
          <p>Seconds: {seconds}</p>
        </div>
      );
    }}
  />
);
export default Stopwatch;
