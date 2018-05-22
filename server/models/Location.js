import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    city: { type: String, required: true },
    address: { type: String}
});

const Location = mongoose.model('Location', LocationSchema);