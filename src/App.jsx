
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Headers from './components/Headers/Headers'

function App() {


 return (
  <div>
       <Headers></Headers>
       <main className='flex'>
       <Blogs></Blogs>
       <Bookmark></Bookmark>
       </main>
     

     </div>

 )
}

export default App
