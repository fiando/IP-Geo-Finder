import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class PageLoader extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'rgba(31, 35, 40, 0.7)',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1000,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            zIndex: 999,
          }}
        >
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            style={{
              textAlign: 'center',
            }}
          />
        </div>
      </div>
    );
  }
}
