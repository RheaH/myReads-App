import React from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooksPage from './SearchBooksPage'
import BooksListComponent from './BooksListComponent'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state={
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     **/
    //showSearchPage: false,
    books : []
  }

  updateBooks=(books) =>{
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  componentDidMount() {
    this.updateBooks()
  }
  onClickHandler=() => {
    this.setState({ showSearchPage: !this.state.showSearchPage }) //set the state of the showSearchPage and toggle it
  }

  changeBookShelf=(book, shelf) => { 
    BooksAPI.update(book, shelf)
    this.updateBooks()
  }
  render() {
    //console.log(this.state.books)
    return (
      <div className="app">
          <Route exact path="/" render={() => (
            <BooksListComponent
              books={this.state.books}
              changeBookShelf={this.changeBookShelf}
            />
          )}
          />

          <Route extact path="/search" render={() => (
            <SearchBooksPage 
              books={this.state.books} 
              changeBookShelf={this.changeBookShelf}
            />
          )}
          />
      </div>
    )
  }
}

export default BooksApp
