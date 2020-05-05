import React, { Component } from 'react';

export default class GoogleMap extends Component {
  render() {
    return (
      <div className="map-clean">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Location </h2>
          </div>
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              src={this.props.mapEmbed}
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              style={{width: "100%",height:"500px"}}
            />
          </div>
        </div>
      </div>
    );
  }
}
