
import profile from '../../assets/images/profile.png'
const Headers = () => {
    return (
        <header className='flex justify-between items-center mx-w-7xl  px-3'>
            <h2 className="text-3xl font-bold">Knowledge Cafe React</h2>
            <img src={profile}/>
        </header>
    );
};

export default Headers;