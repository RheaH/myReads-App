import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent'
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'



/**NOTES: The search from BooksAPI is limited to a particular set of search terms.
* You can find these search terms here:
* https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md 

* However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
* you don't find a specific author or title. Every search is limited by search terms.
**/


class SearchBooksPage extends Component{
      
    state={
        query:'', 
        searchedBookList : []
    }


    updateQuery=(query) => {
        this.setState({ query: query })
        this.searchForBooks(query)
      }

    searchForBooks=(query) => {
        //let filteredBooks

        if(query) {
            //const match = new RegExp(escapeRegExp(this.state.query), 'i')
            //filteredBooks = 
            
            BooksAPI.search(query).then((searchedBookList) => {
                if (searchedBookList.error) {
                    this.setState({searchedBookList: []})
                } else {
                //searchedBookList = this.props.books
                this.setState({ searchedBookList: searchedBookList})
                }   
            })
            } else {
                this.setState({searchedBookList: []})
    }
    }

    render() {
        //const{books} = this.props
        /*const bookShelves = [
            'currentlyReading',
            'wantToRead',
            'read',
            'none'
            ]
        */
               

        return(
           //<React.Fragment>

            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to="/"
                        className="close-search" 
                    >Close</Link>
                <div className="search-books-input-wrapper">                 
                    
                    <input 
                        type="text" 
                        placeholder="Search by title or author" 
                        value={this.state.query} 
                        onChange={(event)=> this.updateQuery(event.target.value)} 
                    />
                </div>
            </div>
            
                <div className="search-books-results">
                    <ol className="books-grid">
                    {   
                        /*this.state.searchedBookList.map(searchedBook => 
                            (searchedBook.id === books.id)
                            .map ((book) =>(                   
                                <li key={searchedBook.id}>
                                     <BookComponent 
                                        currentBook={searchedBook}
                                        changeBookShelf = {this.props.changeBookShelf}
                                        currentShelf = {this.props.book.shelf}
                                     />
                                </li>
                                ))
                        )
                        */
                        
                        this.state.searchedBookList.map(searchedBook =>{
                        let  currentBookShelf="none"
                            this.props.books.map(book => (
                                book.id === searchedBook.id ?
                                currentBookShelf=book.shelf :
                                currentBookShelf
                            ))
                            return ( 
                                           
                                <li key={searchedBook.id}>
                                    <BookComponent 
                                        currentBook={searchedBook}
                                        changeBookShelf={this.props.changeBookShelf}
                                        currentShelf={currentBookShelf }                                  
                                    />
                                </li>
                            );
                        })
                    }
                
                    </ol>
                </div>
            </div>
            //{JSON.stringify(this.state)}
            //</ React.Fragment>
        )
    }
}


export default SearchBooksPage