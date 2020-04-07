import React from 'react';

export default function ContactForm() {
    let contactFormMarkup = (
      
        <section className="contact-section  py-2 p-md-2">
        <div className="container">
            <form id="contact-form" className="contact-form col-lg-8 mx-lg-auto" method='POST'>
                <input type='hidden' name='form-name' value='form 1' />
                <h3 className="text-center mb-3">Write a message for me below</h3>
                <div className="form-row">                                                           
                    <div className="form-group col-md-6">
                        <label className="sr-only">Name</label>
                        <input type="text" className="form-control" id="cname" name="name" placeholder="Name" required />
                    </div>                    
                    <div className="form-group col-md-6">
                        <label className="sr-only">Email</label>
                        <input type="email" className="form-control" id="cemail" name="email" placeholder="Email" required />
                    </div>
                    
                    <div className="form-group col-12">
                        <label className="sr-only">Your message</label>
                        <textarea className="form-control" id="cmessage" name="message" placeholder="Enter your message" rows="10" required="" aria-required="true"></textarea>
                    </div>
                     <div className="form-group col-12">
                        <button type="submit" className="btn btn-block btn-dark py-2">Send Now</button>
                    </div>                           
                </div>
            </form>
        </div>
    </section>
    );

    return contactFormMarkup;
}
