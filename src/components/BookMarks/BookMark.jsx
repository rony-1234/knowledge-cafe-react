
import PropTypes from 'prop-types';

const BookMark = ({bookMark }) => {
    const {title } = bookMark || {};
    console.log(title)
    return (
        <div className=' bg-slate-200 rounded-sm p-4'  >
            {/* <h2 className="text-3xl font-semibold">{title}</h2> */}
            <h2 className="text-2xl ">{title}</h2>
           
        </div>
    );
};

BookMark.propTypes = {
    bookMark : PropTypes.object
}

export default BookMark;