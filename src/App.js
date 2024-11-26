import "./App.css";
import React from 'react';
import { createEvent, purchaseTicket, enterEvent, closeEvent, withdrawFunds, updateEventDetails} from './services/EventTicketingService';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  async function performCreateEvent() {
    createEvent("testing", "testing description", "imageUrl", 1696852293000, 2, 10);
  }
  async function performPurchaseTicket() {
    purchaseTicket(1, 10);
  }
  async function performEnterEvent() {
    enterEvent(1);
  }
  async function performCloseEvent() {
    closeEvent(1);
  }
  async function performWithdrawFunds() {
    withdrawFunds(1);
  }
  async function performUpdateEventDetails() {
    updateEventDetails(1, "testing2", "testing description", "imageUrl", 2696852293000, 2, 20);
  }
  async function performGetAllEvents() {
    getAllEvents();
}
  return (
   <Router>
     <div className="App">
     
        <div className="description">
          <h1>Welcome to prasamsa-events
          </h1>
          <h3>An event ticketing platform</h3>
        </div>
        
        <div className="custom-buttons">
          <button onClick={performGetAllEvents} style={{ backgroundColor: "Black" }}>
            Get All Events
          </button>
          <button onClick={performCreateEvent} style={{ backgroundColor: "Black" }}>
            Create Event
          </button>
          <button onClick={performPurchaseTicket} style={{ backgroundColor: "Black" }}>
            Purchase Ticket
          </button>
          <button onClick={performEnterEvent} style={{ backgroundColor: "Black" }}>
            Enter Event
          </button>
          <button onClick={performCloseEvent} style={{ backgroundColor: "Black" }}>
            Close Event
          </button>
          <button onClick={performWithdrawFunds} style={{ backgroundColor: "Black" }}>
            Withdraw Funds
          </button>  
          <button onClick={performUpdateEventDetails} style={{ backgroundColor: "Black" }}>
            Edit Event
          </button>
        </div>
      </div>
     
   </Router>
  );
}

export default App;
