import thumbImage from '../../assets/thumbUp.svg'
import { useAuth0 } from '@auth0/auth0-react'

function HomePage(){
    const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0()

    console.log('current user', user)
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
                {isAuthenticated ?(
                    <button onClick={(e) => logout()} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 my-8">Logout</button>
                ) : (
                    <button onClick={(e) => loginWithRedirect()} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 my-8">Login With Google</button>
                )}
            </div>
        </div>
        {isAuthenticated && <h3>Hello {user.name}</h3>}
        
        </>
    )
}

export default HomePage
// rgb(236, 154, 154)