import mongoose from 'mongoose'

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true
    },
    invoiceDate: {
        type: Date,
        required: true
    },
    invoiceAmount: {
        type: Number,
        required: true
    },
    invoiceStatus: {
        type: String,
        required: true
    },
    invoiceItems: [{
        
    }]
})