const { default: mongoose } = require("mongoose");
const magoose = require("mongoose");
const URI =
    "mongodb+srv://kssr283:1fIXivgEQHlfAbIB@manejo-clientes.xkiie.mongodb.net/?retryWrites=true&w=majority&appName=manejo-clientes";

mongoose
    .connect(URI)
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.error(err));
module.exports = mongoose;
