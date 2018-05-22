import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Note';
import '../models/Location';

const Note = mongoose.model('Note');
const Location = mongoose.model('Location');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}

export function listLocation(id) {
    return Location.find();
}

export function createLocation(data) {
    const loc = new Location({
        city: data.city,
        address: data.address
    });

    return loc.save();
}

export function deleteLocation(id) {
    return Location.findById(id).remove();
}