import React from 'react'
import ReactDOM from 'react-dom'
import NoteList from '../components/NoteList'
import Note from '../components/Note'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book:[]
    }
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

  add = (text) => {
    this.setState(prevState => ({
      book: [ ...prevState.book, {id: this.nextId(), content: text } ]
      })
    )
  }

  nextId = () =>{
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }
  
  
  openNote = (e, i) => { 
    e.preventDefault();
    var res = this.state.book[i].content;
    return (<Note value = {res} />) 
  }

  listAll = (props, i) =>{
    return(
      <div key = {props.id} index = {props.id} >
        <em id="num">{i + 1} <a href='#' id="list"  onClick={(e) => this.openNote(e, i)}>
         {props.content.substring(0, 20)}</a>
        </em> 
      </div> 
    )
  }

  render() {
    return(
      <NoteList >
        <span id="note-title">
          <h3>Title List</h3>
          <h3>Note</h3></span>
        <button id="fab" onClick={this.add.bind(null, "New note")}>
          <span> Create new Note </span>
        </button>
       
        <div className="notelist-1">
          <span id="boxshadow">{this.state.book.map(this.listAll)}</span>
          <Note />
        </div> 
          
      </NoteList> 
    )
  }
}

export default App