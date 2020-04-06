import React, {Component} from "react"
import { ListGroup, Button }
 from 'reactstrap'; 
import cats from '../cats'
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom"
import CrazyCat from "./crazyCat.png"
import CatCreate from "./CatCreate"
import CatShow from "./CatShow"
import Add from "./add_new_cat.png"



class CatIndex extends Component{ 
    render(){
      console.log("INDEX PROPS", this.props.cats) //returns an array of cats
        return(
              <>
                <div>
                  <div id="center" >
                    {this.props.cats.map((cat, index) => {
                      return(
                        <ListGroup id="box1" key={ index }>
                          <Link to={`/cat/${cat.id}`}><h4 id= "name"> { cat.name }</h4></Link>
                          <br/>
                          <img src={CrazyCat}/>
                          <br/>
                          <div id="description">
                            <small>Age: { cat.age }  </small>
                            <br/>
                            <small>Hobby: { cat.hobby} </small>
                          </div>
                        </ListGroup>
                      )
                    })}
                  </div>
                </div>
                <br/>
                <a href="/catcreate/" id="button"><img class="icon" src={Add}/></a>
                <br/>
                <br/>
                <br/>
              </>
        )
      }
}
export default CatIndex
