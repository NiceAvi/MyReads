import React, {Component} from 'react'
import BooksShelf  from '../components/BooksShelf'
import PropTypes from 'prop-types'


class Home extends Component {
   
  
    static propTypes = {
        books : PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
      };
      
    render() {

    const { books, onUpdateBookShelf } = this.props;
    const categories = ["Currently Reading", "Want To Read", "Read"];

    return (
        <div className="list-books-content">
            <div>
                {
                   
                    categories.map((category,index)=>(
                    <div className="bookshelf" key={index}>
                        <h2 className="bookshelf-title">{category}</h2>
                        <div className="bookshelf-books">
                            <BooksShelf 
                             books={ books.filter( 
                             (mybook)=> mybook.shelf.toLowerCase()===category.replace(/ /g,'').toLowerCase())} 
                             onUpdateBookShelf={onUpdateBookShelf}
                            />
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
        )
    }
}

export default Home;
