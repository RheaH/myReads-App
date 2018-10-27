import React, { Component } from  'react'


class BookComponent extends Component {
    render(){
        const{currentBook}=this.props
        let displayBookCover=this.props.currentBook.imageLinks ? this.props.currentBook.imageLinks.thumbnail : ''
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${displayBookCover})` }}></div>
                <div className="book-shelf-changer">
                    <select
                        onChange={(event) => this.props.changeBookShelf(
                            this.props.currentBook, event.target.value)}
                            defaultValue={this.props.currentShelf}
                    >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{currentBook.title}</div>
                <div className="book-authors">{currentBook.authors}</div>
            </div>
        )
    } 
}

export default BookComponent