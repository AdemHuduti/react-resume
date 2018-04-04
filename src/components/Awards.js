import React from 'react';

const Awards = () => {
  return (
    <div>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              JavaScript - Academy387
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Web development - IT Academy Belgrade
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Awards;