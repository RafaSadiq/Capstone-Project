import React, { Component } from "react";

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,            
        };

        window.addEventListener("scroll", this.onScroll, true);
    }
    
    
    

    render() {
        return (
            <div className = "home-container" />
        )
    }
}

