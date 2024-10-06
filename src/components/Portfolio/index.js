
import React,{useState,useEffect} from 'react';
import  {PortfolioSection,PortfolioTitle,PortfolioList,PortfolioItem,Span,Box,Image,Overlay,OverlaySpan} from './style.js'
import axios from 'axios';

const Portfolio = () => {

    const [images,setImages]= useState([])

    useEffect(()=>{
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
    },[])

    const portfolioImages = images.map((imageItem)=>{
        return(
        <Box key={imageItem.id}>
            <Image src={imageItem.image} alt=""/>
            <Overlay >
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </Box>
        )
    })
    return(
        <PortfolioSection>
        <PortfolioTitle ><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem >HTML</PortfolioItem>
            <PortfolioItem >Photoshop</PortfolioItem>
            <PortfolioItem >Wordpress</PortfolioItem>
            <PortfolioItem >Mobile</PortfolioItem>
        </PortfolioList>
        
        <div className="box">
           {portfolioImages}
        </div>
        
    </PortfolioSection>
            
    )
}

export default Portfolio;
