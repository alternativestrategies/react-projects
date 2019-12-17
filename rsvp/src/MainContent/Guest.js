import React from 'react';
import GuestName from './GuestName';
import PropTypes from 'prop-types';

const Guest = (props) => {
    return (
        <li>
            <GuestName 
                isEditing={props.isEditing}
                handleNameEdits={e => props.setName(e.target.value)}>
                {props.name}
            </GuestName>

            <label>
              <input 
              type="checkbox" 
              onChange={props.toggleConfirmationAt}
              checked={props.isConfirmed}/> Confirmed
            </label>
            <button onClick={props.handleToggleEditing}>{props.isEditing ? 'save' : 'edit'}
            </button>
            <button onClick={props.handleRemove}>remove</button>
          </li>
    );
}

Guest.propTypes = {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    
   
}


export default Guest;