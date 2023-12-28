import React from 'react';

function Attendee({ attendee }) {
  return (
    <div className="attendee">
      <p>
        <img src={attendee.avatar} alt={attendee.firstName} />
        {'   '}
        <span> {attendee.firstName} {attendee.lastName} </span>
      </p>
      <p>
        <button className="clickable">
          Attending: {attendee.attendance ? '✅' : '❌'}
        </button>
      </p>
      <p>
        <span>Note:</span> {attendee.note}
      </p>
    </div>
  );
}

export default Attendee;
