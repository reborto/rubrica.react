import style from "./Body.module.scss";
import Card from "../Card";
import React from "react";

const API= "https://jsonplaceholder.typicode.com/users";

const getUtenti = async () => {
    const response = await fetch(API);
    return response.json();
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        /*const setListaUtenti = async () => {
            const response = await fetch(API);
            this.setState({
                list
            })
        };*/
        const setListaUtenti = () => {
            fetch(API).then((response) => response.json())
            .then((list) => {
                this.setState({list})
            })
        }
        setListaUtenti();
    }

    render() {
        const cards = [];
        for(let i=0; this.state.list.length; i++ )  {
            cards.push( <Card input={this.state.list[i]} uniqueId={i} /> )
        }

        return (
            <div id="cardContainer" className={style.user}>
            {cards}
        </div>
        );
    }
}


export default Body
