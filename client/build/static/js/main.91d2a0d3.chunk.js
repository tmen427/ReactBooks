(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(54)},30:function(e,t,a){},31:function(e,t,a){},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),c=a(57),i=a(58),s=a(59),u=a(11),m=a(5),p=a(6),h=a(8),E=a(7),d=a(9);a(30);var f=function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h1",null,"Google Books App"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.recipepuppy.com/about/api/"},"Powered by Google Books Api"))};a(31);var k=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement("div",{clas:"stayleft"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Search"),r.a.createElement("a",{className:"navbar-brand",href:"/saved"},"Saved Books")))};var b=function(e){return r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",Object.assign({className:"form-control",type:"text"},e)),"     ")};var v=function(e){var t=e.type,a=void 0===t?"default":t,n=e.className,l=e.children,o=e.onClick;return r.a.createElement("button",{onClick:o,className:["btn btn-lg","btn-".concat(a),n].join(" ")},l)},g=a(10),y=a.n(g),B={getRecipes:function(e){return y.a.get("/api/zz",{params:{q:e}})},getBooks:function(){return y.a.get("/api/books")},getBook:function(e){return y.a.get("/api/books/"+e)},deleteBook:function(e){return y.a.delete("/api/books/"+e)},saveBook:function(e){return y.a.post("/api/books",e)}};a(50);var j=function(e){var t=e.src;return r.a.createElement("div",{className:"thumbnail",role:"img","aria-label":"Recipe Image",style:{backgroundImage:"url(".concat(t,")")}})};function N(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function S(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function x(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},"   ",a)}function O(e){var t=e.children;return r.a.createElement("ul",{className:"list-group"},t)}function z(e){var t=e.image,a=void 0===t?"https://placehold.it/300x300":t,n=e.title,l=e.authors,o=e.link,c=e.description;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement(N,null,"        ",r.a.createElement(S,null,r.a.createElement(x,{size:"xs-4 sm-2"},r.a.createElement(j,{src:a})),r.a.createElement(x,{size:"xs-8 sm-9"},r.a.createElement("h3",null,n),r.a.createElement("button",{type:"button",onClick:function(){return B.saveBook({authors:{authors:l},description:{description:c},image:{image:a},link:{link:o},title:{title:n}}),void console.log("Saved to the database!")}},"Save Book"),r.a.createElement("p",null,"Authors: ",l," "),r.a.createElement("p",null," Description: ",c),r.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:o},"Get more information about the book by clicking here!")))))}var w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={recipes:[],recipeSearch:"",authors:[],description:"",image:"",link:"",title:""},a.loadBooks=function(){B.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:"",synopsis:""})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),B.getRecipes(a.state.recipeSearch).then(function(e){a.setState({recipes:e.data})}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),"             ",r.a.createElement(N,null,r.a.createElement(S,null,r.a.createElement(x,{size:"md-12"},r.a.createElement("form",null,r.a.createElement(N,null,r.a.createElement(S,null,r.a.createElement(x,{size:"xs-9 sm-10"},r.a.createElement(b,{name:"recipeSearch",value:this.state.recipeSearch,onChange:this.handleInputChange,placeholder:"Search For a Book"})),r.a.createElement(x,{size:"xs-3 sm-2"},r.a.createElement(v,{onClick:this.handleFormSubmit,type:"success",className:"input-lg"},"Search"))))))),r.a.createElement(S,null,r.a.createElement(x,{size:"xs-12"},this.state.recipes.length?r.a.createElement(O,null,this.state.recipes.map(function(e){return r.a.createElement(z,{key:e.volumeInfo.title,title:e.volumeInfo.title,link:e.volumeInfo.infoLink,description:e.volumeInfo.description,authors:e.volumeInfo.authors,image:e.volumeInfo.imageLinks.smallThumbnail})})):r.a.createElement("h1",{className:"text-center"},"No Books to Display Yet...")))))}}]),t}(n.Component),C=a(56),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={book:{}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;B.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement(N,{fluid:!0},r.a.createElement(S,null,r.a.createElement(x,{size:"md-12"},r.a.createElement(f,null,r.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),r.a.createElement(S,null,r.a.createElement(x,{size:"md-10 md-offset-1"},r.a.createElement("article",null,r.a.createElement("h1",null,"Synopsis"),r.a.createElement("p",null,this.state.book.synopsis)))),r.a.createElement(S,null,r.a.createElement(x,{size:"md-2"},r.a.createElement(C.a,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component);var A=function(){return r.a.createElement(N,{fluid:!0},r.a.createElement(S,null,r.a.createElement(x,{size:"md-12"},r.a.createElement(f,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};function D(e){var t=e.children;return r.a.createElement("ul",{className:"list-group"},t)}function F(e){var t=e.image,a=void 0===t?"https://placehold.it/300x300":t,n=e.title,l=e.authors,o=e.link,c=e.description,i=e.id;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement(N,null,r.a.createElement(S,null,r.a.createElement(x,{size:"xs-4 sm-2"},r.a.createElement(j,{src:a})),r.a.createElement(x,{size:"xs-8 sm-9"},r.a.createElement("h3",null,n),r.a.createElement("button",{type:"button",onClick:function(){return function(e){B.deleteBook(e).then(function(e){return window.location.reload()}).catch(function(e){return console.log(e)})}(i)}},"Delete Book"),r.a.createElement("p",null,"Authors: ",l," "),r.a.createElement("p",null," Description: ",c),r.a.createElement("a",{rel:"noreferrer noopener",target:"_blank",href:o},"Get more information about the book by clicking here!")))))}var G=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={recipes:[],recipeSearch:"",authors:[],description:"",image:"",link:"",title:"",books:[]},a.loadBooks=function(){B.getBooks().then(function(e){return a.setState({books:e.data},function(){console.log(a.state.books)})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),"             ",r.a.createElement(N,null,r.a.createElement(S,null,r.a.createElement(x,{size:"md-12"},r.a.createElement(x,{size:"xs-12"},this.state.books.length?r.a.createElement(D,null,this.state.books.map(function(e){return r.a.createElement(F,{key:e.authors[0].authors[0],title:e.title[0].title,link:e.link[0].link,description:e.description[0].description,authors:e.authors[0].authors[0],image:e.image[0].image,id:e._id})})):r.a.createElement("h1",{className:"text-center"},"No Saved Boooks Yet..."))))))}}]),t}(n.Component);var R=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:w}),r.a.createElement(s.a,{exact:!0,path:"/books",component:w}),r.a.createElement(s.a,{exact:!0,path:"/saved",component:G}),r.a.createElement(s.a,{exact:!0,path:"/books/:id",component:I}),r.a.createElement(s.a,{component:A}))))};o.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.91d2a0d3.chunk.js.map