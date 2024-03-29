import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { getCustomFullDateAndTimeWithAmPm } from "@hirishu10/simple-date-time";
import "./AlertNotifcation.css";

// componenet to display the alert that a Kafka data stream has passed a threshold or not
function AlertNotifcation({topic, threshold}) {
  const timestampLower = getCustomFullDateAndTimeWithAmPm();

  return (
    <div className="alertnotifcation">
      <div className="alert-icon">
        <ErrorOutlineIcon />
      </div>
      <div className="alert-message">
        {topic} passed threshold “{threshold}”
        <div className="alert-time">{timestampLower}</div>
      </div>
    </div>
  );
}

export default AlertNotifcation;