
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'

import Headers from './components/Headers/Headers'
import Bookmarks from './components/Bookmark/Bookmarks'

function App() {
  const [bookMarks,setBookMarks] = useState([])
  // const [readingTime, setReadingTime] = useState(0)
  const [readingTime,setReadingTime] = useState(0)

     const handleBookMark = blog =>{
      console.log(blog)
      const newBookMark = [... bookMarks, blog]
       setBookMarks(newBookMark)
     } 

     const handleMarkReading = (id,time) =>{
      console.log('reading time',time)
      const newReadingTime = readingTime + time ;
      setReadingTime(newReadingTime)

      const remainingBook = bookMarks.filter(bookMark =>bookMark.id !== id)
      setBookMarks(remainingBook)
     }

 return (
  <div>
       <Headers></Headers>
       <main className='flex mx-w-7xl mx-auto'>
       <Blogs handleBookMark={handleBookMark}
          handleMarkReading={handleMarkReading}></Blogs>
       <Bookmarks 
       bookMarks={bookMarks}
       readingTime={readingTime}
     
        ></Bookmarks>
       </main>
     

     </div>

 )
}

export default App
