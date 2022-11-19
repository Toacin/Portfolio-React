import './ContactForm.css'

export default function ContactForm() {

    return (
        <div className ="d-flex my-5">
            <form className ="offset-3 col-6 my-2">
                <div className ="d-flex justify-content-center flex-wrap my-5">
                    <h2 className="text-light py-3">Send Me A Message!</h2>
                    <div className="d-flex col-10 justify-content-between m-3">
                        <div className ="col-5">
                            <input type="text" className ="customInput" placeholder='Enter Subject Here' required/>
                            <span className ="form-helper-text">Subject</span>
                        </div>
                        <div className ="col-5">
                            <input type="email" className ="customInput" placeholder='example@email.com' required/>
                            <span className ="form-helper-text">Email</span>
                        </div>
                    </div>
                    <div className ="col-10 m-3">
                        <textarea id="contactForm"  className ="customTxtArea" rows="4" placeholder='Enter Message Here' required contentEditable></textarea>
                        <span className ="form-helper-text">Message</span>
                    </div>
                    <button className="col-3 btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}