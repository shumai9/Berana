import React from 'react'


class Note extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        editing: false
      }
      this.edit = this.edit.bind(this)
      this.save = this.save.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
    
  handleChange(event) {
    this.setState({value: event.target.value});


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

  renderForm() {
    return(
      <div className="note">
        <form onSubmit ={this.save}>
          <label>
            textnote:
            <textarea value={this.state.value} onChange={this.handleChange}/>
          </label>
          <button id="save">save</button>
        </form>
      </div>
    )
  }
  

  renderNote() { 
    return ( 
       <div className="yo">
        <button id="fab">Edit</button>
        <p className="not">{this.props.value}</p>
      </div>    
    )
  }
  render(){
    return( this.state.editing ? this.renderForm() : this.renderNote())
  }
}


export default Note;

