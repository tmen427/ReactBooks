import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

import API from "../utils/API";

import { Container, Row, Col } from "../components/Grid";
import { MongoList, MongoListItem } from "../components/MongoList";

class Books extends Component {
  state = {
    recipes: [],
    recipeSearch: "",
    authors: [],
    description: "",
    image: "",
    link: "", 
    title: "",
    books: []
    
  };




  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
    .then(res =>
      this.setState({ books: res.data}, ()=> { console.log(this.state.books) },    //setState is is asynchorous might not get it right away
         
           )
                
    )
    .catch(err => console.log(err));
  
  
    };
  
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;               //is event.target an object???  
    this.setState({
      [name]: value
    });
  };


  render() {
 
    return (
     <div>
  
    <Jumbotron />             {/** the commponents to render Jumbotron, Container and so on .....**/}
        <Container>
          <Row>
            <Col size="md-12">
            <Col size="xs-12"> 
              {!this.state.books.length ? (                //access the api from here, ternary operator....
                <h1 className="text-center">No Saved Boooks Yet...</h1>
              ) : (
               
                <MongoList>
                  {this.state.books.map(book => {   
                 //accessing the api here!!!! from the state object, will render whatever is the state
                    return (
                      <MongoListItem
                      key= {book.authors[0].authors[0]}
                       // title= {this.state.books[0].title[0].title}
                      title= {book.title[0].title}
                      link= {book.link[0].link}
                      description = {book.description[0].description}
                     
                      authors={book.authors[0].authors[0]}
                      image = {book.image[0].image}
                      id = {book._id}
                      /> 
                     
                    );
                  })}
                </MongoList> 
              )}
            </Col>



            </Col>
          </Row>       
        </Container>
      </div>

       
    );
  }




}

export default Books;
