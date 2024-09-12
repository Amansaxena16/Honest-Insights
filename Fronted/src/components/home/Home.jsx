import thumbImage from '../../assets/thumbUp.svg'
import { Link } from 'react-router-dom' 
function HomePage(){
    return(
        <>
        <div className="thumbImage flex justify-center">
            <img src={thumbImage} alt="Logo of Site " className="mx-auto w-72" />
        </div>
        <div className="heading text-center">
            <span className="text-9xl font-bold text-pink-300">Honest Insights</span>
        </div>
        <div className="objective mx-52 my-6 text-center">
            <span className='tracking-widest font-medium text-slate-400'>Honest Insights is a platform where people can share their real thoughts and experiences about different things like products or services. It's a place for honest opinions, making it easier for others to trust and make informed decisions based on what real users have to say.</span>
        </div>
        <div className="btn flex justify-center gap-5">
            <div className="login">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 my-8"><Link to="/login">Login</Link></button>
            </div>

            <div className="signup">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 my-8">Sign Up</button>
            </div>
        </div>
        </>
    )
}

export default HomePage
// rgb(236, 154, 154)