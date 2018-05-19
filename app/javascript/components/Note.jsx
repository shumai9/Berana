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
    return(
       <div className="note">
        {this.props.children}          
      </div>
    );
  }
  render(){
  return( this.state.editing ? this.renderForm() : this.renderShow())
  }
}

export default Note;