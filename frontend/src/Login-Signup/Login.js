import React from 'react';
import LogoNav from '../Navbars/LogoNav';

export default function Login() {
  return (
    <div className="container-fluid px-0" style={{ backgroundColor: 'white', padding:'0px', fontWeight: 'bold' }}>
      <LogoNav />
      <div className="row px-0" style={{ minHeight: '50vh' }}>
        {/* Left column for image */}
        <div className="col-md-8 col-sm-12 px-0" style={{ height: '100%', padding:'0px !important' }}>
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-vector/colleagues-preparing-corporate-party-time-management-deadline-brand-event-event-brand-management-sponsored-event-organization-concept_335657-120.jpg?t=st=1715531425~exp=1715535025~hmac=dbe6c3bc471095dc8346c1ac3ec99bca8765334be55b324ba0db69d0bb8b87e6&w=740"
            alt="Corporate Party"
            style={{ width: '100%'}}
          />
        </div>

        {/* Right column for form */}
        <div className="col-md-4 col-sm-12 d-flex align-items-center" style={{ backgroundColor: 'rgba(156, 86, 154, 0.5)' }}>
          <div className="mt-4 mx-auto" style={{ maxWidth: '400px' }}>
            <h1 style={{ color: 'purple' }}><b>Login</b></h1>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="d-grid gap-2 col-12 mx-auto">
                <button className="btn btn btn-outline-danger" type="button">Login</button>
                <button className="btn btn-danger mb-4" type="button">Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
