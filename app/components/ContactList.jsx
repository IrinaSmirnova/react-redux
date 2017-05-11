import React from 'react';
import './ContactList.css';

export default class ContactList extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {}

    render() {
        return (
				<div>
					<form onSubmit={this.props.onSubmit} className="contactForm">
						<fieldset>
							<input type="email" id="emailAdd"
								   placeholder="Email"
							/>
							<input type="submit" value="Save" />
						</fieldset>
						<fieldset>
							<input type="text" id="findEmails"
								   placeholder="Find..."
							/>
							<input type="button" value="Find" onClick={this.props.findHandler}/>
						</fieldset>
					</form>
					<ul>
					  {this.props.emails.map((item,index) =>
						<li key={index}>{item}</li>)}
					</ul>
				</div>
                

        )
    }
}