import React, { Component } from 'react';

export default class SearchBox extends Component {
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.handleSubmit();
    }
  };

  render() {
    return (
      <header
        className="masthead text-white text-center"
        style={{
          background:
            'url("assets/img/bg-masthead.jpg")no-repeat center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">IP Geo Finder</h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      value={this.props.search}
                      placeholder={this.props.result.query}
                      onChange={this.props.handleChange}
                      onKeyDown={this._handleKeyDown}
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <button
                      className="btn btn-primary btn-block btn-lg"
                      type="button"
                      onClick={this.props.handleSubmit}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
