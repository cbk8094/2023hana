import '../App.css';
import './style/HeaderStyle.scss';
import 'swiper/css';
// import { Link } from "react-router-dom";

import Swipe from './Swipe';
import Card from './Card';

function Nav(){
  return(
    <>
    <div className='nav-container'>
      <div>
        <div className='logo'></div>
        <ul className='ul'>
          <li className='hana-bold li'>
            그룹소개
            </li>
          <li className='hana-bold li'>기업지배구조</li>
          <li className='hana-bold li'>ESG경영</li>
          <li className='hana-bold li'>투자정보</li>
          <li className='hana-bold li'>PR센터</li>
        </ul>
        <div>
          <button className='svg-button1'></button>
          <button className='svg-button2'></button>
          <button className='svg-button3'></button>
          <button className='svg-button4'></button>
        </div>
    </div>
  </div>
  <Swipe/>
  <Card/>
  

  </>
  )
}
export default Nav;