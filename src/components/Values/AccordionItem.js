import { useState } from "react";

const AccordionItem = ({value, response}) => {

  const [resStyle, changeResStyle] = useState({height: 0, padding: 0});
  const [iconStyle, changeIconStyle] = useState({transform: 'rotate(0deg)'});
  const [isOpen, changeIsOpen] = useState(false);
  const toggle = () => {
    if(isOpen){
      changeResStyle({height: 0, padding: 0});
      changeIconStyle({transform: 'rotate(0deg)'});
      changeIsOpen(false);
    } else {
      changeResStyle({height: 'auto', padding: '2rem'});
      changeIconStyle({transform: 'rotate(-180deg)'});
      changeIsOpen(true);
    }
  }

  return(
    <div className='accordion-item'>
      <div className='accordion-item-question'>
        <p>{value}</p>
        <i className="fa-solid fa-caret-down" style={iconStyle} onClick={toggle}></i>
      </div>
      <div className='accordion-item-response' style={resStyle}>
        <p>
          {response}
        </p>
      </div>
    </div>
  );
}

export default AccordionItem;
