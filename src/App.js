import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import FeatureBox from './components/FeatureBox';
import GoogleMap from './components/GoogleMap';
import './App.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import PageLoader from './components/PageLoader';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      loading: false,
      result: {},
      mapEmbed: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  getData() {
    this.setState({ loading: true });
    document.querySelector('body').style = 'overflow:hidden';

    axios
      .get(
        'http://ip-api.com/json/' +
          this.state.search +
          '?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,timezone,isp,as,asname,query'
      )
      .then((response) => {
        if (response.data.status === 'success') {
          this.setState({
            result: response.data,
            mapEmbed: `https://maps.google.com/maps?q=${response.data.region}&t=&z=11&ie=UTF8&iwloc=&output=embed&zoom=0`,
          });
        } else {
          this.errorAlert();
        }
      })
      .catch(function (error) {
        this.errorAlert();
      })
      .then(() => {
        this.setState({ loading: false });
        document.querySelector('body').style = '';
      });
  }

  errorAlert() {
    Swal.fire({
      title: 'Failed to get data!',
      text: 'Please try again',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }

  handleSubmit() {
    this.getData();
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? <PageLoader /> : ''}
        <div>
          <SearchBox
            search={this.state.search}
            result={this.state.result}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <FeatureBox result={this.state.result} />
          <GoogleMap mapEmbed={this.state.mapEmbed} />

          <footer className="footer bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 my-auto h-100 text-center text-lg-left">
                  <ul className="list-inline mb-2" />
                  <p className="text-muted small mb-4 mb-lg-0">
                    <a href="http://bobbyfiando.com/">bobbyfiando.com</a>&nbsp;-
                    API with&nbsp;&nbsp;
                    <a href="https://ip-api.com/">ip-api.com</a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
