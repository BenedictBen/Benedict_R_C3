import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
