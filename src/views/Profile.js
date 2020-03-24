import React, { Component } from 'react'
import { ContactMethod } from './components/Snacks'
import './components/Images'
import { icons } from './components/Images'

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: {
                isEmail: true,
                isGithub: false,
                isLinkedin: false,
                isTwitter: false
            }
        }
        this.toggleContactMethod = this.toggleContactMethod.bind(this)
    }

    toggleContactMethod(method) {
        if (method === 'email') {
            this.setState({
                contacts: {
                    ...this.state.contacts,
                    isEmail: true,
                    isGithub: false,
                    isLinkedin: false,
                    isTwitter: false
                }
            })
        } else if (method === 'github') {
            this.setState({
                contacts: {
                    ...this.state.contacts,
                    isEmail: false,
                    isGithub: true,
                    isLinkedin: false,
                    isTwitter: false
                }
            })
        } else if (method === 'linkedin') {
            this.setState({
                contacts: {
                    ...this.state.contacts,
                    isEmail: false,
                    isGithub: false,
                    isLinkedin: true,
                    isTwitter: false
                }
            })
        } else if (method === 'twitter') {
            this.setState({
                contacts: {
                    ...this.state.contacts,
                    isEmail: false,
                    isGithub: false,
                    isLinkedin: false,
                    isTwitter: true
                }
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="profile-head" style={{
                    backgroundImage: `url(${require('../images/users/taegeuk-heaven.jpg')})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: this.props.sizes.currentWidth + 'px',
                }}>
                    <div className="profile-cover">
                        <div className="profile-info">
                            <p className="profile-title">Full-Stack Web Developer</p>
                            <h1>Winslow Mays</h1>
                            <p className="profile-brand">Working in linguistics taught me that solving problems isn't always as easy as ABC. Whether you’re reworking an existing project or coding a new one from the root up, I know how to translate everything you want into a product that's right for U.</p>

                            <div className="social-info">
                                <ContactMethod
                                    address="winslow@lighterfluid.co"
                                    addressType="mail"
                                    icon={icons.email}
                                    iconAlt="email icon"
                                    method="email"
                                    reach="winslow@lighterfluid.co"
                                    toggleContactMethod={this.toggleContactMethod}
                                    visible={this.state.contacts.isEmail} />

                                <ContactMethod
                                    address="https://github.com/winslowdev"
                                    addressType="external"
                                    icon={icons.github}
                                    iconAlt="github icon"
                                    method="github"
                                    reach="@winslowdev"
                                    toggleContactMethod={this.toggleContactMethod}
                                    visible={this.state.contacts.isGithub} />

                                <ContactMethod
                                    address="https://linkedin.com/in/winslowmays"
                                    addressType="external"
                                    icon={icons.linkedin}
                                    iconAlt="linkedin icon"
                                    method="linkedin"
                                    reach="in/winslowmays"
                                    toggleContactMethod={this.toggleContactMethod}
                                    visible={this.state.contacts.isLinkedin} />

                                <ContactMethod
                                    address="http://twitter.com/winslowdev"
                                    addressType="external"
                                    icon={icons.twitter}
                                    iconAlt="twitter icon"
                                    method="twitter"
                                    reach="@winslowdev"
                                    toggleContactMethod={this.toggleContactMethod}
                                    visible={this.state.contacts.isTwitter} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}