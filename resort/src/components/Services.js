import React from "react";
import Title from "./Title";
import {FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";

class Services extends React.Component {
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Lorem gubergren duo vero invidunt eos et. Tempor sadipscing magna diam gubergren sit eos. Sit labore et voluptua sadipscing ipsum."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem gubergren duo vero invidunt eos et. Tempor sadipscing magna diam gubergren sit eos. Sit labore et voluptua sadipscing ipsum."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem gubergren duo vero invidunt eos et. Tempor sadipscing magna diam gubergren sit eos. Sit labore et voluptua sadipscing ipsum."
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Lorem gubergren duo vero invidunt eos et. Tempor sadipscing magna diam gubergren sit eos. Sit labore et voluptua sadipscing ipsum."
            }
        ]
    }

    render() {
        return (
            <section className="services">
            <Title title="services" />
            <div className="services-center">
            {this.state.services.map((item, index) => {
                return <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                </article>
            })}
            </div>
            </section>
        )
    }

}

export default Services;