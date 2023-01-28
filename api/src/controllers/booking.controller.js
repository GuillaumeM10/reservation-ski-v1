const BookingController =  {
  getAll : (req, res) => {
    res.send("Get all Booking");
  },

  getOne : (req, res) => {
    res.send("Get one Booking");
  },

  create : (req, res) => {
    res.send("Create Booking");
  },

  update : (req, res) => {
    res.send("Update Booking");
  },

  delete : (req, res) => {
    res.send("Delete Booking");
  }
}

module.exports = BookingController