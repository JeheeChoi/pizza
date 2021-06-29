import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

// Google map
class Main extends Component {
  constructor () {
    super()

    this.state = {
      stores: [
        { latitude: 32.749945504826194, longitude: -117.1630068066215 }]
    }
  }
  // Location marker on the google map
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      onClick={() => console.log('Clicked: ' + 'lat ' + store.latitude, 'lng ' + store.longitude)} />
    })
  }
  // Display on the page
  render () {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 32.7350442, lng: -117.1811012 }}
      >
        {this.displayMarkers()}
      </Map>
    )
  }
}

const mapStyles = {
  width: '65%',
  height: '50%'
}
// export default Main
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAIuzPaOca6R2wLSRnFlPgWmIUngo3n-_I'
})(Main)
