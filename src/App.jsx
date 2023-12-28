import { useState } from "react";
import eventsData from "./data";
import { v1 as generateUniqueID } from "uuid";
import Event from "./Components/Event";
import NewEventForm from "./Components/NewEventForm";
import Attendee from "./Components/Attendee";

function App() {
  const [events, setEvents] = useState(eventsData);

  function addEvent(newEvent) {
    setEvents([newEvent, ...events]);
  }

  return (
    <div className="App">
       <header>
        <h1 className="color-change-5x">RSVP App</h1>
      </header>
      <main>
        <NewEventForm onAddEvent={addEvent} />
        <div className="events">
          <ul>
            {events.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <ul>
          <li>Contact</li>
          <li>About</li>
          <li>Legal</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

 