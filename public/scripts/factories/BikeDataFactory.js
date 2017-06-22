function BikeDataFactory($http) {
  //  data contains example data from API in case of crash
  var API = '//api.citybik.es/v2/networks/hubway';
  // var API = '/data';

  var fetchData = () => {
    return $http
      .get(API)
      .then((response) => {
        return response.data.network
      })
      .catch((err) => {
        console.error(err, err)
      });
  };

  return {
    fetchData: fetchData
  }
};
