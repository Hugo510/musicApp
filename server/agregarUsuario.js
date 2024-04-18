const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const MONGO_URL = 'mongodb+srv://victor3041220191:WJWRDxOHBt1EPGlY@cluster0.usbre0o.mongodb.net/musicApp?retryWrites=true&w=majority';

// Define el mismo esquema de usuario que en el archivo principal
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true, index: true },
    username: { type: String, required: true, trim: true, unique: true, index: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
});

// Pre-save hook para encriptar la contraseña antes de guardar el usuario
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model('User', userSchema);

// Conectar a MongoDB y añadir un usuario
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Conectado a MongoDB Atlas");

        // Crear un nuevo usuario
        const newUser = new User({
            firstName: "Juan",
            lastName: "Pérez",
            email: "juan.perez@example.com",
            username: "juan",
            password: "juan",
            age: 30
        });

        // Guardar el usuario en la base de datos
        newUser.save()
            .then(() => {
                console.log("Usuario añadido exitosamente");
                mongoose.disconnect();  // Cierra la conexión al completar
            })
            .catch(err => {
                console.error("Error al añadir el usuario:", err);
                mongoose.disconnect();  // Asegúrate de cerrar la conexión incluso si hay un error
            });

    })
    .catch(err => {
        console.error("Error al conectar con MongoDB Atlas:", err);
    });
