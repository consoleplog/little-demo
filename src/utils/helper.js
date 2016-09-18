import axios from 'axios';
function searchGit(add){
  let address =`https://api.github.com/users/${add}`
  console.log(address)
  return axios.get(address)
        .then((res) => (
          { getJson:res.data}
        ))
        .catch(function (error) {
          alert(error);
        });
}
export { searchGit };

function getJson(){
  let address = `https://raw.githubusercontent.com/consoleplog/datademo/master/card.json`
  return axios.get(address)
        .then((res) => (
          { getJson:res.data }
        ))
        .catch(function (error) {
          alert(error);
        });
}
export { getJson }
