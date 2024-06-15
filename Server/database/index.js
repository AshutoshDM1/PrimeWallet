import mongoose from "mongoose";

const mongoUrl = "mongodb+srv://downlodemaster1:lrlDeC7NwtO90krV@cluster0.faah1ls.mongodb.net/PrimeWallet?retryWrites=true&w=majority&appName=Cluster0"


async function main() {
  await mongoose.connect(mongoUrl);
}
main()
  .then(() => console.log(`Connected to Database`))
  .catch((err) => console.error("Error connecting to database", err));

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
export  {User}  ;