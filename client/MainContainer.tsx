import React from 'react';
import Card from './Card';

function MainContainer() {
    return (
      <div id = "main-container">
        <div id="tabs-container">
         <button id = "not-applied" className = "tab">Not Applied</button>
         <button id = "applied" className = "tab">Applied</button>
         <button id = "interviewing" className = "tab">Interviewing</button>
         <button id = "offers" className = "tab">Offers</button>
         <button id = "rejected" className = "tab">Rejected</button>
        </div>
        <div id="card-container">
         <div id="inner-card-container">
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
         </div>
        </div>          
      </div>
    )
}

export default MainContainer;