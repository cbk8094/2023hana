
import './style/Footer.scss';
import 'swiper/css';

function Footer(){
  return(
  <>
  
    <div className='banner-bg'>
      <div className='justify-content-center banner-w'>
        <div className='container banner-inner'>
          <p className='left-txt'>
            변화를 주도하는
            <br/>
            글로벌 인재를 기다립니다.
          </p>
          <div className='footer-column'>
          <div>
            <div className='footer-align button1'><a>인재상 알아보기</a><button className='footer-arrow'></button></div>
            <div className='footer-align button2'style={{marginTop:'15px'}}><a style={{color:'white'}}>채용공고 바로보기</a><button className='footer-arrow2'></button></div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{background:'#111'}}>
      <div className='justify-content-center'>
        <div className='container'>
          <ul className='footer-b-hd'>
            <li>개인정보처리방침</li>
            <li className='ml-1'>신용정보활용체제</li>
            <li className='ml-1'>고객정보취급방침</li>
            <li className='ml-1'>하나맵</li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{background:'#111'}}>
      <div className='justify-content-center'>
        <div className='container footer-bottom'>
          <ul>
            <li className='footer-logo'></li>
            <div className='footer-f'>
              <li >서울특별시 중구 을지로 66</li><span style={{marginLeft:'1rem'}}>02.2002.1110</span>
            </div>
            <li style={{paddingTop:'0.3rem'}}>Copyright ⓒ 2022 HANA FINANCIAL GROUP. All rights Reserved.</li>
          </ul>
          <div>
            <div className='footer-right-logo'></div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default Footer;