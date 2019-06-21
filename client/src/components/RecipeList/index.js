import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";



// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {                       //RecipeList basically does this: <ul>ReccipeListItem</ul>, it has to be in curly braces
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call, but how r does it connect tothe api?
export function RecipeListItem({ image = "https://placehold.it/300x300", title, authors, link, description}) {       {/** same as function(prop), thumbanil= placehold is basically the default value if now thumbnail is present */}






function handleFormSubmit () {        //save to the database here

  //event.preventDefault();
      API.saveBook({
        
          authors: {authors},
          description: {description},
          image:  {image},
          link: {link}, 
           title: {title}
        }) 
        
        console.log('Saved to the database!');

      };






return (
    <li className="list-group-item">
      <Container>        {/** Contianer, row, col is a component method from Grid.js**/}
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3> 

        
         <button  type="button" onClick={()=>handleFormSubmit()}>
          Save Book</button>
            
            
            <p>Authors: {authors} </p>
            <p> Description: {description}</p>
          
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Get more information about the book by clicking here!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
