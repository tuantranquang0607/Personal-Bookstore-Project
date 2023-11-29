import express from "express";
import { Book } from '../models/bookModels.js'


const router = express.Router();

// Route for Svae a new book.
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);

        response.status(500).send({ message: error.message });
    }
});

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
router.get('/books', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get ALL Books from database by id.
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Update a book.
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).send({ message: 'Book not fund.' });
        }
        return response.status(200).send({ message: 'Book updated successfully.' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Delete a book.
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).send({ message: 'Book not fund.' });
        }
        return response.status(200).send({ message: 'Book updated successfully.' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;