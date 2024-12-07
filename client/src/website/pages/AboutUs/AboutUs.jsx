import { useEffect, useRef, useState } from 'react';
import './AboutUs.css';
import Nav_bar from '../../components/Nav_bar/Nav_bar';
import axios from 'axios';

function AboutUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const database_post = async(obj)=>{
    try {
     let responce = await axios.post("https://demo-server-ns4l.onrender.com/post", obj)
     console.log(responce);
    } catch (error) {
      console.log(error);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = { name, email, message }
    database_post(obj)
  };

  let prem = useRef(null)
  let email1 = useRef(null)

  return (
    <>
    <Nav_bar />
    <div className="about-us-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            ref={prem}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            ref={email1}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
    </>
  );
}

export default AboutUs;
