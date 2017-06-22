function BikeDataFactory($http) {
  // commented out when the API crashed
  // var API = '//api.citybik.es/v2/networks/hubway';
  var API = '/data';

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
