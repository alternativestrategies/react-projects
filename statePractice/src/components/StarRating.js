import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }

  // Write a function that renders 5 Stars
  renderStars = () => {
    let stars = [];
    let maxRating = 5;

    for (let i = 0; i < maxRating; i++){
      stars.push(
        <Star 
          isSelected={this.state.rating > i}
          setRating={() => this.handleStarRating(i + 1)}
          key={i}
        />
      );
    }
    return stars;
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props
handleStarRating = (rating) => {
  if(this.state.rating === rating){
    this.setState({rating: 0})
  } else {
    this.setState({ rating });
  }
}

  render() {
    return (
      <ul className="course--stars">
        {this.renderStars()}
      </ul>
    );
  }
}

export default StarRating;