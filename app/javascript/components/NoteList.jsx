import React from 'react'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    
  }
   
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <div id="NL">
       {this.props.children}
      </div>
    );
  }
}     


export default NoteList;  
