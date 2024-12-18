import { CallbackError, model, Schema } from "mongoose";
import { IUser } from "../types";
import bcrypt from 'bcrypt'
const SALT_ROUNDS = 10

export interface IUserDocument extends IUser, Document {
    comparePassword(enteredPassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUserDocument>({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    preferences: {
        type: [{
            value: { type: String, required: true } // Each preference is an object with a value property
        }],
        required: true
    }
})

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hash = await bcrypt.hash(this?.password, salt);
        // Replace the plain text password with the hash
        this.password = hash;
        next();
    } catch (error) {
        next(error as CallbackError);
    }
})

// Hash the password before updating
UserSchema.pre('findOneAndUpdate', async function (next) {
    const update = this.getUpdate() as { $set?: { password?: string } };

    if (update?.$set?.password) {
        console.log('------------------------')
        try {
            const salt = await bcrypt.genSalt(SALT_ROUNDS);
            const hash = await bcrypt.hash(update?.$set?.password, salt);

            this.setUpdate({
                ...update,
                $set: {
                    ...update.$set,
                    password: hash
                }
            });
        } catch (error) {
            return next(error as CallbackError);
        }
    }
    next();
});

UserSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
    return bcrypt.compare(enteredPassword, this?.password)
}

export const UserModel = model<IUserDocument>('Users', UserSchema)