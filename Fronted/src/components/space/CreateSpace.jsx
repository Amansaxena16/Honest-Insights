import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CreateSpace(){
    document.body.style.backgroundColor = 'rgb(236,240,245)'

    return(
        <>
            <div className="space flex w-[90%] my-8 mx-auto bg-white">

            {/* Live Preview section start from here  */}
            <div className="livePreview w-2/5 ml-4">
                <div className="previewHeading text-center my-2 text-[rgb(93,93,255)]">
                    <h1 className="createSpaceHeading">Live Preview</h1>
                </div>
                <div className="preview border-2 border-black">
                    {/* Live Preview Image div start from here  */}
                    <div className="livePreviewImage flex justify-center my-10">
                        <div className="liveImage w-40 h-40 rounded-full bg-[#f0f0f0]">
                            <img src="" alt="" />
                        </div>
                    </div>
                    {/* end here  */}

                    {/* Header div start from here  */}
                    <div className="liveHeader text-center my-3">
                        <h1 className="text-4xl font-bold">Header goes here...</h1>
                    </div>
                    {/* end here  */}

                    {/* Custom Message div start from here  */}
                    <div className="liveMessage text-center">
                        <span className="font-normal text-slate-400 text-lg">Your Custom Message goes here...</span>
                    </div>
                    {/* end here  */}

                    {/* Live Questions div start from here  */}
                    <div className="liveQuestion mx-5">
                        <div className="question_heading">
                            <span className="text-xl font-semibold">Questions</span>
                        </div>
                        <div className="quest_list mx-4">
                            <h5 className="text-slate-400 my-1 text-base font-normal">
                            <span>
                            <FontAwesomeIcon icon={faCircle} size='2xs' style={{ color: "#d3d3d3" }} />
                            </span>{" "}
                            Who are you / what are you working on?
                            </h5>
                            <h5 className="text-slate-400 my-1 text-base font-normal">
                            <span>
                            <FontAwesomeIcon icon={faCircle} size='2xs' style={{ color: "#d3d3d3" }} />
                            </span>{" "}
                            How has [our product / service] helped you?
                            </h5>
                            <h5 className="text-slate-400 my-1 text-base font-normal">
                            <span>
                            <FontAwesomeIcon icon={faCircle} size='2xs' style={{ color: "#d3d3d3" }} />
                            </span>{" "}
                            What is the best thing about [our product / service]?
                            </h5>
                        </div>
                    </div>
                    {/* end here  */}

                    {/* rating start div start from here  */}
                    <div className="ratingStart text-center my-7"> 
                        <span><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /></span>
                        <span><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /></span>
                        <span><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /></span>
                        <span><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /></span>
                        <span><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /></span>
                    </div>
                    {/* end here  */}

                    <div className="sendBtn text-center">
                        <button className="bg-[rgb(93,93,255)] text-white font-semibold py-[.7rem] px-[7rem] my-9 rounded-md shadow hover:bg-[rgb(66,66,201)]">Send in Text</button>
                    </div>
                </div>
            </div>
            {/* Live Preiview section end here  */}

            {/* Space Form section start from here  */}
            <div className="spaceForm w-3/5 text-center">
                <div className="formHeading text-center my-2 text-[rgb(93,93,255)]">
                    <h1 className="createSpaceHeading">Create a New Space</h1>
                    <h3 className="text-slate-600 font-medium">After the Space is created, it will generate a dedicated page for collecting Feedback.</h3>
                </div>
                <div className="form mx-8">
                    <form action="#">
                        {/* Space Name div start from here  */}
                        <div className="spaceName spaceDiv ">
                            <label htmlFor="name" className="space_Label">Space Name</label>
                            <input type="text" name="name" className="space_Input" placeholder="Your's Space Name..."/>
                            <span className="text-left text-sm font-semibold">Public URL is: testimonial.to/your-space</span>
                        </div>
                        {/* end here */}

                        {/* Space Logo div end here  */}
                        <div className="spaceLogo spaceDiv flex-col">
                            <label htmlFor="logo" className="space_Label">Space Logo</label>
                            <div className="logo_changeBtn flex items-center gap-x-3">
                                <div className="imageArea w-14 h-14 rounded-full  bg-[#f0f0f0]">
                                    <img src="" alt="" />
                                </div>
                                <div className="changeBtn">
                                    <button className="bg-[rgb(93,93,255)] text-white font-semibold py-1 px-2 rounded-md shadow hover:bg-[rgb(66,66,201)]">Change Image</button>
                                    <input type="file" name="logo"/>
                                </div>
                            </div>
                        </div>
                        {/* end here  */}

                        {/* Space Header Title div start from here  */}
                        <div className="spaceName spaceDiv ">
                            <label htmlFor="title" className="space_Label">Header Title</label>
                            <input type="text" name="title" className="space_Input" placeholder="Your's Header Title..."/>
                        </div>
                        {/* end here  */}

                        {/* Space Custome Message div start from here  */}
                        <div className="spaceMessage spaceDiv">
                            <label htmlFor="message" className="space_Label">Custom Message</label>
                            <textarea name="message" className="space_Input h-28" placeholder="Write a warm message to your customers, and give them simple directions on how to make the best Honest Insights..."></textarea>
                        </div>
                        {/* end here  */}

                        {/* Question div start from here  */}
                        <div className="spaceQuestion spaceDiv">
                            <label htmlFor="questions" className="space_Label">Questions</label>
                            <input type="text" name="questions" className="space_Input" placeholder="Who are you / what are you working on ? "/>
                            <input type="text" name="questions" className="space_Input" placeholder="How has [our product / service] helped you ?"/>
                            <input type="text" name="questions" className="space_Input" placeholder="What is the best thing about [our product / service]"/>
                        </div>
                        {/* end here  */}

                        {/* Collect Start div star from here  */}
                        <div className="starRating flex items-center gap-x-2">
                            <label htmlFor="rating" className="space_Label">Collect Star Rating</label>
                            <input type="checkbox" name="rating" className="space_Input"/>
                        </div>
                        {/* end here  */}

                        <div className="spaceBtn">
                            <button className="bg-[rgb(93,93,255)] text-white font-semibold py-[.7rem] px-[13rem] my-9 rounded-md shadow hover:bg-[rgb(66,66,201)]">Create Your Space</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Space Form section end here */}

            </div>
        </>
    )
}

export default CreateSpace