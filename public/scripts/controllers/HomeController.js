function HomeController(BikeDataFactory, $state) {

  this.fetchData = () => {
    BikeDataFactory
      .fetchData()
      .then((response)=> {
        this.bikeData = response.data.network;
      });
  };

  this.increment = (station) => {
    station.free_bikes++;
  };

  this.decrement = (station) => {
    station.free_bikes--;
  };

  this.showStation = (stationData) => {
    this.stationData = stationData;
    $state.go('station', { id: stationData.id });
  };

  this.getPercentage = (free, empty) => {
    // console.log(Math.ceil( (free/empty) * 100 ) )
    return Math.ceil( ((free / (empty+free) * 100 )))
  }

  this.fetchData();

};
