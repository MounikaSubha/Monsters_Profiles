import { Component } from 'react';
import './card-container.style.css'

class CardContainer extends Component {
    render() {
        const { id, email, name } = this.props.monster;
        return (
            <div className={this.props.className} key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )

    }
}

export default CardContainer;