const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://collapse:faizanmalik@cluster0.87xwmol.mongodb.net/user_app");

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String,
},"UsersInfo");

const user = new User ({
    name: "fzasdz",
    email: "axs@gmail.com",
    password:"244ssas512$$",
});

user.save();