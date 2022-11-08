import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import IconsAndDescriptionSection from './components/IconsAndDescriptionSection';
import StepByStepSection from './components/StepByStepSection';
import CtaSection from './components/CtaSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <HeroSection />

      {/* <Title/> 
      The <Title/>
      Component renders a centralized Title a Section below itself.
      You can directly give it a color and a background-color attribute to make the style fit the section you're tryna put it.
      You can also set a subtile attribute, automatically rendering a subtitle just below it.  
      */}


      {/* 
      The ImgTitleDescriptionSection component renders a section with an image on one side, and a title + description on the other side.
      There are two options of styles you can use, the 'left-text-right-img' and the 'right-text-left-img'. 
      These names are self-explanatory. 
      Wether you use one or the other, just make sure you provide the component with an img, a title, a description and a style.
      */}

      <ServicesSection />
      
      <IconsAndDescriptionSection/> {/* Individual icon & description blocks are inside the component's code. */}

      <StepByStepSection/>


      {/* 
      RedCTAButton has three color options as for background.
      white, dark-blue and light-blue.
      */}
      {/* <Title title='testing it' color='white' background_color={'light-blue'}/> */}
      <CtaSection/>
      
      {/* <Title/> */}
      <FaqSection/>
        

      <Footer/>
    </>
    );
}

export default App;
