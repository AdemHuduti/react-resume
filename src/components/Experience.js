import React from 'react';

const Experience = () => {
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Front-End Developer Intern</h3>
              <div className="subheading mb-3">Ministry Of Programming</div>
              <p>
                At the beginning of the internship program, I've started off with basics of Angular. Obtained knowledge in Angular has been practiced through several small project tasks. </p>
              <p>
                Following Angular, I've started working with GitHub, mainly with technologies enabling GitHub (Pull request, Push, Git add, Git Commit, Git Branch). Therefore, my new task has been to overwrite complete MOP website from HTML and CSS into Nunjucks template engine and SASS.
              </p>
              <p>
                After successful completion of MOP website, following task was to create landing page for NAGA COIN (NGC) Cryptcurrency. This task, as well, has been successfully completed.
              </p>
              <p>
                Another task for me was related to debugging and change request implementation for naga-markets.com. Additionally, I've created slider on the website.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-danger">August 2017 - October 2017.</span>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Experience;