import React from 'react';
import {AboutSection,AboutTitle,Span,InfoDir,InfoDesc,InfoLink,AboutInfo} from './style.js'
const About = () => {
    return(
        <AboutSection >
            <div class='container'>
                <AboutInfo>
                    <AboutTitle><Span>This is</Span> Me</AboutTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoLink href="#">explicabo</InfoLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
            
    )
}

export default About;
