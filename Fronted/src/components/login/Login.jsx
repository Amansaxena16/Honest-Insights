import thumbImage from '../../assets/thumbUp.svg'
import '../../components/global.css'

function Login(){
    return(
        <>
        <div className="thumbImage flex justify-center">
            <img src={thumbImage} alt="Logo of Site " className="mx-auto w-40" />
        </div>
        <div className="login_heading text-center">
            <span className='text-5xl font-semibold tracking-wider text-slate-600'>Login into Your Account</span>
        </div>
        <div className="login_form my-7">
            <form action="#">
                <div className="email flex flex-col w-2/5 my-4 ml-96">
                    <label htmlFor="email" className='label-form'>Email</label>
                    <input type="text" name="email" placeholder="Enter Your Email" className='input-form'/>
                </div>

                <div className="email flex flex-col w-2/5 my-4 ml-96">
                    <label htmlFor="email" className='label-form'>Password</label>
                    <input type="text" name="email" placeholder="Enter Your Password" className='input-form'/>
                </div>

                <div className="extras flex justify-center gap-x-[17rem] my-5">
                    <div className="forgot_pass">
                        <a href="#" className='text-lg font-normal text-slate-500'>Forgot password?</a>
                    </div>
                    <div className="dont_accont">
                        <a href="#" className='text-lg font-normal text-slate-500'>Don't have Account!!</a>
                    </div>
                </div>
                <div className="login_btn text-center my-3">
                <button className="w-[43%]  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>

                </div>
            </form>
        </div>
        </>
    )
}

export default Login