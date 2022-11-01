import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import ImgTitleDescriptionSection from './components/ImgTitleDescriptionSection'
import Title from './components/Title';
import SubTitle from './components/Subtitle';

function App() {
  return (
    <>
      <HeroSection />
      <Title color='white' title='yowassup' background_color='dark-blue'/>
      <SubTitle color='white' title='testing subtitle' background_color='dark-blue'/>
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
