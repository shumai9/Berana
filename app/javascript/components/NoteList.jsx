import React from 'react'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    
  }


  render(){
    return(
      <div className="notelist-1">
        {this.props.children}
      </div>
    );
  }
}     


export default NoteList;  
