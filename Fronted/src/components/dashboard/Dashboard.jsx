import thumbImage from '../../assets/thumbUp.svg'

function Dashboard(){

    document.body.style.backgroundColor = 'rgb(21,23,25)'
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
                        <span className='text-base font-semibold text-white tracking-wider'>Hello Aman Saxena</span>
                    </div>
                    <div className="logoutBtn">
                        <button className="bg-[rgb(93,93,255)] text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-[rgb(66,66,201)]">Logout</button>
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
                    <button className="bg-[rgb(93,93,255)] text-white font-semibold py-2 px-4 rounded shadow hover:bg-[rgb(66,66,201)]">Create a New Space</button>
                    </div>
                </div>
            </section>

            {/* Dashboard Space section end here  */}

        </>
    )
}

export default Dashboard