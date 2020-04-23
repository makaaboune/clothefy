import React from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'
import './signup.style.scss'

class Signup extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmedPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmedPassword } = this.state;
        if(password !== confirmedPassword) {
            return;
        }
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        try {
            createUserProfileDocument(user, { displayName });
            // Clear form
            this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmedPassword: ''
            }
    
        }catch(error) {
            console.error(error)
        }
    }
    render() {
        const { displayName, email, password, confirmedPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I'm a new member</h2>
                <span>Sign up to the Clothefy Store</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput
                     name ="displayName" 
                     type="text" 
                     value={displayName}
                     onChange={this.handleChange}
                     label="name"
                     required
                     />
                    <FormInput
                     name ="email" 
                     type="email" 
                     value={email}
                     onChange={this.handleChange}
                     label="email"
                     required
                     />
                    <FormInput
                     name ="password" 
                     type="password" 
                     value={password}
                     onChange={this.handleChange}
                     label="password"
                     required
                     />
                    <FormInput
                     name ="confirmedPassword" 
                     type="password" 
                     value={confirmedPassword}
                     onChange={this.handleChange}
                     label="confirm password"
                     required
                     />
                     <div className="buttons">
                        <CustomButton type="submit">Sign up</CustomButton>
                     </div>
                </form>
            </div>
        )
    }
}

export default Signup;