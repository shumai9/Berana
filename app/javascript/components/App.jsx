import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import NoteList from '../components/NoteList'
import Note from '../components/Note'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      book:[
        {id: 1, title: "The Lost sun", content: "This 1note", tag: "prima"},
        {id: 2, title: "The Cage anim", content: "This 2note", tag: "seco"},
        {id: 3, title: "The Batchlor", content: "This 3note", tag: "terso"},
        {id: 4, title: "The Identity", content: "This 4note", tag: "petra"},
        {id: 5, title: "The Mind Bogler", content: "This 5note", tag: "chinka"},
        {id: 6, title: "The MisFit", content: "This 6note", tag: "sito"}
      ]
    }
    this.addNote = this.addNote.bind(this)
    this.removeNote = this.removeNote.bind(this)
    this.allNotes = this.allNotes.bind(this)
    this.updateNote = this.updateNote.bind(this)
  } 

  addNote() {}
  updateNote() {}
  removeNote() {}

  allNotes(title, i){
    return(
    <div id="read">
      <NoteList
        key = {title.id}
        index = {title.id}
        onChange={this.update}
        onRemove={this.removeNote}>
        <li><a href="#">{title.title}</a>, {title.tag}</li>
      </NoteList>
    
    
      <Note index = {title.id} onChange={this.update}>
      <p>{title.content}</p>
      </Note>
    </div>
    )
  }

  
  render() {
    return(
      <div className="app">
        {this.state.book.map(this.allNotes)}      
        <span>
          <button id="add" onClick={this.addNote}>+</button>
        </span>
      </div>     
    )
  }
}


export default App