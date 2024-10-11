import BookMark from "../BookMarks/BookMark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookMarks,readingTime}) => {
    console.log(bookMarks)
    return (
        <div className="md:w-1/3 bg-gray-50 ml-4 mt-2 pt-4 ">
            <h3>Reading Time : {readingTime} min</h3>
            <h2>Bookmark : {bookMarks.length}</h2>
            
            {
               bookMarks.map((bookMark,idx) =><BookMark key={idx} bookMark={bookMark}></BookMark>)
            }
            

           
        </div>
    );
};


Bookmarks.propTypes = {
    bookMarks : PropTypes.array,
    readingTime : PropTypes.obj
 
}


export default Bookmarks;