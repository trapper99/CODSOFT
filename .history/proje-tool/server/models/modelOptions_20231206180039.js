exports.schemaOptions = {
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            delete ret._id;
            delete ret.__v;
        }
    },
    toObject: {
        virtuals: true,
        transform( ret) {
            delete ret._id;
            delete ret.__v;

        }
    },
    timestamps: true
}