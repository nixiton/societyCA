import urlAPI from '../Axios';

const QueryService = {
  getListSociety: async () => {

    let response = { result: null, error: null };
    
    await fetch(urlAPI + '/list/')
      .then((res) =>  res.json())
      .then(
        (result) => {
          result[0] === "T"
            ? (response.error = result)
            : (response.result = result);
        },
      );
    return response;
  },

  initListSociety: async () => {

    let response = { result: null, error: null };

    await fetch(urlAPI + '/initDb/')
      .then((res) =>  res.json())
      .then(
        (result) => {
          
        },
      );
  },

  getDetailSociety: async (id) => {

    let response = { result: null, error: null };
    
    await fetch(urlAPI + '/detail/?id='+id)
      .then((res) =>  res.json())
      .then(
        (result) => {
          result[0] === "T"
            ? (response.error = result)
            : (response.result = result);
        },
      );
    return response;
  }
  
};

export default QueryService;
