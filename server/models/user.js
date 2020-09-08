/**
 * User: Sohel
 * Date: 3/31/15
 * Time: 6:53 PM
 */
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
      var users = [
        {
          name: "Niaz Morshed Nayeem",
          email: "nayeemxtreme@live.com",
          address: "Gulshan 1, Dhaka",
          mobile: "01913624522",
          book: "A brief history of time",
          author: "Stefen Hawkings",
          borrowDate: "20 April 2020",
          returnDate: "1 May 2020"
        },
        {
          name: "Abdullah Mohammad Khan",
          email: "akhan@gmail.com",
          address: "Mymensingh",
          mobile: "01913624522",
          book: "Time Machine",
          author: "H. G. Wells",
          borrowDate: "22 April 2020",
          returnDate: "10 May 2020"
        },
        {
          name: "Abu Bakar Siddik",
          email: "absiddik@live.com",
          address: "Jatrabari, Dhaka",
          mobile: "01913624522",
          book: "War of the Worlds",
          author: "H. G. Wells",
          borrowDate: "5 March 2020",
          returnDate: "30 March 2020"
        }
      ];
      callback(null, users);
    }
  }
};