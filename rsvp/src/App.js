import React, {Component} from 'react';
import Header from './Header';
import MainContent from './MainContent';


class App extends Component {

  state =  {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  // this handle will take an index and changes the state
  togglePropertyAt = (property, id) => {
    this.setState ({
      guests: this.state.guests.map(guest => {
        if(id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  }

  toggleConfirmationAt = (id) => 
    this.togglePropertyAt("isConfirmed", id);
  
  removeGuestAt = (id) => {
    this.setState({
      guests: this.state.guests.filter(g => id !== g.id)
      
    });
  }

  toggleEditingAt = (id) => 
    this.togglePropertyAt("isEditing", id);


  setNameAt = (name, idToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, id)=>{
        if(id === idToChange){
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });
  }

  toggleFilter = () => {
    this.setState({ isFiltered: !this.state.isFiltered })
  }

  handleNameInput = (e) => {
    this.setState({ pendingGuest: e.target.value });
  }


  //newGuestSubmitHandler
  newGuestSubmitHandler = (e) => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  }

   // handleNewGuest = (name) => {
  //   this.setState( prevState => {
  //     return {
  //       guests: [
  //         {
  //           name,
  //           isConfirmed: false,
  //           isEditing: false,
  //           id: this.prevGuestId +=1
  //         },
  //         ...prevState.guests
  //       ]
  //     };
  //   });
  // }

  // will show you the number of people invited
  getTotalInvited = () => this.state.guests.length;

  //get guests that have confirmed, maybe use a filter and chain a reduce method? assign getConfirmedGuests to a variable

  getAttendingGuests = () => 
    this.state.guests.reduce((acc, cur) => cur.isConfirmed ? acc + 1 : acc , 0);

  //get guests that have not confirmed by subtracting length by getGuestsConfirmed
  //getUnconfirmedGuests

  render () {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
        newGuestSubmitHandler={this.newGuestSubmitHandler}
        pendingGuest={this.state.pendingGuest}
        handleNameInput={this.handleNameInput}
        />
        
        <MainContent 
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
        totalInvited={totalInvited}
        numberAttending={numberAttending}
        numberUnconfirmed={numberUnconfirmed}
        guests={this.state.guests}
        toggleConfirmationAt={this.toggleConfirmationAt}
        toggleEditingAt={this.toggleEditingAt}
        setNameAt={this.setNameAt}
        removeGuestAt={this.removeGuestAt}
        pendingGuest={this.state.pendingGuest}/>
      </div>
    );
  }
}

export default App;
