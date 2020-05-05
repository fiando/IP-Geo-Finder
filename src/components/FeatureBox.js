import React, { Component } from 'react';

function FeatureContent(props) {
  const icon = `fa ${props.icon} icon`;
  
  return (
    <div className="col-sm-6 col-md-5 col-lg-4 item">
      <div className="box">
        <i className={icon} />
        <h3 className="name">
          <strong>{props.title}</strong>
        </h3>
        <p className="description">
          {props.content}
          <br />
          <strong>{props.code}</strong>
          <br />
        </p>
      </div>
    </div>
  );
}

export default class FeatureBox extends Component {
  render() {
    return (
      <div className="features-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">
              IP Address: {this.props.result.query} &nbsp;
            </h2>
            <p className="text-center">
              {this.props.result.city}, {this.props.result.regionName},&nbsp;
              {this.props.result.zip ? this.props.result.zip : '-'}
            </p>
          </div>
          <div className="row justify-content-center features">
            <FeatureContent
              title="Continent"
              icon="fa-globe"
              content={this.props.result.continent}
              code={this.props.result.continentCode}
            />
            <FeatureContent
              title="Country"
              icon="fa-flag"
              content={this.props.result.country}
              code={this.props.result.countryCode}
            />
            <FeatureContent
              title="Region"
              icon="fa-map-marker"
              content={this.props.result.regionName}
              code={this.props.result.region}
            />
            <FeatureContent
              title="Timezone"
              icon="fa-clock-o"
              content={this.props.result.timezone}
              code=""
            />
            <FeatureContent
              title="AS Name"
              icon="fa-gears"
              content={this.props.result.as}
              code={this.props.result.asname}
            />
            <FeatureContent
              title="ISP"
              icon="fa-signal"
              content={this.props.result.isp}
              code=""
            />
          </div>
        </div>
      </div>
    );
  }
}
