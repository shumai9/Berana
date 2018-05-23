import React from 'react'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    
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
