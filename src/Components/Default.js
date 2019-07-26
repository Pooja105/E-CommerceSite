import React from 'react';

class Default extends React.Component {
  render() {
    return(
    <div className="container"> 
      <div className="row">
        <div className="col-10 text-title text-center mx-auto text-uppercase pt-5">
          <h1 className="display-3">
            404
            </h1>
            <h1>
              error
            </h1>
            <h2>
              Page Not found
            </h2>
            <h3>
              Thr Requested Url  <span className="text-danger">
                {/* Current Url is in the props and location */}
                {this.props.location.pathname}
              </span>
              was not found
            </h3>
        </div>
      </div>
    </div>
    )
  }
}

export default Default;
