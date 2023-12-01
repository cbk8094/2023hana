import '../App.css';
import './style/Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faDownload, faMicrophone } from '@fortawesome/free-solid-svg-icons';

// import { Link } from "react-router-dom";


function Card(){
  return(
    <>
  <div style={{background:'#f6faf6'}}> 
    <div className='justify-content-center up-card'>
      <div className='container'>
        <ul className='line-bind'> 
          <li className='card'>
            <div className='head'>
              <a href="#">하나금융그룹</a>
              <button className='arrow'></button>
            </div>
            <div className='body'>
              <p className='content'>
                함께 성장하며 
                <br/>
                행복을 나누는 금융
              </p>
              <p className='footer'>
                직원, 손님, 사회 모두가 행복한
                <br/>
                금융회사로 성장해갑니다
              </p>
            </div>
          </li>
          <li className='card2'>
            <div className='head'>
              <a href="#">글로벌 네트워크</a>
              <button className='arrow'></button>
            </div>
            <div className='body'>
              <p className='content'>
                전 세계 25개 지역 
                <br/>
                211개의 네트워크
              </p>
              <p className='footer'>
                국내 최대의 글로벌 네트워크를 통해
                <br/>
                세계적인 금융그룹으로 도약합니다.
              </p>
            </div>
          </li>
          <li className='card3'>
            <div className='head'>
              <a href="#">주가정보</a>
              <button className='arrow'></button>
            </div>
            <div className='body'>
              <p className='stock-title'>
                하나금융지주(086790)
              </p>
              <p className='stock-body'>
                <strong>41,650</strong>
                KRW
              </p>
              
              <p className='stock-footer'>전일대비
              <FontAwesomeIcon icon={faCaretUp} style={{ color: "#ff0000" }} className='stock-arrow'/>
              400원 (0.97%)</p>
             
            </div>
          </li>
        </ul>
      </div>
    </div>  
    
    <div className='justify-content-center py-3 up-card'>
      <div className='container'>
        <ul className='line-bind'> 
          <li className='card4'>
            <div className='head'>
              <a href="#">ESG REPORT</a>
              <button className='arrow'></button>
            </div>
            <div className='body'>
              <p className='content'>
                2022년 
                <br/>
                지속가능경영보고서
              </p>
              <div className='card-btn'>
                <p>
                  PDF(국문)
                  <FontAwesomeIcon icon={faDownload} style={{ color: "#666", paddingLeft:'5px'}}/>
                  </p>
              </div>
              <div className='card-btn2'>
                <p>
                  PDF(영문)
                  <FontAwesomeIcon icon={faDownload} style={{ color: "#666", paddingLeft:'5px'}}/>
                  </p>
              </div>
            </div>
          </li>
          <li className='card5'>
            <div className='head'>
              <a href="#">ANNUAL REPORT</a>
              <button className='arrow'></button>
            </div>
            <div className='body'>
              <p className='content'>
                2022년 
                <br/>
                연차보고서
              </p>
              <div className='card-btn3'>
                <p>
                  Annual Report(Full)
                  <FontAwesomeIcon icon={faDownload} style={{ color: "#666", paddingLeft:'5px'}}/>
                  </p>
              </div>
              <div className='card-btn4'>
                <p>
                Annual Report(only)
                  <FontAwesomeIcon icon={faDownload} style={{ color: "#666", paddingLeft:'5px'}}/>
                  </p>
              </div>
            </div>
          </li>
          <li className='card6'>
            <div className='head'>
              <a href="#">경영실적</a>
              <button className='arrow'></button>
            </div>
            <div className='body'>
              <p className='content'>
                2023년 
                <br/>
                3분기 경영실적 발표
              </p>
              <div className='card-btn5'>
                <p>
                  PDF
                  <FontAwesomeIcon icon={faDownload} style={{ color: "#666", paddingLeft:'5px'}}/>
                  </p>
              </div>
              <div className='card-btn6'>
                <p>
                Web Casting
                  <FontAwesomeIcon icon={faMicrophone} style={{ color: "#666", paddingLeft:'5px'}}/>
                  </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>   
    </>
  )
}
export default Card;