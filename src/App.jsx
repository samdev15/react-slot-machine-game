import React from 'react';
import SlotM from './SlotM';

const App = () => {
    return (
        <div className="time-slot-app">
            <h1 className="slot-heading" >🎰 Welcome to <span style={{fontWeight: 'bold', color: 'red'}}>Time Slot Machine Game 🎰</span></h1>
            <SlotM x= "😸" y= "😃" z= "😃" />
            <SlotM x= "😃" y= "😃" z= "😃" />
            <SlotM x= "😸" y= "😃" z= "🥰" />
            <SlotM x= "🍌" y= "🍌" z= "🍌" />
        </div>
    );
}

export default App;