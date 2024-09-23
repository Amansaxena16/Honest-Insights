import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';

function CreateSpace(){


    document.body.style.backgroundColor = 'rgb(236,240,245)'

    // react hook form script start from here 
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm()
    // end here 
    
    // Image Input script start from here 
    const inputRef = useRef(null)
    function HandleButtonClick(){
        inputRef.current.click()
    }
    // End here 

    // Live Preview Script start from here 
    const [imagePreview, setImagePreview] = useState(null)
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [quest1, setQuest1] = useState("")
    const [quest2, setQuest2] = useState("")
    const [quest3, setQuest3] = useState("")
    const [selectlLogo, setSelectedLogo] = useState(null)

    function HandleImageChange(e){
        const file = e.target.files[0]
        if(file){
            setSelectedLogo(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    function HandleTitleChange(e){
        setTitle(e.target.value)
    }
    function HandleMessageChange(e){
        setMessage(e.target.value)
    }
    function HandleQuest1Change(e){
        setQuest1(e.target.value)
    }
    function HandleQuest2Change(e){
        setQuest2(e.target.value)
    }
    function HandleQuest3Change(e){
        setQuest3(e.target.value)
    }
    // End here 

    // OnSubmit script start from here
    async function onSubmit(data){
        await new Promise((resolve) => setTimeout(resolve, 3000))
        const formData = new FormData

        // Append form field
        formData.append('name',data.name)
        formData.append('title',data.title)
        formData.append('message',data.message)
        formData.append('quest1',data.question1)
        formData.append('quest2',data.question2)
        formData.append('quest3',data.question3)
        formData.append('starRating',data.rating)

        if(selectlLogo){
            formData.append('logo',selectlLogo)
        }

        // Submitting the form data to the backend
        try{
            const response = await fetch('http://127.0.0.1:8000/postSpaceData/', {
                method: 'POST',
                body: formData
            })

            if(response.ok){
                console.log('Data pahuch gaya hai mitro!!')
                reset()
                selectlLogo(null)
                setImagePreview(null)

            }
            else{
                console.log('Bhaak error aa gaya!!')
            }
        }catch(error){
            console.error('Error while submitting form', error)
        }
    }
    // end here 

    return(
        <>
            <div className="space flex w-[90%] my-8 mx-auto bg-white">

            {/* Live Preview section start from here  */}
            <div className="livePreview w-2/5 ml-4">
                <div className="previewHeading text-center my-2 text-[rgb(93,93,255)]">
                    <h1 className="createSpaceHeading">Live Preview</h1>
                </div>
                <div className="preview border-[1px] border-slate-500">
                    {/* Live Preview Image div start from here  */}
                    <div className="livePreviewImage flex justify-center my-10">
                        <div>
                            <img src={imagePreview} alt="" className="liveImage w-44 h-44 rounded-full bg-slate-300"/>
                        </div>
                    </div>
                    {/* end here  */}

                    {/* Header div start from here  */}
                    <div className="liveHeader text-center my-3">
                        <h1 className="text-4xl font-bold" id='liveHeader'>{title ? title : "Header goes here..."}</h1>
                    </div>
                    {/* end here  */}

                    {/* Custom Message div start from here  */}
                    <div className="liveMessage text-center">
                        <span className="font-medium text-slate-400 text-lg">{message ? message : "Your Custom Message goes here..."}</span>
                    </div>
                    {/* end here  */}

                    {/* Live Questions div start from here  */}
                    <div className="liveQuestion mx-5">
                        <div className="question_heading">
                            <span className="text-xl font-semibold">Questions</span>
                        </div>
                        <div className="quest_list mx-4">
                            <h5 className="text-slate-600 font-medium my-1 text-base ">
                            <span>
                            <FontAwesomeIcon icon={faCircle} size='2xs' style={{ color: "#d3d3d3" }} />
                            </span>{" "}
                            {quest1 ? quest1 : "Who are you / what are you working on?"}
                            </h5>
                            <h5 className="text-slate-600 my-1 text-base font-medium">
                            <span>
                            <FontAwesomeIcon icon={faCircle} size='2xs' style={{ color: "#d3d3d3" }} />
                            </span>{" "}
                            {quest2 ? quest2 : "How has [our product / service] helped you?"}
                            </h5>
                            <h5 className="text-slate-600 my-1 text-base font-medium">
                            <span>
                            <FontAwesomeIcon icon={faCircle} size='2xs' style={{ color: "#d3d3d3" }} />
                            </span>{" "}
                            {quest3 ? quest3 : "What is the best thing about [our product / service]?"}
                            </h5>
                        </div>
                    </div>
                    {/* end here  */}

                    {/* rating start div start from here  */}
                    <div className="ratingStart text-center my-6"> 
                        <span><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /></span>
                        <span><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /></span>
                        <span><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /></span>
                        <span><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /></span>
                        <span><FontAwesomeIcon icon={faStar} size="lg" style={{color: "#FFD43B",}} /></span>
                    </div>
                    {/* end here  */}

                    <div className="sendBtn text-center">
                        <button className="bg-[rgb(93,93,255)] text-white font-semibold py-[.7rem] px-[7rem] my-5 rounded-md shadow hover:bg-[rgb(66,66,201)]">Send in Text</button>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Space Name div start from here  */}
                        <div className="spaceName spaceDiv ">
                            <label htmlFor="name" className="space_Label">Space Name</label>
                            <input className="space_Input"
                            {...register("name",
                                {
                                    required: true, 
                                    minLength: {value: 5, message: "Space Name must have 5 Character Length..."}, 
                                    maxLength: {value: 30, message: "Not more than : 30"},
                                })}  
                            type="text" placeholder="Your's Space Name..." />
                            {errors.name && <span className='error_message_span'>{errors.name.message}</span>}
                            <span className="text-left text-sm font-semibold">Public URL is: testimonial.to/your-space</span>
                        </div>
                        {/* end here */}

                        {/* Space Logo div start from here  */}
                        <div className="spaceLogo spaceDiv flex-col">
                            <label htmlFor="logo" className="space_Label">Space Logo</label>
                            <div className="logo_changeBtn flex items-center gap-x-3">
                                <div className="w-14 h-14 rounded-full overflow-hidden">
                                    <img src={imagePreview} alt="" className="w-full h-full bg-slate-300"/>
                                </div>
                                <div className="changeBtn">
                                    <button onClick={HandleButtonClick} className="bg-[rgb(93,93,255)] text-white font-semibold py-1 px-2 rounded-md shadow hover:bg-[rgb(66,66,201)]">Change Image</button>
                                    <input type="file" className='hidden' onChange={HandleImageChange} ref={inputRef}/>
                                </div>
                            </div>
                        </div>                                         
                        {/* end here  */}

                        {/* Space Header Title div start from here  */}
                        <div className="spaceName spaceDiv ">
                            <label htmlFor="title" className="space_Label">Header Title</label>
                            <input {...register("title", 
                                {
                                    required: true, 
                                    minLength: {value: 10, message: "Header Title must have 10 Character Length..."}, 
                                    maxLength: {value: 50, message: "Not More than : 50 "},
                                })} type="text" className="space_Input" placeholder="Your's Header Title..."
                                onChange={HandleTitleChange} value={title}/>
                                {errors.title && <span className='error_message_span'>{errors.title.message}</span>}
                        </div>
                        {/* end here  */}
 
                        {/* Space Custome Message div start from here  */}
                        <div className="spaceMessage spaceDiv">
                            <label htmlFor="message" className="space_Label">Custom Message</label>
                            <textarea {...register("message", {
                                required: true, 
                                minLength: {value: 10, message: "Custom Message must have 10 Character Length..."}, 
                                maxLength: {value: 200, message: "Not More than : 200"},
                                })} className="space_Input h-28" placeholder="Write a warm message to your customers, and give them simple directions on how to make the best Honest Insights..."
                                onChange={HandleMessageChange} value={message}></textarea>
                                {errors.message && <span className='error_message_span'>{errors.message.message}</span>}
                        </div>
                        {/* end here  */} 

                        {/* Question div start from here  */}
                        <div className="spaceQuestion spaceDiv">
                            <label htmlFor="questions" className="space_Label">Questions</label>
                            <input {...register("question1", 
                            {
                                required: true,
                                minLength : {value: 10, message: "Question must have 10 character Length..."},
                                maxLength: {value: 40, message: "Not more than : 80"},
                            })} type="text" className="space_Input" placeholder="Who are you / what are you working on ? "
                            onChange={HandleQuest1Change} value={quest1}/>
                            {errors.question1 && <span className='error_message_span'>{errors.question1.message}</span>}

                            <input {...register("question2", 
                            {
                                minLength: {value: 10, message: "Question must have 10 character Lenght..."},
                                maxLength: {value: 40, message: "Not more than : 80"}
                            })} type="text" className="space_Input" placeholder="How has [our product / service] helped you ?"
                            onChange={HandleQuest2Change} value={quest2}/>
                            {errors.question2 && <span className='error_message_span'>{errors.question2.message}</span>}
                            <input {...register("question3", 
                            {
                                minLength: {value: 10, message: "Question must have 10 character Lenght..."},
                                maxLength: {value: 40, message: "Not more than : 80"}
                            })} type="text" className="space_Input" placeholder="What is the best thing about [our product / service]"
                            onChange={HandleQuest3Change} value={quest3}/>
                            {errors.question3 && <span className='error_message_span'>{errors.question3.message}</span>}
                        </div>
                        {/* end here  */}

                        {/* Collect Start div star from here  */}
                        <div className="starRating flex items-center gap-x-2">
                            <label htmlFor="rating" className="space_Label">Collect Star Rating</label>
                            <input {...register("rating")} type="checkbox" name="rating" className="space_Input"
                            defaultChecked={true}/>
                        </div> 
                        {/* end here  */}

                        <div className="spaceBtn">
                            <button disabled={isSubmitting} className="bg-[rgb(93,93,255)] text-white font-semibold py-[.7rem] px-[13rem] my-9 rounded-md shadow hover:bg-[rgb(66,66,201)]" type='submit'>
                                {isSubmitting ? "Creating Your Space..." : "Create Your Space"} 
                            </button>
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