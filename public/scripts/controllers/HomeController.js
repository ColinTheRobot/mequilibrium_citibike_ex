function HomeController(BikeDataFactory, $state) {

  this.fetchData = () => {
    BikeDataFactory
      .fetchData()
      .then((response)=> {
        this.bikeData = response.data.network;
      });
  };

  this.increment = (station) => {
    if (station.empty_slots == 0) return;
    station.free_bikes++;
    station.empty_slots--;
  };

  this.decrement = (station) => {
    if (station.free_bikes == 0) return;
    station.free_bikes--;
    station.empty_slots++;
  };

  this.showStation = (stationData) => {
    this.stationData = stationData;
    $state.go('station', { id: stationData.id });
  };

  this.getPercentage = (free, empty) => {
    return Math.ceil( ((free / (empty+free) * 100 )))
  }

  this.fetchData();

};
