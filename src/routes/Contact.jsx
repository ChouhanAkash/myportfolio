import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import ContactForm from '../components/ContactForm';
const Contact=()=>{
    return (<div><Navbar/>
    <Heroimg2 heading="CONTACT" text="Lets have chat"/>
    <ContactForm/>
    <Footer/></div>);
}
export default Contact