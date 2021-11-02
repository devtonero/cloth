import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-buttom/custom-button.components';
import { connect } from 'react-redux';

import { googleSigninStart, emailSigninStart } from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props){
        super (props);

        this.state = {
            email:'',
            password:''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignin} = this.props
        const {email,password} = this.state;
       
        emailSignin(email, password);
              
    };

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }

    render() {
        const {googleSignin} = this.props;
        return (
            
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" 
                    type="email" 
                    handleChange={this.handleChange} 
                    label='Email'
                    value={this.state.email} required/>
                    
                    <FormInput name="password" 
                    type="password" 
                    handleChange={this.handleChange} 
                    label='Password'
                    value={this.state.password} 
                    required/>
                    <div className='buttons'>
                        <CustomButton  type='submit'>Sign in</CustomButton>
                        
                    
                        <CustomButton type='button' onClick={googleSignin} isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>
                    </div>
                                                
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignin: ()=> dispatch(googleSigninStart()),
    emailSignin: (email, password)=> dispatch(emailSigninStart({email, password}))
})
export default connect(null, mapDispatchToProps) (SignIn);