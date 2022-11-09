const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema(
   {
      firstName: {
         type: String,
         required: true,
      },

      lastName: {
         type: String,
         required: true,
      },

      email: {
         type: String,
         required: true,
      },

      newsLetter: {
         type: Boolean,
      },
      tel: {
         type: Number,
      },
      feedback: {
         type: String,
         required: true,
      },
   },
   {
      timestamps: true,
   }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
