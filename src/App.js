import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import ImgTitleDescriptionSection from './components/ImgTitleDescriptionSection'
import Title from './components/Title';
import SubTitle from './components/Subtitle';
import IconsAndDescriptionSection from './components/IconsAndDescriptionSection';
import RedCTAButton from './components/RedCTAButton';
import FaqSection from './components/FaqSection';
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

      <ImgTitleDescriptionSection img="" subtitle="Google Ads" description="Have you ever wondered why the patient went to your competitor and not you? With the power of Google Ads, you will be found by up to 3x more patients! Be the one who is ahead of the competition." style="left-text-right-img" />
      <ImgTitleDescriptionSection img="" subtitle="Attractive and persuasive website" description="We will create the perfect website to make your customer delighted with your service. With this, your patient will get to your attendant more prepared to schedule for a private consultation." style="right-text-left-img" />
      <ImgTitleDescriptionSection img="" subtitle="Metric analysis and improving" description="Long term is the key! In addition to bringing you many new patients from the first month onwards, with our quarterly analysis of metrics and structure, the trend is that your result will always increase each month." style="left-text-right-img" />
      <ImgTitleDescriptionSection img="" subtitle="Facebook and Instagram ads" description="Keep actively selling your best procedures to the world’s most used social networks. With Facebook and Instagram working for you, getting your treatments and procedures to reach more people will be easier than taking a nap in a rainy afternoon." style="right-text-left-img" /> 
      
      {/*// <Title title=''/>*/}
        {/* <IconBlock icon="" title="title" description="description" cta="cta"/> */}
      <IconsAndDescriptionSection/>

      {/* <ImgTitleDescriptionSection img="" subtitle="title" description="description" style="left-text-right-img" /> */}

      <ImgTitleDescriptionSection img="" subtitle="Step 1 - Free consultancy." description="Here in this step we will analyze everything that is currently being done in your company and design which marketing strategy will make the most sense for you at the moment. Just this meeting will be already like a free mentorship for you." style="left-text-right-img" />
      <ImgTitleDescriptionSection img="" subtitle="Step 2 - Execution and revenue." description="If the contract is closed, here is where we will make your company start receiving more patients. We will collect the necessary data to create your persuasive website, create your ad campaigns, and increase your number of consultations and procedures." style="right-text-left-img" />
      <ImgTitleDescriptionSection img="" subtitle="Step 3 - Analysis and scale." description="Here is where happiness lives, our favorite step. After collecting the data and improving the first campaigns, we will be able to know exactly what to do to further multiply your profit and the arrival of new patients." style="left-text-right-img" />

      {/* 
      RedCTAButton has three color options as for background.
      white, dark-blue and light-blue.
      */}
      <Title title='testing it' color='white' background_color={'light-blue'}/> 
      <RedCTAButton cta='Schedule meeting' background_color={'light-blue'}/>
      
      
      
      <FaqSection/>
        
      {/* <Footer/> */}
    </>
    );
}

export default App;
