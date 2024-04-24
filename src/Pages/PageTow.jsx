import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useNavigate } from "react-router-dom";

const PageTow = () => {
    const navigate = useNavigate();
  return (
    <div className='main-content pg3'>
        <h2> محامي مرخص</h2>
        <div className="search-container">
            <div className="filter-icon">
                <TuneIcon />
            </div>
            <div className="search-input">
                <input type="text" />
            </div>
            <div className="search-icon">
                <SearchIcon />
            </div>
        </div>
        <div className="box-container">
            <Link className="box" to={'/pg3'}>
                <div className="box-img">
                    <img src="https://s3-alpha-sig.figma.com/img/9d3d/26c7/bbe4981814e004b83443f6dcb01b0de9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyBXWtd14HhSAk9E-QmdOYoXyr6Olc1-LmykLtSS1Q2lQr0dSbHtK--WZBC~-a7tN6Z9KiuZIcq~LPNpb9SBsZ1Gk9rr2oZMZXgB~8rUgpxS86fvo1FnTe9wbuyjfMQ4IfAzC1rHeqUq9S5jb7ox8A8w6WWKK1cFvmuPTNcg9KOEQgp0qBByvPiNlcUZIVCEqXJkCB2Xgb3xDRp0xGaCtWVRqlB0kzrkQAjZkMs0ZjQqgsu3uqphJxgEKd-UZwjA-kvuD8-vwUKiVKH9z0CWtJxLA~vlmuB6cctatOICZ~tOTQ7VZg-Bj51jqXf8aNrKTGEXm~~qbXOeSGK29oSPnw__" alt="" />
                </div>
                <h5> عبد العزيز عبد الرحمن الربعي <VerifiedIcon /></h5>
                <span>
                    <img src="https://s3-alpha-sig.figma.com/img/3de5/72db/c363e9209e1fcbff2ceee3de36b99c13?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R656njHVUD9nUkvRDo~vCuBewpHN~9BlrP8UF-QMUNDfYAXVvAp7n2v1tVd8n6I4jCuZqj3NFhi3mBVmYb9A7yUuFZIbo0xoYfdUXQ657d6VrvrARyrya2pnUit1XS5Dcz1C~kDtpnDi8PTgEV15cRQtwCcJZJJ9YuKSwl16s~DSJ2mOTXqJ2OP3dyi57WrHc6xMyzsC4w9XY0HxdrVuzi0uVf1ZEMONpt-zQrUf7fllz7MuX8p2pro7nCUP4~s8jbPmIAsy1K1HoH5uDAhLF5IXqWXnv7WBnx0uC~rH42hzvelUeOHMG01yFbjCuhyJwskqi11JOCLi5lbGOsUBDw__" alt="" />
                    مستشار قانوني 
                </span>
                <p>4.56 (35 مراجعة) <StarRateIcon /> </p>
            </Link>
            <Link className="box" to={'/pg3'}>
                <div className="box-img">
                    <img src="https://s3-alpha-sig.figma.com/img/9d3d/26c7/bbe4981814e004b83443f6dcb01b0de9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyBXWtd14HhSAk9E-QmdOYoXyr6Olc1-LmykLtSS1Q2lQr0dSbHtK--WZBC~-a7tN6Z9KiuZIcq~LPNpb9SBsZ1Gk9rr2oZMZXgB~8rUgpxS86fvo1FnTe9wbuyjfMQ4IfAzC1rHeqUq9S5jb7ox8A8w6WWKK1cFvmuPTNcg9KOEQgp0qBByvPiNlcUZIVCEqXJkCB2Xgb3xDRp0xGaCtWVRqlB0kzrkQAjZkMs0ZjQqgsu3uqphJxgEKd-UZwjA-kvuD8-vwUKiVKH9z0CWtJxLA~vlmuB6cctatOICZ~tOTQ7VZg-Bj51jqXf8aNrKTGEXm~~qbXOeSGK29oSPnw__" alt="" />
                </div>
                <h5> عبد العزيز عبد الرحمن الربعي <VerifiedIcon /></h5>
                <span>
                    <img src="https://s3-alpha-sig.figma.com/img/3de5/72db/c363e9209e1fcbff2ceee3de36b99c13?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R656njHVUD9nUkvRDo~vCuBewpHN~9BlrP8UF-QMUNDfYAXVvAp7n2v1tVd8n6I4jCuZqj3NFhi3mBVmYb9A7yUuFZIbo0xoYfdUXQ657d6VrvrARyrya2pnUit1XS5Dcz1C~kDtpnDi8PTgEV15cRQtwCcJZJJ9YuKSwl16s~DSJ2mOTXqJ2OP3dyi57WrHc6xMyzsC4w9XY0HxdrVuzi0uVf1ZEMONpt-zQrUf7fllz7MuX8p2pro7nCUP4~s8jbPmIAsy1K1HoH5uDAhLF5IXqWXnv7WBnx0uC~rH42hzvelUeOHMG01yFbjCuhyJwskqi11JOCLi5lbGOsUBDw__" alt="" />
                    مستشار قانوني 
                </span>
                <p>4.56 (35 مراجعة) <StarRateIcon /> </p>
            </Link>
            <Link className="box" to={'/pg3'}>
                <div className="box-img">
                    <img src="https://s3-alpha-sig.figma.com/img/9d3d/26c7/bbe4981814e004b83443f6dcb01b0de9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyBXWtd14HhSAk9E-QmdOYoXyr6Olc1-LmykLtSS1Q2lQr0dSbHtK--WZBC~-a7tN6Z9KiuZIcq~LPNpb9SBsZ1Gk9rr2oZMZXgB~8rUgpxS86fvo1FnTe9wbuyjfMQ4IfAzC1rHeqUq9S5jb7ox8A8w6WWKK1cFvmuPTNcg9KOEQgp0qBByvPiNlcUZIVCEqXJkCB2Xgb3xDRp0xGaCtWVRqlB0kzrkQAjZkMs0ZjQqgsu3uqphJxgEKd-UZwjA-kvuD8-vwUKiVKH9z0CWtJxLA~vlmuB6cctatOICZ~tOTQ7VZg-Bj51jqXf8aNrKTGEXm~~qbXOeSGK29oSPnw__" alt="" />
                </div>
                <h5> عبد العزيز عبد الرحمن الربعي <VerifiedIcon /></h5>
                <span>
                    <img src="https://s3-alpha-sig.figma.com/img/3de5/72db/c363e9209e1fcbff2ceee3de36b99c13?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R656njHVUD9nUkvRDo~vCuBewpHN~9BlrP8UF-QMUNDfYAXVvAp7n2v1tVd8n6I4jCuZqj3NFhi3mBVmYb9A7yUuFZIbo0xoYfdUXQ657d6VrvrARyrya2pnUit1XS5Dcz1C~kDtpnDi8PTgEV15cRQtwCcJZJJ9YuKSwl16s~DSJ2mOTXqJ2OP3dyi57WrHc6xMyzsC4w9XY0HxdrVuzi0uVf1ZEMONpt-zQrUf7fllz7MuX8p2pro7nCUP4~s8jbPmIAsy1K1HoH5uDAhLF5IXqWXnv7WBnx0uC~rH42hzvelUeOHMG01yFbjCuhyJwskqi11JOCLi5lbGOsUBDw__" alt="" />
                    مستشار قانوني 
                </span>
                <p>4.56 (35 مراجعة) <StarRateIcon /> </p>
            </Link>
            
        </div>
        <div className="box-container">
            <Link className="box" to={'/pg3'}>
                <div className="box-img">
                    <img src="https://s3-alpha-sig.figma.com/img/9d3d/26c7/bbe4981814e004b83443f6dcb01b0de9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyBXWtd14HhSAk9E-QmdOYoXyr6Olc1-LmykLtSS1Q2lQr0dSbHtK--WZBC~-a7tN6Z9KiuZIcq~LPNpb9SBsZ1Gk9rr2oZMZXgB~8rUgpxS86fvo1FnTe9wbuyjfMQ4IfAzC1rHeqUq9S5jb7ox8A8w6WWKK1cFvmuPTNcg9KOEQgp0qBByvPiNlcUZIVCEqXJkCB2Xgb3xDRp0xGaCtWVRqlB0kzrkQAjZkMs0ZjQqgsu3uqphJxgEKd-UZwjA-kvuD8-vwUKiVKH9z0CWtJxLA~vlmuB6cctatOICZ~tOTQ7VZg-Bj51jqXf8aNrKTGEXm~~qbXOeSGK29oSPnw__" alt="" />
                </div>
                <h5> عبد العزيز عبد الرحمن الربعي <VerifiedIcon /></h5>
                <span>
                    <img src="https://s3-alpha-sig.figma.com/img/3de5/72db/c363e9209e1fcbff2ceee3de36b99c13?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R656njHVUD9nUkvRDo~vCuBewpHN~9BlrP8UF-QMUNDfYAXVvAp7n2v1tVd8n6I4jCuZqj3NFhi3mBVmYb9A7yUuFZIbo0xoYfdUXQ657d6VrvrARyrya2pnUit1XS5Dcz1C~kDtpnDi8PTgEV15cRQtwCcJZJJ9YuKSwl16s~DSJ2mOTXqJ2OP3dyi57WrHc6xMyzsC4w9XY0HxdrVuzi0uVf1ZEMONpt-zQrUf7fllz7MuX8p2pro7nCUP4~s8jbPmIAsy1K1HoH5uDAhLF5IXqWXnv7WBnx0uC~rH42hzvelUeOHMG01yFbjCuhyJwskqi11JOCLi5lbGOsUBDw__" alt="" />
                    مستشار قانوني 
                </span>
                <p>4.56 (35 مراجعة) <StarRateIcon /> </p>
            </Link>
            <Link className="box" to={'/pg3'}>
                <div className="box-img">
                    <img src="https://s3-alpha-sig.figma.com/img/9d3d/26c7/bbe4981814e004b83443f6dcb01b0de9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyBXWtd14HhSAk9E-QmdOYoXyr6Olc1-LmykLtSS1Q2lQr0dSbHtK--WZBC~-a7tN6Z9KiuZIcq~LPNpb9SBsZ1Gk9rr2oZMZXgB~8rUgpxS86fvo1FnTe9wbuyjfMQ4IfAzC1rHeqUq9S5jb7ox8A8w6WWKK1cFvmuPTNcg9KOEQgp0qBByvPiNlcUZIVCEqXJkCB2Xgb3xDRp0xGaCtWVRqlB0kzrkQAjZkMs0ZjQqgsu3uqphJxgEKd-UZwjA-kvuD8-vwUKiVKH9z0CWtJxLA~vlmuB6cctatOICZ~tOTQ7VZg-Bj51jqXf8aNrKTGEXm~~qbXOeSGK29oSPnw__" alt="" />
                </div>
                <h5> عبد العزيز عبد الرحمن الربعي <VerifiedIcon /></h5>
                <span>
                    <img src="https://s3-alpha-sig.figma.com/img/3de5/72db/c363e9209e1fcbff2ceee3de36b99c13?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R656njHVUD9nUkvRDo~vCuBewpHN~9BlrP8UF-QMUNDfYAXVvAp7n2v1tVd8n6I4jCuZqj3NFhi3mBVmYb9A7yUuFZIbo0xoYfdUXQ657d6VrvrARyrya2pnUit1XS5Dcz1C~kDtpnDi8PTgEV15cRQtwCcJZJJ9YuKSwl16s~DSJ2mOTXqJ2OP3dyi57WrHc6xMyzsC4w9XY0HxdrVuzi0uVf1ZEMONpt-zQrUf7fllz7MuX8p2pro7nCUP4~s8jbPmIAsy1K1HoH5uDAhLF5IXqWXnv7WBnx0uC~rH42hzvelUeOHMG01yFbjCuhyJwskqi11JOCLi5lbGOsUBDw__" alt="" />
                    مستشار قانوني 
                </span>
                <p>4.56 (35 مراجعة) <StarRateIcon /> </p>
            </Link>
            <Link className="box" to={'/pg3'}>
                <div className="box-img">
                    <img src="https://s3-alpha-sig.figma.com/img/9d3d/26c7/bbe4981814e004b83443f6dcb01b0de9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyBXWtd14HhSAk9E-QmdOYoXyr6Olc1-LmykLtSS1Q2lQr0dSbHtK--WZBC~-a7tN6Z9KiuZIcq~LPNpb9SBsZ1Gk9rr2oZMZXgB~8rUgpxS86fvo1FnTe9wbuyjfMQ4IfAzC1rHeqUq9S5jb7ox8A8w6WWKK1cFvmuPTNcg9KOEQgp0qBByvPiNlcUZIVCEqXJkCB2Xgb3xDRp0xGaCtWVRqlB0kzrkQAjZkMs0ZjQqgsu3uqphJxgEKd-UZwjA-kvuD8-vwUKiVKH9z0CWtJxLA~vlmuB6cctatOICZ~tOTQ7VZg-Bj51jqXf8aNrKTGEXm~~qbXOeSGK29oSPnw__" alt="" />
                </div>
                <h5> عبد العزيز عبد الرحمن الربعي <VerifiedIcon /></h5>
                <span>
                    <img src="https://s3-alpha-sig.figma.com/img/3de5/72db/c363e9209e1fcbff2ceee3de36b99c13?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R656njHVUD9nUkvRDo~vCuBewpHN~9BlrP8UF-QMUNDfYAXVvAp7n2v1tVd8n6I4jCuZqj3NFhi3mBVmYb9A7yUuFZIbo0xoYfdUXQ657d6VrvrARyrya2pnUit1XS5Dcz1C~kDtpnDi8PTgEV15cRQtwCcJZJJ9YuKSwl16s~DSJ2mOTXqJ2OP3dyi57WrHc6xMyzsC4w9XY0HxdrVuzi0uVf1ZEMONpt-zQrUf7fllz7MuX8p2pro7nCUP4~s8jbPmIAsy1K1HoH5uDAhLF5IXqWXnv7WBnx0uC~rH42hzvelUeOHMG01yFbjCuhyJwskqi11JOCLi5lbGOsUBDw__" alt="" />
                    مستشار قانوني 
                </span>
                <p>4.56 (35 مراجعة) <StarRateIcon /> </p>
            </Link>
        </div>
        <Button variant="outlined" endIcon={<KeyboardBackspaceIcon />} style={{
        position:"absolute",top: "100px", left: "60px",borderColor: "#A3A4A5",color: "#2D4768",
      }} onClick={()=> navigate('/')} />
    </div>
  )
}

export default PageTow