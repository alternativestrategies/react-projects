import React from 'react';

const ConfirmedFilter = (props) => {
    return (
        <div>
            <h2>Invitees</h2>
            <label>
              <input 
                onClick={props.toggleFilter}
                checked={props.isFiltered}
                type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
    );
}

export default ConfirmedFilter;