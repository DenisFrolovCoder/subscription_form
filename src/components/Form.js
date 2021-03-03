import React, { Component } from 'react';

import styles from './Form.module.css';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            checkbox: false
        }
    }

    validateSubmit = () => {
        const isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email);
        const isValidCheckbox = this.state.checkbox;

        if (!isValidEmail) {
            alert('Your email is not valid!');
            return;
        }

        if (!isValidCheckbox) {
            alert('You should accept all terms and conditions');
            return;
        }

        this.setState({email: '', checkbox: false});

        alert('Thank you for subscription!');
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleCheckboxChange = (e) => {
        this.setState({[e.target.name]: e.target.checked});
    }

    render() {
        const {email, checkbox} = this.state;
        return (
            <div className={styles.Form}>
                <label htmlFor="email">Email <br/>
                    <input
                        className={styles.email}
                        type="email"
                        name="email"
                        placeholder="youremail@email.ru"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <div className={styles.checkbox}>
                    <input
                        type="checkbox"
                        name="checkbox"
                        checked={checkbox}
                        onChange={this.handleCheckboxChange}
                    />
                    <p>I agree with terms and conditions</p>
                </div>
                <button onClick={this.validateSubmit}
                    className={styles.btn}
                >
                    Send
                </button>

            </div>
        )
    }
}

export { Form };