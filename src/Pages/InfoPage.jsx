import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VerifiedIcon from '@mui/icons-material/Verified';
import axios from 'axios';
import { Star } from '@mui/icons-material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useNavigate} from "react-router-dom";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const InfoPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [data, setData] = useState([]);
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4"

  useEffect(() => {
      try{
          let res = axios.get('https://ymtaz.sa/api/client/lawyer/5218',{headers:{
            Authorization: `Bearer ${token}`,
          }});
          res.then((result) => {
          const resData = result.data.data.lawyer.services;
          setData(resData);
          }).catch((error) => {
          console.error('حدث خطأ:', error);
          });
      }catch(err) {
          console.log(err);
      }
  },[]);
  
  return (
    <div className='pg4'>
      <div className="right">
          <h4>معلومات الحجز</h4>
          <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="اوقات العمل" {...a11yProps(0)} />
              <Tab label="أسعار الخدمات" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="time-work">
              <div className="card-work">
                <div className="card-head">
                الاثنين 02/03
                </div>
                <div className="card-body">
                  <span className='active'>10:00 ص</span>
                  <span>11:00 ص</span>
                  <span>11:00 ص</span>
                  <span>11:00 ص</span>
                  <span>11:00 ص</span>
                  <span>11:00 ص</span>
                </div>
              </div>
              <div className="card-work">
                <div className="card-head">
                غدا
                </div>
                <div className="card-body">
                  <span className='active'>10:00 ص</span>
                  <span>11:00 ص</span>
                  <span>11:00 ص</span>
                  <span>11:00 ص</span>
                  <span>11:00 ص</span>
                  <span>11:00 ص</span>
                </div>
              </div>
              <div className="card-work">
                <div className="card-head">
                اليوم 
                </div>
                <div className="card-body">
                  <span>لا يوجد مواعيد متاحة</span>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
          <div className="ser-boxes">
            
            {data?.map((ser,i) => (
              <div className="ser-box">
                <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                  <div className="ser-left">
                    <span className="text">سعر الخدمة</span>
                    <span className="price"> <span className='rs'>ر.س </span><span>{ser?.min_price}</span></span>
                  </div>
                  <div className="ser-right" style={{display: "flex", gap: "10px"}}>
                    <div className="info">
                      <h6>{ser?.title}</h6>
                      <p>{ser?.intro}</p>
                    </div>
                    <div className="ser-img">
                      <img src={ser?.image} alt="" />
                    </div>
                  </div>
                </div>
                <div className="ser-btn">
                  <button>طلب الخدمة</button>
                </div>
              </div>
            ))}
          </div>
          </CustomTabPanel>
        </Box>
      </div>
      <div className="left">
          <div className="personal-info">
            <div className="head">
              <h3>المعلومات الشخصية</h3>
            </div>
            <div className="details-box">
              <div className="info">
                <h6>عبد العزيز عبد الرحمن الربعي</h6>
                <div className='sub-title'>
                    <img src="https://s3-alpha-sig.figma.com/img/3de5/72db/c363e9209e1fcbff2ceee3de36b99c13?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R656njHVUD9nUkvRDo~vCuBewpHN~9BlrP8UF-QMUNDfYAXVvAp7n2v1tVd8n6I4jCuZqj3NFhi3mBVmYb9A7yUuFZIbo0xoYfdUXQ657d6VrvrARyrya2pnUit1XS5Dcz1C~kDtpnDi8PTgEV15cRQtwCcJZJJ9YuKSwl16s~DSJ2mOTXqJ2OP3dyi57WrHc6xMyzsC4w9XY0HxdrVuzi0uVf1ZEMONpt-zQrUf7fllz7MuX8p2pro7nCUP4~s8jbPmIAsy1K1HoH5uDAhLF5IXqWXnv7WBnx0uC~rH42hzvelUeOHMG01yFbjCuhyJwskqi11JOCLi5lbGOsUBDw__" alt="" />
                    <span>مستشار قانوني </span>
                </div>
                <div className="eval">
                  <span>اظهر التقييمات</span>
                  <p> التقييم العام من 154 من العملاء</p>
                  <div className="stars-box">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
                <div className="comment">
                  <div className="top">
                    <p>تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية</p>
                    <FormatQuoteIcon />
                  </div>
                  <div className="bottom">
                    <span>الخميس 3 فبراير 2024</span>
                    <span>Abdullah Faleh</span>
                    <div className="stars-box">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                  </div>
                </div>
              </div>
              <div className="personal-img">
                <VerifiedIcon />
                <img src="https://s3-alpha-sig.figma.com/img/9d3d/26c7/bbe4981814e004b83443f6dcb01b0de9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyBXWtd14HhSAk9E-QmdOYoXyr6Olc1-LmykLtSS1Q2lQr0dSbHtK--WZBC~-a7tN6Z9KiuZIcq~LPNpb9SBsZ1Gk9rr2oZMZXgB~8rUgpxS86fvo1FnTe9wbuyjfMQ4IfAzC1rHeqUq9S5jb7ox8A8w6WWKK1cFvmuPTNcg9KOEQgp0qBByvPiNlcUZIVCEqXJkCB2Xgb3xDRp0xGaCtWVRqlB0kzrkQAjZkMs0ZjQqgsu3uqphJxgEKd-UZwjA-kvuD8-vwUKiVKH9z0CWtJxLA~vlmuB6cctatOICZ~tOTQ7VZg-Bj51jqXf8aNrKTGEXm~~qbXOeSGK29oSPnw__" alt="" />
              </div>
            </div>
            
          </div>
          <div className="intro-box">
            <h6>النبذة التعريفية</h6>
            <p>استشاري القانون عبد العزيز عبد الرحمن الربعي وهو محام مرخص في المملكة العربية السعودية، يحمل درجة البكالوريوس في القانون. يتمتع بخبرة تبلغ سنتين في مجال ممارسة القانون</p>
          </div>
          <div className="Customer-eval">
            <div className="head">تقييم العملاء:</div>
            <div className="d-flex">
              <div className="box">
                <div className="num">
                  5/5
                </div>
                <p> تقييم الاستشاري</p>
              </div>
              <div className="box">
                <div className="stars-box">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p>تقييم المنصة</p>
              </div>
              <div className="box">
                <div className="stars-box">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p>التقييم العام</p>
                <p style={{fontSize: "16px"}}> من 154 من العملاء</p>
              </div>
            </div>
            <div className="hr"></div>
            <div className="blog" style={{paddingBottom: "20px"}}>
              <div className="d-flex">
                <div className="box">
                  <div className="num">
                    5
                  </div>
                  <p> تقييم الاستشاري</p>
                </div>
                <div className="box">
                  <div className="stars-box">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <span>التقييم العام</span>
                  <p>“ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية</p>
                </div>
              </div>
              <p className="sub">الخميس 3 فبراير 2024</p>
            </div>
            <div className="hr" style={{height: "1px"}}></div>
            <div className="blog" style={{marginBottom: "20px"}}>
              <div className="d-flex">
                <div className="box">
                  <div className="num">
                    5
                  </div>
                  <p> تقييم الاستشاري</p>
                </div>
                <div className="box">
                  <div className="stars-box">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <span>التقييم العام</span>
                  <p>“ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية والفقهية</p>
                </div>
              </div>
              <p className="sub">الخميس 3 فبراير 2024</p>
            </div>
          </div>
      </div>
      <Button variant="outlined" endIcon={<KeyboardBackspaceIcon />} style={{
        position:"absolute",top: "100px", left: "60px",borderColor: "#A3A4A5",color: "#2D4768",
      }} onClick={()=> navigate('/pg2')} />
    </div>
  )
}




export default InfoPage