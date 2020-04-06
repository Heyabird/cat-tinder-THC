import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button }
from 'reactstrap';
import cats from "../cats"
import {Link, Route, Redirect, BrowserRouter as Router} from "react-router-dom"
import Home from './back_home.png'


class CatCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
          success: false,
          form:{
            name: '',
            age: '',
            hobby: ''
        }
      }
    }

    handleChange = (event) => {
      let { form } = this.state
      form[event.target.name] = event.target.value
      this.setState({ form: form })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      // console.log(this.state.form);
      this.props.handleSubmit(this.state.form)
      this.setState({
      success: true
    })
    }

    render() {
    return (
    <>
      <br/>
      <br/>
      <Form>
        <FormGroup id="form">
          <Label htmlFor="name" id="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={ this.handleChange }
            value={ this.state.form.name }
          />
          <br/>
          <Label htmlFor="age" id="age">Age</Label>
          <Input
            type="text"
            name="age"
            onChange={ this.handleChange }
            value={ this.state.form.age }
          />
          <br/>
          <Label htmlFor="hobby" id="hobby">Hobby</Label>
          <Input
            type="text"
            name="hobby"
            onChange={ this.handleChange }
            value={ this.state.form.hobby }
          />
        </FormGroup>
        <br/>
        <Link to="/">
        <Button type="submit" id="submit" name="submit" onClick={ this.handleSubmit }>Add New Cat</Button>
        {this.state.success && <Redirect to="./"/>}
        </Link>
        <br/>
            <br/>
            <br/>
            <Link to="/" id="homebutton"><img class="icon" src={Home}/></Link>
      </Form>

    </>
    )}
}

export default CatCreate
