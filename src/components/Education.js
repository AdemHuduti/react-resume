import React from 'react';

const Education = () => {
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Economic School And Business</h3>
              <div className="subheading mb-3">Bachelor of Economic</div>
              <div>Department: Development of business information systems</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-danger">September 2012 - December 2016.</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">IT Academy</h3>
              <div className="subheading mb-3">Web development</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-danger">September 2015 - September 2016.</span>
            </div>
          </div>

        </div>
      </section>
    </div> 
  )
}
export default Education;