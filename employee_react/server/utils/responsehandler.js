export function successfunction(apidata) {
  let response = {
    success: true,
    statusCode: apidata.statusCode,
    data: apidata.data ? apidata.data : null,
    message:apidata.message?apidata.message:null,
  };
  return response
}
export function errorfunction(apidata) {
  let response = {
    success: false,
    statuscode: apidata.statusCode,
    data: apidata.data ? apidata.data : null,
    message:apidata.message?apidata.message:null,
  };
  return response
}
