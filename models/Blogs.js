const {Schema,model, default: mongoose}=require('mongoose')
const blogSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Title is Required"],
  },
  snippet: {
    type: String,
    trim: true,
    required: [true, "Snippet is Required"],
  },
  description: {
    type: String,
    required: [true, "Description is Required"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: [true, "Author is Required"],
  },
  image: {
    type: [String],
    default: "",
  },
  ratings: {
    type: Number,
    default: 1,
    min:[1,"above 1"],
    max:[5,"below 5"]

  },
  
});
module.exports=model("blog",blogSchema)