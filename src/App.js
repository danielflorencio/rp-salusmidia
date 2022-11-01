import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import ImgTitleDescriptionSection from './components/ImgTitleDescriptionSection'

function App() {
  return (
    <>
      <HeroSection />
      {/* <Title/> */}
      <ImgTitleDescriptionSection img="" subtitle="title" description="description" style="left-text-right-img" />
      <ImgTitleDescriptionSection img="" subtitle="title" description="description" style="right-text-left-img" />
      <ImgTitleDescriptionSection img="" subtitle="title" description="description" style="left-text-right-img" />
      <ImgTitleDescriptionSection img="" subtitle="title" description="description" style="right-text-left-img" /> 
      {/*
      <Title title=''/>
      <IconsAndImgSection>
        <IconBlock icon="" title="title" description="description" cta="cta"/>
      </IconsAndImgSection>
      <Title title=''/>
      <ImgTitleDescriptionSection img="" title="title" description="description" style="left-text-right-img" />
      <ImgTitleDescriptionSection img="" title="title" description="description" style="right-text-left-img" />
      <ImgTitleDescriptionSection img="" title="title" description="description" style="left-text-right-img" />
      <Title title=''/>
      <FaqSection>
        <FaqItem question="" answer=""/>
        <FaqItem question="" answer=""/>
        <FaqItem question="" answer=""/>
        <FaqItem question="" answer=""/>
        <FaqItem question="" answer=""/>
      </FaqSection>
      <Footer/> */}
    </>
    );
}

export default App;
