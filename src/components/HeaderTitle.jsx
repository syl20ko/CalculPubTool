import React from 'react';

function HeaderTitle() {
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col-6">
          <img src="%PUBLIC_URL%/logo-sylvain-caron.png" className="logo" alt="Sylvain Caron" />
        </div>
        <div className="col-6 d-flex justify-content-end">
          <h1 className="titre">
            <span style={{ color: '#4C86F9' }}>A</span>
            <span style={{ color: '#49A84C' }}>d</span>
            <span style={{ color: '#F6BB02' }}>s</span>
            <span style={{ color: '#E1432E' }}>.</span>
            <span style={{ color: 'black' }}> Pocket Tool</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderTitle;
