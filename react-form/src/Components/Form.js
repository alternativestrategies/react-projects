import React from 'react';

const Form = ({handleForm, handleSubmit}) => {
    
    return (
        <form method="post" action="">
            <label htmlFor="firstName">First Name</label>
            <input 
                id="firstName" 
                type="text" 
                name="firstName" 
                onChange={handleForm}required/>

            <label htmlFor="lastName">Last Name</label>
            <input  
                id="lastName" 
                type="text" 
                name="lastName" 
                onChange={handleForm} required/>

            <label htmlFor="email">Email</label>
            <input 
                id="email" 
                type="email" 
                name="email" 
                onChange={handleForm} required/>

            <input
                type="submit" 
                value="submit"
                onClick={(e) => handleSubmit(e)} />
        
        
           
        </form>
    );
}

export default Form;