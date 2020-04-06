import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import CrazyCat from "./crazyCat.png"
import Home from './back_home.png'



class CatShow extends Component {
    render() {
        console.log("SHOW PROPS", this.props.cats) //returns empty array - WHY
        const {id} = this.props.match.params
        const cat = this.props.cats.find((v) => v.id === parseInt(id))
        console.log(cat)
    return (
        <>
        {/* "if statement" */}
        {/* before cat gets assigned, code will skip cat (falsey) and not run the following codes */}
        {/* cat will eventually get assigned to an object - become truthy */}
        {cat &&
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div id="middle">
                <img id="zoom" src={CrazyCat}/>
                
                <div id= "box"> 
                    <h4>{cat.name}</h4>
                    <small><strong>Age: </strong>{cat.age}</small>
                    <br/>
                    <small><strong>Hobby: </strong>{cat.hobby}</small>
                </div>
                <br/>
                
                <br/>
                <br/>
            </div>
            <div id="editanddelete">
                <br/>
                <br/>
                <Button>Edit</Button> &nbsp; &nbsp; 
                <Button>Delete</Button>
                <br/>
                <br/>
                <br/>
            </div>
            <br/>
            <br/>
            <br/>
            <Link to="/" id="homebutton"><img class="icon" src={Home}/></Link>
        </div>
        

        }
        </>
    )
    }
}

export default CatShow
