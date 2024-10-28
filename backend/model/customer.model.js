import mongoose from "mongoose";
import bcrypt from "bcryptjs"; // For password hashing

const customerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Pre-save middleware to hash password before saving to database
customerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Only hash if the password field has been modified

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
});

// Method to compare provided password with the hashed password in the database
customerSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
