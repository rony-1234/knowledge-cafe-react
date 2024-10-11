import PropTypes from 'prop-types';
import { MdBookmarkBorder } from "react-icons/md";

const Blog = ({blog,handleBookMark,handleMarkReading}) => {
    const  {id,title,coverImg,reading_time,hashtags, author, authorImg,posted_date } = blog;
    // console.log(blog)
    return (
        <div className='mb-20'>
              <img className='w-full mb-4' src={coverImg} alt={`cover picture of the ${title}`}/>
              

              <div className='flex justify-between '>
                <div className='flex'>
                   <img className='w-12 h-8 rounded-sm' src={authorImg} alt=''/>
                   <div>
                    <h3>{author}</h3>
                    {/* <br/> */}
                    <p className='ml-4'><span>{posted_date}</span></p>
                   </div>
                </div>
                <div>
                    <h4><span>{reading_time}min read</span>
                    <button onClick={() =>handleBookMark(blog)} className='ml-2'>
                    <MdBookmarkBorder />
                    </button>
                    
                    </h4>
                </div>
              </div>
              <h2 className='text-3xl font-bold'>{title}</h2>
              <p>
                {
                    hashtags.map((hash, index) =><span key={index}><a href=''>#{hash}</a></span>)
                }
              </p>
              <button  onClick={() => handleMarkReading(id,reading_time,id)}
              className='text-purple-600 p-2 
              m-2 text-2xl'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes =                                                                                                      {
    blog :PropTypes.object.isRequired,
    handleBookMark : PropTypes.function,
    handleMarkReading: PropTypes.function,
}

export default Blog;