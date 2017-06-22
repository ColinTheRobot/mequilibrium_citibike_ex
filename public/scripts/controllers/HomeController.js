function HomeController(BikeDataFactory) {

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

  this.fetchData();

};
