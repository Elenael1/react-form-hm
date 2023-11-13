import React, { Component } from 'react'
import s from './student.module.css'

export default class Student extends Component {
    state={
        isPresent: false,
    }
    onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget
    const name = form.elements.name.value;
    const group = form.elements.group.value;
    console.log({name, group})
    form.reset();
}

    change = (e) => {
        const checked = e.target.checked;
       this.setState({isPresent: checked})
}
  render() {
    return (
    <form action="" onSubmit={this.onSubmit}>
        <label htmlFor="">
            Name:
            <input type="text" name='name' onChange={this.change}/>
        </label>
        <label htmlFor="">
            Group:
            <input type="text" name='group' onChange={this.change}/>
        </label>
        <label htmlFor="">
        Presence at class:
            <input type="checkbox" name='present' checked={this.state.isPresent} onChange={this.change}/>
        </label>
        <button type='submit' disabled={!this.state.isPresent}>Submit</button>
      </form>
      
        
    )
  }
}
