import axios from 'axios'

export function fetch(url, sendData){
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: sendData
    }).then(response => {
      resolve(response)
    })
  })
}
