
import '../App.css';
import './style/News.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload} from '@fortawesome/free-solid-svg-icons';

export default function News() {
  const imgPath1 = process.env.PUBLIC_URL + '/img/more.svg';
  const News1 = process.env.PUBLIC_URL + '/img/News1.jpg';
  const News2 = process.env.PUBLIC_URL + '/img/News2.jpg';
  const News3 = process.env.PUBLIC_URL + '/img/News3.jpg';
  const News4 = process.env.PUBLIC_URL + '/img/News4.jpg';
  
 
  return (
    <>
      <div className='justify-content-center' style={{paddingTop: '40px'}}>
        <div className='container more-between'>
          <p className='news-title'>하나소식</p>
          <a className='align-center more'>More <img src={imgPath1} alt="" style={{ paddingLeft: '10px' }} /></a>
        </div>
      </div>
      <div className='justify-content-center'>
        <div className='container more-between'>
          <a href="#">
            <div className='img-wrap'>
              <img src={News1} alt="" />
            </div>
            <div className='new-card'>
              <div className='bedge'>
                <p>하나뉴스</p>
              </div>
              <div>
                <p className='new-body'>
                  하나캐피탈, 토스페이먼츠와 공급망 금융 및
                  <br />
                  전자결제 활성화를 위한 업무협약 체결
                </p>
                <p className='date'>2023.11.24</p>
              </div>
            </div>
          </a>
          <a href="#">
            <div className='img-wrap'>
              <img src={News2} alt="" />
            </div>
            <div className='new-card'>
              <div className='bedge'>
                <p>하나뉴스</p>
              </div>
              <div>
                <p className='new-body'>
                  하나금융그룹, 보성군과 함께 국공링 초동
                  <br />
                  친구하나어린이집 개원
                </p>
                <p className='date'>2023.11.24</p>
              </div>
            </div>
          </a>
          <a href="#">
            <div className='img-wrap'>
              <img src={News3} alt="" />
            </div>
            <div className='new-card'>
              <div className='bedge'>
                <p>하나뉴스</p>
              </div>
              <div>
                <p className='new-body'>
                  하나은행, 지금!RP에 입금하면 적금이 최대
                  <br />
                   연 5.0% 이벤트 시행
                </p>
                <p className='date'>2023.11.24</p>
              </div>
            </div>
          </a>
          <a href="#">
            <div className='img-wrap'>
              <img src={News4} alt="" />
            </div>
            <div className='new-card'>
              <div className='bedge'>
                <p>하나뉴스</p>
              </div>
              <div>
                <p className='new-body'>
                 하나증권,'토큰증권 생태계 발전 세미나' 개
                  <br />
                  최
                </p>
                <p className='date'>2023.11.24</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className='justify-content-center' style={{paddingTop: '70px', paddingBottom: '70px'}}>
        <div className='container between'>
          <div className='news-secon'>
            <div className='news-secon-title'>
              <p className='news-title'>기업공시</p>
              <a className='align-center more'>More <img src={imgPath1} alt="" style={{ paddingLeft: '10px' }} /></a>
            </div>
            <div className='news-width'>
              <p className='news-secon-body'><a>기업설명회(IR)개최(안내공시)</a><p>2023.11.28</p></p>
            </div>
            <div className='news-width news-top-p'>
              <p className='news-secon-body'><a>주요사항보고서(상각형조건부자본증권발행결정)</a><p>2023.11.24</p></p>
            </div>
            <div className='news-width news-top-p'>
              <p className='news-secon-body'><a>기업설명회(IR)개최(안내공시)</a><p>2023.11.15</p></p>
            </div>
          </div>
          <div>
          </div>
          <div className='news-secon2'>
            <div className='news-secon-title'>
              <p className='news-title'>경영공시</p>
              <a className='align-center more'>More <img src={imgPath1} alt="" style={{ paddingLeft: '10px' }} /></a>
            </div>
            <div className='between-w'>
              <div>
                <p>2023 3분기<br/>하나금융지주회사 현황</p>
                <div className='pt-1'>
                  <a href="#">PDF<FontAwesomeIcon icon={faDownload} style={{ color: "#666", paddingLeft:'10px'}}/></a>
                </div>
              </div>
              <div>
                <p>2023 3분기<br/>하나금융지주회사 현황</p>
                <div className='pt-1'>
                  <a href="#">PDF<FontAwesomeIcon icon={faDownload} style={{ color: "#666", paddingLeft:'10px'}}/></a>
                </div>
              </div>
              <div>
                <p>2023 3분기<br/>하나금융지주회사 현황</p>
                <div className='pt-1'>
                  <a href="#">PDF<FontAwesomeIcon icon={faDownload} style={{ color: "#666", paddingLeft:'10px'}}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}