import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";



// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function MongoList({ children }) {        //RecipeList basically does this: <ul>ReccipeListItem</ul>, it has to be in curly braces
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call, but how r does it connect tothe api?
export function MongoListItem({ image = "https://placehold.it/300x300", title, authors, link, description,id }) {       {/** same as function(prop), thumbanil= placehold is basically the default value if now thumbnail is present */}



function deleteBook (id) {
  API.deleteBook(id)                        //reload the page when you delete a book from the database, change this in the future?
    .then(res => window.location.reload()
    )             

    .catch(err => console.log(err));
};


return (
    <li className="list-group-item">
      <Container>       
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3> 
        
         
        
         <button  type="button" onClick={()=>deleteBook( id )}>
          Delete Book</button>
            
            
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
