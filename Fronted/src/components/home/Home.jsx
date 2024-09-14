import thumbImage from '../../assets/thumbUp.svg'
import { useAuth0 } from '@auth0/auth0-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function HomePage(){
    const {loginWithRedirect} = useAuth0()

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

        <div className="btn flex justify-center ">
            <div className="login">
                <button onClick={(e) => loginWithRedirect({redirectUri : window.location.origin + "/dashboard"})} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 my-8">
                Login With {" "} <FontAwesomeIcon icon={faGoogle} style={{color: "#ffffff" ,}} /></button>
            </div>
        </div>        
        </>
    )
}

export default HomePage
