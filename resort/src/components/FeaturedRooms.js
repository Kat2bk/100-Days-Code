import React from "react";
import {RoomContext} from "../Context";

class FeaturedRooms extends React.Component {
static contextType = RoomContext;

    render() {

        return (
            <div>
            hello from featured room
            </div>
        )
    }
}

export default FeaturedRooms;

// passing in values through context