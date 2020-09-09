/**
 * User: Sohel
 * Date: 3/31/15
 * Time: 6:53 PM
 */
var fs = require('fs');

module.exports = function () {
  return {
    /**
     * get the users data from db
     * @param callback
     */
    getUsers: function (callback) {
      //fill with some dummy data
      //in real life you have to user db connection
      // and get the data
      try {
        
        var values = fs.readFileSync('./server/models/info.json').toString();
        var users = JSON.parse(values);
        callback(null, users); 

      } catch (error) {
        console.log(error);
      }

    }
  }
};