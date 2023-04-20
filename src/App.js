import './App.css';
import PersonalDetails from './components/details/PersonalDetails';
import Education from './components/education/Education';
import TechnicalSkills from './components/skills/TechnicalSkills';
import Project from './components/projects/Project';
import Experience from './components/experience/Experience'
import Interests from './components/interests/Interests';
import Responsibility from './components/responsibility/Responsibility';
import Certificates from './components/certificates/Certificates';
import Hobbies from './components/hobbies/Hobbies';



function App() {
  return (
    <div className="resume">
      <PersonalDetails />
      <Education/>
      <TechnicalSkills/>
      <Experience/>
      <Project/>
      <Interests/>
      <Responsibility/>
      <Certificates/>
      <Hobbies/>

    </div>
  );
}

export default App;
