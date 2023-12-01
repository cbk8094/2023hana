
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TbPlayerPauseFilled } from "react-icons/tb";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style/Swipe.scss';
export default function App() {
  const imgPath1 = process.env.PUBLIC_URL + '/img/swiper1.jpg';
  const imgPath2 = process.env.PUBLIC_URL + '/img/swiper2.png';
  const imgPathTxt1 = process.env.PUBLIC_URL + '/img/swiper1text.png';
  const imgPathTxt2 = process.env.PUBLIC_URL + '/img/swiper2text.png';
  return (
    <>
      <div className="mainContent">
                <Swiper
                    slidesPerView={1}
                    navigation={false} modules={[Navigation]} className='mb-5' loop autoplay>
                    <SwiperSlide style={{background:"rgb(14, 107, 70)" ,height:'100%'}}>
                        <div className="swiper-mainWrap">
                            <img className='swiper-mainBg' src={imgPath1} alt="" />
                        </div>
                        <div className="swiper-mainInner">
                            <img className='swiper-mainText' src={imgPathTxt1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{background:"rgb(14, 140, 141)" ,position:'relative', top:'0'}}>
                        <div className="swiper-mainWrap">
                            <img className='swiper-mainBg' src={imgPath2} alt="" />
                        </div>
                        <div className="swiper-mainInner">
                            <img className='swiper-mainText' src={imgPathTxt2} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
                <div className='container'>
                  <div className='swiper-fix'> 
                    <div className='swiper-fix-f'>
                      <div className='swiper-fix-hd'>
                        <p>
                          하나금융그룹 소셜미디어 연간
                          <br/>
                          대행사 선정 입찰공고
                        </p>
                      </div>
                      <div>
                        <p>
                          2024년 하나금융그룹 소셜미디어
                          <br/>
                          연간대행사 선정을 위해 다음과 같
                          <br/>
                          이 공고합니다.
                        </p>
                      </div>
                      <div className='swiper-btn'>
                        <a>자세히 보기</a>
                      </div>
                    </div>
                  </div>
                </div>

    </>
  );
}