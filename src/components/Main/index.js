import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export class Main extends Component {
  constructor () {
    super()

    this.state = {
      stores: [
        { latitude: 32.749945504826194, longitude: -117.1630068066215 }]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      onClick={() => console.log('Clicked: ' + 'lat ' + store.latitude, 'lng ' + store.longitude)} />
    })
  }

  render () {
    return (
      <div className="title jumbotron jumbotron-fluid bg-transparent bgstyle min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0">
        <div className="container container-fluid text-center">
          <h3>Our Location</h3>
          <p>111 Washington St, San Diego, CA 92103</p>
          <p>619 291 3341</p>
          <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{ lat: 32.7350442, lng: -117.1811012 }}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      </div>
    )
  }
}

const mapStyles = {
  width: '70%',
  height: '50%'
}
// export default Main
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAIuzPaOca6R2wLSRnFlPgWmIUngo3n-_I'
})(Main)
