import React from 'react';

const About = () => {
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Adem
              <span className="text-danger">Huduti</span>
          </h1>
          <div className="subheading mb-5">Safeta Hadžića 77 · Sarajevo · (+387-62) 759-612 ·
              <a href="mailto:name@email.com" className="text-danger">adem.huduti@gmail.com</a>
          </div>
          <p className="mb-3">My name is Adem Huduti, 25-year old from Sarajevo, graduated from Economics School and Business in Sarajevo and IT Academy in Belgrade.</p>
          <p className="mb-3">I am currently looking for job and/or opportunity in the field of IT.</p>
          <p className="mb-3">
            My first working experience, in the field of IT, is related to the company Ministry of Programming (MOP) as an intern in front-end development field. Currently, I am working on personal projects for practicing and educational purposes of front-end development, such as React and Redux library. Additionally, back-end development is an interest of mine which I have recently started working on.
            </p>
          <p className="mb-1">
            I am highly motivated individual, eager to start my career in IT company. In that way, I could gain knowledge from expereince, but also contibute to projects with my previously gained skils.
            </p>
          <p className="mb-5">I am looking forward to meeting you in person and telling you about my aspirations. Please contact me if you need any additional information. I am available at your convenience.</p>

          <p>Below please find links of my social networks profile on Facebook, LinkedIn and Github - with my projects done in React.</p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/huduti.adem" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/adem-huduti-46968513b/" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>

            <li className="list-inline-item">
              <a href="https://github.com/AdemHuduti" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default About;