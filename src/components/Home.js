import React, { Component } from 'react';
import { Header } from './Snacks/Header'
import { FullWidthTile, HalfWidthTile } from './Snacks/Tiles'

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="home-hero">
                    <h3>Captain Planet—he's our hero. Gonna take pollution down to zero.</h3>
                </div>

                <p>Id lorem ut at tellus felis mattis aliquam. A et rum blandit sed tristique ut. Ipsum pulvinar eu pretium sit suspendisse sed proin nibh cras. Tellus massa elementum, tortor faucibus sed sed. Porta nisi viverra sit a auctor libero. In nunc quis purus in.</p>

                <FullWidthTile
                    title="Collaborative projects"
                    address="/collaborations"
                    imageClass="black" />

                <div className="double-tiles">
                    <HalfWidthTile
                        title="Developers"
                        address="/developers"
                        navigate={this.props.navigate}
                        imageClass="blue" />
                    <HalfWidthTile
                        title="Stacks"
                        address="/skills"
                        imageClass="green" />
                </div>
            </React.Fragment>
        )
    }
}