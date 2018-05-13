const kefir = require('kefir');
const axios = require('axios');
const config  = require('../config.js');

const options = {
    method: 'GET',
    headers:
        {
          app_key: `${config.app_key}`,
          app_id: `${config.app_id}`,
          Accept: 'application/json'
        }
};
const word = `win`;
const lang = `en-ru`;
const getWord = (word = `win`,req,res) => {
    kefir
        .fromPromise(
            axios.get(`${config.url}&lang=${lang}&text=${word}`)
        )
        .map(requestResult=>requestResult.data.def[0].tr[0].text)
        .observe(
            (x) =>{
                console.log('hello project');
                res.render('projects/index');
            }
        );
}

module.exports = {
    getWord
}
