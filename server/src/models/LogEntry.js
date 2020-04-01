const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
  type: Number,
  required: true,
};
const logEntrySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    website: String,
    description: { type: String, required: true },
    placeOptions: String,
    phone: String,
    workingTime: String,
    category: String,
    accepted: { type: Boolean, default: false },
    isWhatsapp: { type: Boolean, default: false },
    latitude: { ...requiredNumber, min: -90, max: 90 },
    longitude: { ...requiredNumber, min: -180, max: 180 },
  },
  {
    timestamps: true,
  },
);

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
