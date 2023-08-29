import logo from './logo.svg';
import './App.css';
import Button from './Components/Button.js';

function App() {
  return (
    <div>
      <Button label="Login"/>
      <Button label="Signin"/>
    {/* Profile */}
    <div>
      <h1>BENEDICT BAAH</h1>
      <h3>Frontend Developer</h3>
    </div>
        <hr width="620px"/>


    {/* Education */}
    <div>
      <h1>EDUCATIONAL BACKGROUND</h1>
      <p>July 2020 - July 2023 - Amity University Online - Bachelor of Computer Application</p>
      <p>October 2012 - May 2015 - Asanteman Senior High  WASSCE</p>
    </div>
    <hr width="620px"/>

    {/* Work Experience */}
    <div  className='wrapper'>
      <h1>PROFESSIONAL BACKGROUND</h1>
      <span>
      <p>Nov 2022 - July 2023 -  Frontend Developer Intern - Navantrics Ltd</p>
      <ul>
        <li>Built an Ecommerce store with multi vendor pages</li>
        <li>Optimized web pages for maximum speed and scalability</li>
        <li>Maintained brand consistency throughout the design</li>
        <li>Worked closely with senior developers to develop products </li>
      </ul>
      </span>
      <span>

      <p>July 2022 - September 2022 - Frontend Developer Intern - Navantrics Ltd</p>
      <ul>
        <li>Built reusable code for future use</li>
        <li>Integrated software with existing systems</li>
        <li>Communicate design ideas using user flows, process flows, site maps, and wireframes</li>   
      </ul>
      </span>
    </div>
    <hr width="620px"/>
    {/* Skills */}
    <div >
      <h1>Skills</h1>
      <div className='container'>
<span>
  <h3>Soft Skills</h3>
      <ul>
        <li>Problem Solving</li>
        <li>Communication Skills</li>
        <li>Team Work</li>
        <li>Growth Mindset</li>
        <li>Creativity</li>
        
      </ul>
      </span>
      <span>
        <h3>Technical Skills</h3>
        <ul>
          <li>React Js</li>
          <li>Next Js</li>
          <li>Html</li>
          <li>Css3</li>
          <li>JavaScript</li>
          <li>Chakra Ui</li>
          <li>Tailwind css</li>
          <li>Redux Toolkit</li>
        </ul>
      </span>
     </div>
    </div>
    </div>
  );
}

export default App;
