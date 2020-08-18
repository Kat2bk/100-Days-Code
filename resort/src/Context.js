import React from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
    state={
        rooms: []
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
            {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};

// we set up ContextApi...with a provider and a consumer. 
// class components allow us to access these easier by creating methods through state (provides flexibility)
// we could do it this way: <RoomContext.Provider value={}
// using spread operator to pass in values