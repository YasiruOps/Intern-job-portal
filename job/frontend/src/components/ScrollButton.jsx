
import React, {useState} from 'react'; 
import {FaArrowCircleDown} from 'react-icons/fa'; 
import { Button } from 'react-bootstrap';

const ScrollButton = () =>{ 
    
  const [visible, setVisible] = useState(true) 
    
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 0){ 
      setVisible(false) 
    }  
    else if (scrolled <= 0){ 
      setVisible(true) 
    } 
  }; 
    
  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
    }); 
  }; 
    
  window.addEventListener('scroll', toggleVisible); 
    
  return ( 
    <button type="button" className="builder_btn2  btn btn-primary" onClick={scrollToBottom} >Video Resume Portal</button>
  ); 
} 
    
export default ScrollButton;