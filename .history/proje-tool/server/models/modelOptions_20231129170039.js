exports.schemaOptions = {
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            delete ret._id;
            delete ret.__v;
        }
    },
    toObject: 
}