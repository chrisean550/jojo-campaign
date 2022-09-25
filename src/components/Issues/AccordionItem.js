import { useState } from "react";

const AccordionItem = () => {

  const [resStyle, changeResStyle] = useState({height: 0, padding: 0});
  const [iconStyle, changeIconStyle] = useState({transform: 'rotate(0deg)'});
  const [isOpen, changeIsOpen] = useState(false);
  const toggle = () => {
    if(isOpen){
      changeResStyle({height: 0, padding: 0});
      changeIconStyle({transform: 'rotate(0deg)'});
      changeIsOpen(false);
    } else {
      changeResStyle({height: '16rem', padding: '2rem'});
      changeIconStyle({transform: 'rotate(-180deg)'});
      changeIsOpen(true);
    }
  }

  return(
    <div className='accordion-item'>
      <div className='accordion-item-question'>
        <p>How do I feel about this issue?</p>
        <i className="fa-solid fa-caret-down" style={iconStyle} onClick={toggle}></i>
      </div>
      <div className='accordion-item-response' style={resStyle}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default AccordionItem;
