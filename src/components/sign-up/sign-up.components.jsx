import React from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-buttom/custom-button.components';
import { auth, createUserProfileDocument,  } from '../../firebase/firebase';

class SignUp extends  React.Component {
        constructor(){
            super();
            
            this.state = {
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''

            };
        }

        handeleSubmit = async event => {
            event.preventDefault();
            const {displayName,email,password, confirmPassword}=this.state;
            if(password !== confirmPassword){
                alert("Password Don't Match");
                return;
            }

            try{
                const {user} = await auth.createUserWithEmailAndPassword(email,password);

                await createUserProfileDocument(user,{displayName});
                this.setState({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:'' 
                })
            }catch (error){
                console.error(error);
            }

        }

        handleChange = event =>{
            const {name, value}= event.target;
            this.setState({ [name]: value})
        };


        render(){
            const {displayName,email,password, confirmPassword}=this.state;
            return(
                <div className='sign-up'>
                    <h2>I DO NOT HAVE AN ACCOUNT</h2>
                    <span>SIGN UP WITH YOUR EMAIL AND PASSWORD</span>
                    <form className='sign-up-form' onSubmit={this.handeleSubmit}>
                        <FormInput
                            type='text'
                            name='displayName'
                            value={displayName}
                            onChange={this.handleChange}
                            label='Display Name'
                            required
                            
                        />
                        

                        <FormInput
                            type='text'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            label='Email'
                            required
                            
                        />
                        
                        <FormInput
                            type='password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            label='Password'
                            required
                            
                        />
                    

                        <FormInput
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={this.handleChange}
                            label='Confirm Password'
                            required
                            
                        />
                        
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                    </form>

                </div>
            )
        }
}
export default SignUp;