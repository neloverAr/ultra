
import React, { Component } from 'react';
import {HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDesc,HomeBtn,Span} from "./style.js"

const Home = () => {
    return(
        
             <HomeSection className="home">
            <div className="container">
                <HomeInformation className="home-information">
                    <HomeTitle className="home-title margin-bottom">Nelover Aburas</HomeTitle>
                    <HomeInfo className="home-info">Creative Programmer</HomeInfo>
                    <HomeDesc className="home-desc">
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn className="home-btn">Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
        
            
    )
}

export default Home;
