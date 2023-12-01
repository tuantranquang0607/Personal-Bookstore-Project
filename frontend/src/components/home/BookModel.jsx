import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";


const BookModel = ({ book, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
            <div onClick={(event) => event.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex-col relative'>
                <AiOutlineClose className='absolute right-6 to-6 text-3xl text-red-600 cursor-pointer' onClick={onClose}></AiOutlineClose>
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'> {item.publishYear}</h2>
                <h4 className='my-2 text-gray-500'>{item._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl'></PiBookOpenTextLight>
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl'></BiUserCircle>
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p className='mt-4'>Whatever</p>
                <p className='my-2'>
                    The shoes had been there for as long as anyone could remember.
                    In fact, it was difficult for anyone to come up with a date they had first appeared.
                    It had seemed they'd always been there and yet they seemed so out of place.
                    Why nobody had removed them was a question that had been asked time and again,
                    but while they all thought it, nobody had ever found the energy to actually do it.
                    So, the shoes remained on the steps, out of place in one sense, but perfectly normal in another.
                </p>
            </div>
        </div>
    )
};

export default BookModel;