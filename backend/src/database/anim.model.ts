import mongoose, { Document, Model, Schema } from "mongoose";

interface IAnim extends Document {
  title: string;
  link?: string;
  description?: string;
}

const AnimSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Anim: Model<IAnim> = mongoose.model<IAnim>("Anim", AnimSchema);

export default Anim;
