import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  driverPic:{
    type: String,
    require: true
  },
  driverDetail:{
    type:String,
    require:true,
  },
  driverStatus:{
    type:Boolean,
    default: false    
  }
},{
    timestamps:true
  })

const scheduleModel = mongoose.model('Schedule', scheduleSchema);
export default scheduleModel;