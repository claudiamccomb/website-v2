import React, {Component} from 'react';
import SectionTitleDescription from '../../components/SectionTitleDescription/SectionTitleDescription';
import sponsorStrings from '../../res/sponsorsStrings';
import {StyledAccordionTitle, StyledGrid, StyledGridColumn, StyledGridColumnL, StyledAccordion, StyledTitle, SponsorType, SponsorTypeLink, SponsorImg, SponsorsWrapper, StyledAccordionContent, StyledLink, MoreWrapper, Interested, LearnMore} from './styles';
import google from '../../res/images/sponsors/google.svg';
import wish from '../../res/images/sponsors/wish.svg';
import amazon from '../../res/images/sponsors/amazon.svg';
import facebook from '../../res/images/sponsors/facebook.svg';
import zynga from '../../res/images/sponsors/zynga.svg';
import splunk from '../../res/images/sponsors/splunk.svg';
import yelp from '../../res/images/sponsors/yelp.svg';
import loblaws from '../../res/images/sponsors/loblaws.svg';
import chevron_down from "../../res/images/past_execs_chevron_down.svg";
import chevron_right from "../../res/images/past_execs_chevron_right.svg";
import { Grid, Image} from "semantic-ui-react";
import {StyledSubSectionWrapper} from "../../res/globalStyles";

//import illustration from '../../res/images/sponsors/illustration.svg';


//import SponsorImg from '../../components/'

class Sponsors extends Component {
    //Functions to control state of accordion
    state = {
        active: false
      };
    
      handleClick = () => {
        this.setState({
          active: !this.state.active
        })
      };

    render (){
        
        const {active} = this.state;

        //dictionary of platinum sponsors and their pictures and links
        const platinumSponsors ={
            s1: {
                name: google,
                link: 'https://about.google/'
            },
            s2: {
                name: loblaws,
                link: ''
            },
            s3: {
                name: wish,
                link: 'https://www.wish.com/careers?hide_login_modal=true'
            },
        };

        //dictionary of gold sponsors and their pictures and links
        const goldSponsors = {
            s1: {
                name: amazon,
                link: 'https://www.aboutamazon.com/'
            },
            s2: {
                name: facebook,
                link: 'https://about.fb.com/news/'
            },
            s3: {
                name: splunk,
                link: 'https://www.splunk.com/'
            },
            s4: {
                name: yelp,
                link: 'https://www.yelp.com/about'
            },
            s5: {
                name: zynga,
                link: 'https://www.zynga.com/'
            }
        };

        //dictionary of silver sponsors and their links
        const silverSponsors = {
            s1: {
                name: 'A Thinking Ape',
                link: 'https://www.athinkingape.com/'
            },
            s2: {
                name: 'DataDog',
                link:' https://www.datadoghq.com/'
            },
            s3: {
                name: 'Flexport',
                link: 'https://www.flexport.com/'
            },
            s4: {
                name: 'Oracle',
                link: 'https://www.netsuite.com/portal/home.shtml?noredirect=T'
            },
            s5: {
                name: 'Shopify',
                link: 'https://www.shopify.ca/'
            },
            s6: {
                name: 'Pinterest',
                link: 'https://newsroom.pinterest.com/en/company'
            },
            s7: {
                name: 'Sumo Logic',
                link: 'https://www.sumologic.com/'
            },
            s8: {
                name: 'The Co-operators',
                link: 'https://www.cooperators.ca/en.aspx'
            },
            s9: {
                name: 'Ubisoft',
                link: 'https://www.ubisoft.com/en-ca/?isSso=true&refreshStatus=noLoginData'
            },
        };

        //dictionary of local sponsors and their links
        const localSponsors = {
            s1: {
                name: 'Arctic Wolf',
                link: 'https://arcticwolf.com/'
            },
            s2: {
                name: 'Square',
                link: 'https://squareup.com/ca/en'
            },
        };
        return (
            <StyledSubSectionWrapper>
                {/* Sponsors title and Description*/}
                <SectionTitleDescription
                title={sponsorStrings.title}
                description={sponsorStrings.description}/>
                {/* Platinum Heading */}
                <SponsorType>
                    {sponsorStrings.platinum}
                </SponsorType>
                {/* Pictures of Platinum Sponsors*/}
                
                {Object.entries(platinumSponsors).map(([key, name]) => (
                    name.link === ''? <SponsorImg src={name.name} alt=''/>: 
                    (<a href = {name.link} target ='_blank' rel="noopener noreferrer"> 
                    <SponsorImg src={name.name} alt=''/>
                    </a>)
                ))}
                
                
                 {/* Gold Heading */}
                <SponsorType>
                    {sponsorStrings.gold}
                </SponsorType>
                {/* Pictures of Gold Sponsors*/}
                
                {Object.entries(goldSponsors).map(([key, name]) => (
                    
                    name.link === ''? <SponsorImg src={name.name} alt=''/>: 
                    (<a href = {name.link} target ='_blank' rel="noopener noreferrer"> 
                    <SponsorImg src={name.name} alt=''/> 
                    </a>)
                    
                ))}
                

                {/* Accordian for sponsors*/}
                <StyledAccordion fluid styled>
                <StyledAccordionTitle
                    active={active}
                    onClick={this.handleClick}>
                    <StyledTitle>
                    More Sponsors</StyledTitle>
                    {active
                    ? <Image src={chevron_down}/>
                    : <Image src={chevron_right}/>
                    }
                    
                </StyledAccordionTitle>
                <StyledAccordionContent active={active}>

                   {/* Links of silver Sponsors*/}
                    <SponsorTypeLink>
                    {sponsorStrings.silver}
                    </SponsorTypeLink>
                    <StyledGrid columns={6}>
                    {Object.entries(silverSponsors).map(([number, name]) => (
                        <StyledGridColumnL>
                        <a href={name.link} target='_blank' rel="noopener noreferrer"><StyledLink>{name.name}</StyledLink></a>
                        </StyledGridColumnL>
                    ))}
                    </StyledGrid>
                        {/* Links of local Sponsors*/}
                        <SponsorTypeLink>
                            {sponsorStrings.local}
                        </SponsorTypeLink>
                        <StyledGrid columns={6}>
                        {Object.entries(localSponsors).map(([number, name]) => (
                            <StyledGridColumnL>
                            <StyledLink href={name.link} target='_blank' rel="noopener noreferrer">{name.name}</StyledLink>
                            </StyledGridColumnL>
                        ))}
                    </StyledGrid>
                </StyledAccordionContent>
                </StyledAccordion>
                



                {/* Call to action button */}
                <MoreWrapper>

                <Interested> {sponsorStrings.interested}</Interested>
                    <LearnMore href={'https://cs.uwaterloo.ca/wics'} target ='_blank'>
                         {sponsorStrings.learnMore}</LearnMore>
                </MoreWrapper>
                
            </StyledSubSectionWrapper>
        )
    }
}

export default Sponsors;