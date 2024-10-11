import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMark,handleMarkReading}) => {
    const [blogs,setBlogs] = useState([]) 

    useEffect(() =>{
            fetch('blogs.json')
            .then(res =>res.json())
            .then(data =>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2>blogs : {blogs.length}</h2>
            <div>
            {
                blogs.map(blog =>
                <Blog handleBookMark={handleBookMark}
                handleMarkReading={handleMarkReading}
                 key={blog.id} blog={blog}>

                </Blog>)
            }
            </div>
          
        </div>
    );
};

 Blogs.propTypes = {

    handleBookMark: PropTypes.function,
    handelMarkReading:PropTypes.function
        
    

 }
export default Blogs;