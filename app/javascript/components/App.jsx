import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import NoteList from '../components/NoteList'
import Note from '../components/Note'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      book:[]

    }
    this.allNotes = this.allNotes.bind(this)
    this.add = this.add.bind(this)
    this.nextId = this.nextId.bind(this)
    this.listAll = this.listAll.bind(this)
   
  } 

  componentWillMount() {
    var self = this
    if(this.props.count) {
      fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
        .then(response => response.json())
        .then(json => json[0].split('. ')
        .forEach(sentence => self.add(sentence.substring(0, 50))))
    }
  }

  add(text) {
    this.setState(prevState => ({
      book: [ ...prevState.book, {id: this.nextId(), content: text } ]
      })
    )
  }

  nextId(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  allNotes(note, i){
    return(
      <Note
        key = {note.id}
        index = {note.i}
        onChange={this.update}
        onRemove={this.removeNote}>
          {note.content} 
        
      </Note>
    )
  }

  listAll(note, i){
    return(
      <NoteList key = {note.id} index = {note.i} onChange={this.update} onRemove={this.removeNote}>
        <span>{i + 1} :<a href="#"> {note.content.substring(0, 20)}</a></span>
      </NoteList> 
    )
  }

  
  render() {
    return(
      <NoteList >
        <div className="notelist-2">
          <span><h1>Title</h1></span>
          {this.state.book.map(this.listAll)}
        </div>
        <div className="note">
           <span> <h1>Note</h1></span>
        <p>{this.state.book.map(this.allNotes)}</p>
        </div>       
      </NoteList> 
    )
  }
}

export default App