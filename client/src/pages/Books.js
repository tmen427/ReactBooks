import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Container, Row, Col } from "../components/Grid";

class Books extends Component {
  state = {
    recipes: [],
    recipeSearch: "",
    authors: [],
    description: "",
    image: "",
    link: "", 
    title: ""
  };
componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
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

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch) //getRecipes (takes a parameter in) is not imported above but it is imported in API, line 6 above
      .then(res => {
        this.setState({ recipes: res.data })
     //  console.log('the data is right here ' + res.data[0].kind)    // the response from gooogle books api here
        //console.log(this.state.recipeSearch)
       //  if (this.state.recipes) {
         // API.saveBook({
         //   data: 'hey bro this should work in the db',
         //data: this.state.recipes,
          //  authors: this.state.authors,
          //  description: this.state.description,
           // image: this.state.image,
           // link: this.state.link, 
           // title: this.state.title
      //    }) 
      //  }
          

       },
    //  )       //check chrome console for the results 
           //now you have a response from getRecipes, which is then placed into the state
      )    
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
              {/** <Nav /> */}
    <Jumbotron />             {/** the commponents to render Jumbotron, Container and so on .....**/}
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12"> 
              {!this.state.recipes.length ? (                //access the api from here, ternary operator....
                <h1 className="text-center">No Books to Display Yet...</h1>
              ) : (
               
                <RecipeList>
                  {this.state.recipes.map(recipe => {   
                 //accessing the api here!!!! from the state object, will render whatever is the state
                    return (
                      <RecipeListItem
                        key={recipe.volumeInfo.title}
                        title={recipe.volumeInfo.title}
                        link={recipe.volumeInfo.infoLink}
                        description = {recipe.volumeInfo.description}
                        authors={recipe.volumeInfo.authors}
                        image={recipe.volumeInfo.imageLinks.smallThumbnail}
                      /> 
                     
                    );
                  })}
                </RecipeList> 
              )}
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
}

export default Books;
