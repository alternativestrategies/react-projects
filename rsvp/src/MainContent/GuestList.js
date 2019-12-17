import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = (props) => {
    return(   
        <ul>
            <PendingGuest name={props.pendingGuest} />
            {props.guests
                .filter( confirm => !props.isFiltered || confirm.isConfirmed)
                .map((guest, index) => 
                <Guest 
                    key={index} 
                    name={guest.name}
                    isConfirmed={guest.isConfirmed}
                    isEditing={guest.isEditing}
                    setName={text => props.setNameAt(text, guest.id)}
                    handleEditing={()=>props.toggleEditingAt(guest.id)}
                    handleRemove={()=>props.removeGuestAt(guest.id)}
                    toggleConfirmationAt={()=> props.toggleConfirmationAt(guest.id)}/>
            )}
        </ul>
    );
}

GuestList.propTypes = {
    guests: PropTypes.array.isRequired, 
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired
}

export default GuestList;