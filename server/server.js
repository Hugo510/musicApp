const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const MONGO_URL = 'mongodb+srv://victor3041220191:WJWRDxOHBt1EPGlY@cluster0.usbre0o.mongodb.net/musicApp?retryWrites=true&w=majority';

const app = express();
app.use(express.json()); // Middleware para parsear JSON

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Conectado a MongoDB Atlas");
    } catch (err) {
        console.error(err);
        throw err; // Lanzar el error para ser manejado por el llamador
    }
}

connectDB()
    .then(() => {
        app.listen(3000, () => {
            console.log('La aplicación está escuchando en el puerto 3000');
        });
    })
    .catch((err) => {
        console.error('Error al conectar con la base de datos:', err);
        process.exit(1);
    });

//Creacion de modelo de esquema.
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

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Authentication failed. User not found.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }

        res.json({ message: 'You are logged in.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

app.get('/datos', async (req, res) => {
    try {
      const datos = await User.find();
      res.json(datos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
});
