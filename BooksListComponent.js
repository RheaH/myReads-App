import React, { Component } from  'react'
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent'

class BooksListComponent extends Component { 
    render() {
        const{books}=this.props
        const bookShelves=[
            'currentlyReading',
            'wantToRead',
            'read',
            'none'
        ]
       
       // console.log(books)
        return(  
            <div>         
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {books.map((book,index) =>(                   
                            (book.shelf === bookShelves[0])  && ( 
                                <li key={book.id}>
                                    <BookComponent 
                                        currentBook={book} 
                                        changeBookShelf={this.props.changeBookShelf}
                                        currentShelf={bookShelves[0]}/> 
                                </li>
                                )                
                            )
                            )
                            }     
                            </ol>
                        </div>
                </div>

                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want To Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {books.map((book,index) =>(                   
                            (book.shelf === bookShelves[1])  && ( 
                                <li key={book.id}>
                                    <BookComponent 
                                        currentBook={book} 
                                        changeBookShelf={this.props.changeBookShelf} 
                                        currentShelf={bookShelves[1]}/>
                                </li>
                            )                
                        )
                        )
                        }     
                        </ol>
                    </div>
                </div>

                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {books.map((book,index) =>(                   
                            (book.shelf === bookShelves[2])  && ( 
                                <li key={book.id}>
                                    <BookComponent 
                                        currentBook={book} 
                                        changeBookShelf={this.props.changeBookShelf}
                                        currentShelf={bookShelves[2]}/>
                                </li>
                            )                
                        )   
                        )
                        }        
                        </ol>
                    </div>
                </div>
                <div className="open-search">
                    <Link 
                        to="/search"
                    >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BooksListComponent

