import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors'
import connectDB from './connectDB.js'
import consultRoute from './routes/consultRoute.js'
// import path from 'path';

const app = express();

dotenv.config()
connectDB()

// Cross-origin
const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));
// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: [
        "'self'",
        'https://fonts.googleapis.com',
      ],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'https://res.cloudinary.com'],
      baseUri: ["'self'"],
    }
}));

// Accessing the path
// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// app.use(express.static((__dirname, "../client/build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

app.get('/', (req, res) => res.send('HELLO BLUGENIX!'))

// API for Free Consultation Modal Requests
app.use(consultRoute)


// Connecting the Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
