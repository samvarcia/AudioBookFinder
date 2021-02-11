import React from 'react'
import '../assets/styles/components/AddButton.scss'

class AddButton extends React.Component {
  state = {
    active: false,
  }
  handleClick = () => {
    this.setState({
      active: this.state.active = true
    })
  }
  render(){
    return(
      <button className="AddButton" type="button" onClick={this.handleClick}>
        Agregar
      </button>
    )
  }
}


export default AddButton;