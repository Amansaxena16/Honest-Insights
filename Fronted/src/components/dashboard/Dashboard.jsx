import thumbImage from '../../assets/thumbUp.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Dashboard(){
    const {user,isAuthenticated,logout} = useAuth0()
    document.body.style.backgroundColor = 'rgb(21,23,25)'

    if(isAuthenticated && user){
        const userID = user.sub
    }

    return(
        <>
            {/* Navbar Section start from here  */}
            <nav className='flex justify-between'>
                <div className="image_heading flex items-center">
                    <div className="image">
                        <img src={thumbImage} alt="Logo" className='w-16'/>
                    </div>
                    <div className="logo_heading">
                        <h1 className='font-extrabold text-3xl tracking-wider text-white'>Honest Insights</h1>
                    </div>
                </div>

                <div className="userName_LogoutBtn flex items-center gap-x-4 mr-4">
                    <div className="userName">
                        {isAuthenticated && <span className='text-base font-semibold text-white tracking-wider'>Hello {user.name}</span>}
                    </div>
                    <div className="logoutBtn">
                        <button className="bg-[rgb(93,93,255)] text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-[rgb(66,66,201)]" onClick={() => logout({
                                returnTo: window.location.origin})}>Logout</button>
                    </div>
                </div>
            </nav>
            {/* Navbar Section end here  */}

            {/* Dashboard Space section start from here  */}

            <section className='mt-10'>
                <div className="spaceHeading_Btn flex items-center justify-between mx-5">
                    <div className="spaceHeading">
                        <span className='text-3xl font-bold tracking-wide text-white'>Spaces</span>
                    </div>

                    <div className="createSpaceBtn">
                    <button className="bg-[rgb(93,93,255)] text-white font-semibold py-2 px-4 rounded shadow hover:bg-[rgb(66,66,201)]"> <span><FontAwesomeIcon icon={faPlus} size="sm" style={{color: "#ffffff",}} /></span>{" "} <Link to="/create">Create a New Space</Link></button>
                    </div>
                </div>
            </section>

            {/* Dashboard Space section end here  */}

        </>
    )
}

export default Dashboard