function HomeController(BikeDataFactory, $state) {

  this.fetchData = () => {
    BikeDataFactory
      .fetchData()
      .then((response)=> {
        this.bikeData = response;
      });
  };

  this.increment = (station) => {
    if (station.empty_slots == 0) return;
    station.free_bikes++;
    station.empty_slots--;
  };

  this.fetchStation = (id) => {
    if (this.stationData) return;

    stationArray =  this.bikeData.stations.filter((value) => {
      return value.id == id
    })

    return stationArray[0]
  }

  this.decrement = (station) => {
    if (station.free_bikes == 0) return;
    station.free_bikes--;
    station.empty_slots++;
  };

  this.showStation = (stationData) => {
    this.stationData = stationData;
    $state.go('station', { id: stationData.id });
  };

  this.clearState = () => {
    this.stationData = '';
  };

  this.getPercentage = (free, empty) => {
    return Math.ceil( ((free / (empty+free) * 100 )))
  };

  this.fetchData();

};
