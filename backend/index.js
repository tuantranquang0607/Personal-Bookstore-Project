import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import moongoose from 'moongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

// Middleware for parsing request body.
app.use(express.json());

// Middleware for handling CORS POLICY.
// Option 1: Allow ALL origins with Default of cors(*).
app.use(cors());
// Option 2: 
app.use(
    cors({
        origin: 'http://localhost:5555/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Hello');
});

app.use('/books', booksRoute);

// Route for Svae a new book.
// app.post('/books', async (request, response) => {
//     try {
//         if (
//             !request.body.title ||
//             !request.body.author ||
//             !request.body.publishYear
//         ) {
//             return response.status(400).send({
//                 message: 'Send all required fields: title, author, publishYear',
//             });
//         }
//         const newBook = {
//             title: request.body.title,
//             author: request.body.author,
//             publishYear: request.body.publishYear,
//         };
//         const book = await Book.create(newBook);
//         return response.status(201).send(book);
//     } catch (error) {
//         console.log(error.message);

//         response.status(500).send({ message: error.message });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`App is running at http://localhost:${PORT}`);
// });

// Route for Get ALL Books from database.
// app.get('/books', async (request, response) => {
//     try {
//         const books = await Book.find({});
//         return response.status(200).json(books);
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });
// app.get('/books', async (request, response) => {
//     try {
//         const books = await Book.find({});
//         return response.status(200).json({
//             count: books.length,
//             data: books
//         });
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });

// Route for Get ALL Books from database by id.
// app.get('/books/:id', async (request, response) => {
//     try {
//         const { id } = request.params;
//         const books = await Book.find({});

//         return response.status(200).json({
//             count: books.length,
//             data: books
//         });
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });

// Route for Update a book.
// app.put('./books/:id', async (request, response) => {
//     try {
//         if (
//             !request.body.title ||
//             !request.body.author ||
//             !request.body.publishYear
//         ) {
//             return response.status(400).send({
//                 message: 'Send all required fields: title, author, publishYear',
//             });
//         }
//         const { id } = request.params;
//         const result = await Book.findByIdAndUpdate(id, request.body);

//         if (!result) {
//             return response.status(404).send({ message: 'Book not fund.' });
//         }
//         return response.status(200).send({ message: 'Book updated successfully.' });
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });

// Route for Delete a book.
// app.delete('./books/:id', async (request, response) => {
//     try {
//         const { id } = request.params;
//         const result = await Book.findByIdAndUpdate(id, request.body);

//         if (!result) {
//             return response.status(404).send({ message: 'Book not fund.' });
//         }
//         return response.status(200).send({ message: 'Book updated successfully.' });
//     } catch (error) {
//         console.log(error.message);
//         response.status(500).send({ message: error.message });
//     }
// });

moongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database.');

    app.listen(PORT, () => {
        console.log(`App is running at http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});
