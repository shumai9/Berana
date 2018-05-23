import React from 'react'


class Note extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        editing: false
      }
      this.edit = this.edit.bind(this)
      this.save = this.save.bind(this)
    }
    
    edit() {
      this.setState({
        editing: true
      })
    }


    save(e) {
      e.preventDefault()
      this.props.onChange(text, this.props.index)
      this.setState({
        editing: false
      })
    }

    remove() {
      this.props.onRemove(this.props.index)
    }
    
    allNotes(note, i){
    return(
      <Note className="note"
        key = {note.id}
        index = {note.i}
        onChange={this.update}
        onRemove={this.removeNote}>
        <span><h1 id="title">Note</h1></span>
        {note.content}        
      </Note>
    )
  } 

  renderForm() {
    return(
      <div className="note">
        <label>
        <form onSubmit ={this.save}>
          <textarea />
          <button id="save">save</button>
        </form>
        </label>
      </div>
    )
  }
  

  renderShow() { 
    return this.props.children
  }
  render(){
    return( this.state.editing ? this.renderForm() : this.renderShow())
  }
}


export default Note;

