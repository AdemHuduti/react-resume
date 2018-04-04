import React from 'react';

const Skills = () => {
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline list-icons">
            <li className="list-inline-item">
              <i className="devicons devicons-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-css3"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-javascript"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-git"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-jquery"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-photoshop"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicons devicons-illustrator"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              IDE &amp; Editor: Visual Studio Code
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Technologies: HTML5, CSS3, JS, JSON, AJAX
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Style: SASS
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                JS Frameworks / Libraries:  ReactJS
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Source Control: Git
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Learn &amp; Questions: Stackoverflow, YouTube, Udemy, Pluralsight
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Design: Photoshop, Illustrator and Bootstrap
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
                Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Skills;