import './scss/styles.scss';
import Steps from'./components/Steps'
import PersonalInfoSection from'./sections/PersonalInfoSection'
import FinnishUpSection from'./sections/FinnishUpSection'
import PickAddOnnsSection from'./sections/PickAddOnnsSection'
import SelectPlanSection from'./sections/SelectPlanSection'
import ThankYouSection from'./sections/ThankYouSection'
import Route from'./components/Route'


function App() {
  return (
    <div className="App container">

      <Steps />
      <Route section='personalInfo'>
        <PersonalInfoSection />
      </Route>
      <Route section='SelectPlan'>
        <SelectPlanSection   />
      </Route>
      <Route section='PickAddOnns'>
        <PickAddOnnsSection   />
      </Route>
      <Route section='FinnishUp'>
        <FinnishUpSection  />
      </Route>
      <Route section='ThankYou'>
        <ThankYouSection  />
      </Route>
    </div>
  );
}

export default App;
