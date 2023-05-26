import { React,useState }  from "react";
import Navbar from "./menu";
import { Link} from '@chakra-ui/react'
import {  FaGithubSquare,FaInstagramSquare,FaLinkedin,FaTwitterSquare } from 'react-icons/fa';
import { send } from 'emailjs-com';
import Footer from "./footer";
import { Textarea } from "@chakra-ui/react";



const Contact = () => {
    
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_urav2t8',
          'template_9ftebr8',
          toSend,
          '7wyChFJFakFyqJg8v'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <div className="container">
             <Navbar/>
             <div id="contactWrapper">
            <h1>Get in touch</h1>
            <p>Email:cemekaoji@gmail.com</p>
        </div>
        <div className="icons">
                        <Link href="https://github.com/christianHitchcock" isExternal  ><FaGithubSquare className="icon" /></Link>
                        <Link href= "https://www.instagram.com/christian__hitchcock" isExternal ><FaInstagramSquare className="icon"/></Link>
                        <Link href=" https://www.linkedin.com/in/christian-e-a99152183/" isExternal ><FaLinkedin className="icon"/></Link>
                        <Link href= "https://twitter.com/Theaftercolors" isExternal ><FaTwitterSquare className="icon"/></Link>  
                       </div> 
        <form onSubmit={onSubmit}>

            <input
            type='text'
            name='from_name'
            placeholder='Name'
            value={toSend.from_name}
            onChange={handleChange}
            />

    <input
    type='email'
    name='reply_to'
    placeholder='email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <Textarea
    type='text'
    name='message'
    placeholder='Message'
    value={toSend.message}
    onChange={handleChange}
  />
  
  <button type='submit' id="btn">Submit</button>
</form>
        <Footer/>
        </div>
    )
}

export default Contact;