// Layout Elements (Uncomment as you build)
import Navbar from '../components/layout/Navbar';
// import CustomCursor from '../components/layout/CustomCursor';
import Footer from '../components/layout/Footer';

// Sections
import PrivateInquiry from '../components/sections/10_PrivateInquiry';
import CinematicHero from '../components/sections/1_CinematicHero';
import SkylineExperience from '../components/sections/2_SkylineExperience';
import NumbersThatMatter from '../components/sections/3_NumbersThatMatter';
import SignatureProjects from '../components/sections/4_SignatureProjects';
import InteractiveMasterplan from '../components/sections/5_InteractiveMasterplan';

import TheLifestyle from '../components/sections/6_TheLifestyle';
import Amenities360 from '../components/sections/7_Amenities360';
import ConstructionTimeline from '../components/sections/8_ConstructionTimeline';
import FounderMessage from '../components/sections/9_FounderMessage';
// import Amenities360 from '../components/sections/7_Amenities360';
// import ConstructionTimeline from '../components/sections/8_ConstructionTimeline';
// import FounderMessage from '../components/sections/9_FounderMessage';
// import PrivateInquiry from '../components/sections/10_PrivateInquiry';

export default function Home() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />

      <CinematicHero />
      <SkylineExperience />
      <NumbersThatMatter />
              <SignatureProjects />
                      <InteractiveMasterplan />
                          <TheLifestyle />
                              <Amenities360 />
                                      <ConstructionTimeline />
                                       <FounderMessage />
      
      <PrivateInquiry />
     

      <Footer />
    </>
  );
}