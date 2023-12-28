import React from "react";
import Attendee from "./Attendee";

function Attendees({ attendees }) {
  return (
    <div className="attendees">
      {attendees.map((attendee) => (
        <Attendee key={attendee.id} attendee={attendee} />
      ))}
    </div>
  );
}

export default Attendees;
