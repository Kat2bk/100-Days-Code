import React from "react";

const RoomProvider = React.createContext();

class RoomProvider extends React.Component {
    state={

    }

    render() {
        return (
            <RoomContext.Provider value="hello">
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