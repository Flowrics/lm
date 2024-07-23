import { useContext, useState } from "react";
import { BooksContext } from "../../../context/books.context";
import Book from "../book/book.component";

export let selectedBook = {}
const BooksList = () => {
  const {Books} = useContext(BooksContext);
  const [userSearch, setuserSearch] = useState("");
  const [course, setcourse] = useState("");

  const handleChange = ({ target: { value } }) => setuserSearch(value);
  const handleCourse = ({target: {value}}) => setcourse(value);
  const filteredList = Books && Books.filter(book => book.title.toLowerCase().includes(userSearch.toLowerCase())).filter(book => book.course.toLowerCase().includes(course.toLowerCase()));

  return(
    <>
      <div className="w-full">
        <div className="bg-black w-full rounded-t-2xl text-white">
            <div className="py-6 px-14 flex justify-between items-center">
                <div className="font-semibold text-xl w-[10rem]">Search for</div>
                <div>
                    <div className="flex border rounded-xl">
                        <div>
                            <input className="text-black w-[23rem] h-11 rounded-l-xl px-4" type="search" id="search" name="search" placeholder="book name" onChange={handleChange}/>
                        </div>      
                        <div className="w-[2.75rem] p-1 align-middle hover:bg-white rounded-r-xl hover:border-2 border-black">
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
                                <path d="M 52.349609 14.400391 C 42.624609 14.400391 32.9 18.1 25.5 25.5 C 10.7 40.3 10.7 64.399219 25.5 79.199219 C 32.9 86.599219 42.600391 90.300781 52.400391 90.300781 C 62.200391 90.300781 71.900781 86.599219 79.300781 79.199219 C 94.000781 64.399219 93.999219 40.3 79.199219 25.5 C 71.799219 18.1 62.074609 14.400391 52.349609 14.400391 z M 52.300781 20.300781 C 60.500781 20.300781 68.700391 23.399219 74.900391 29.699219 C 87.400391 42.199219 87.4 62.5 75 75 C 62.5 87.5 42.199219 87.5 29.699219 75 C 17.199219 62.5 17.199219 42.199219 29.699219 29.699219 C 35.899219 23.499219 44.100781 20.300781 52.300781 20.300781 z M 52.300781 26.300781 C 45.400781 26.300781 38.9 29 34 34 C 29.3 38.7 26.700391 44.800391 26.400391 51.400391 C 26.300391 53.100391 27.600781 54.4 29.300781 54.5 L 29.400391 54.5 C 31.000391 54.5 32.300391 53.199609 32.400391 51.599609 C 32.600391 46.499609 34.699219 41.799219 38.199219 38.199219 C 41.999219 34.399219 47.000781 32.300781 52.300781 32.300781 C 54.000781 32.300781 55.300781 31.000781 55.300781 29.300781 C 55.300781 27.600781 54.000781 26.300781 52.300781 26.300781 z M 35 64 A 3 3 0 0 0 32 67 A 3 3 0 0 0 35 70 A 3 3 0 0 0 38 67 A 3 3 0 0 0 35 64 z M 83.363281 80.5 C 82.600781 80.5 81.850781 80.800391 81.300781 81.400391 C 80.100781 82.600391 80.100781 84.499609 81.300781 85.599609 L 83.800781 88.099609 C 83.200781 89.299609 82.900391 90.6 82.900391 92 C 82.900391 94.4 83.8 96.700391 85.5 98.400391 L 98.300781 111 C 100.10078 112.8 102.39922 113.69922 104.69922 113.69922 C 106.99922 113.69922 109.29961 112.79961 111.09961 111.09961 C 114.59961 107.59961 114.59961 101.90039 111.09961 98.400391 L 98.300781 85.599609 C 96.600781 83.899609 94.300391 83 91.900391 83 C 90.500391 83 89.2 83.300391 88 83.900391 L 85.5 81.400391 C 84.9 80.800391 84.125781 80.5 83.363281 80.5 z M 91.900391 88.900391 C 92.700391 88.900391 93.5 89.200781 94 89.800781 L 106.69922 102.5 C 107.89922 103.7 107.89922 105.59922 106.69922 106.69922 C 105.49922 107.89922 103.6 107.89922 102.5 106.69922 L 89.800781 94.099609 C 89.200781 93.499609 88.900391 92.700391 88.900391 91.900391 C 88.900391 91.100391 89.200781 90.300781 89.800781 89.800781 C 90.400781 89.200781 91.100391 88.900391 91.900391 88.900391 z"></path>
                            </svg>
                        </div>
                    </div>                              
                </div>
            </div>
            <div className="p-6 border grid grid-cols-3 gap-4 place-items-center font-semibold text-xl">
                <div className="justify-self-end mr-8">Book Cover</div>
                <div className="justify-self-end">Book Details</div>
                <div className=" justify-self-end border-white rounded-xl px-4 py-1">
                    <label htmlFor="">Course:</label>
                    <select className="px-1 font-normal border border-black rounded-lg text-white bg-[#000000] " name="books" id="books" onChange={handleCourse}>
                        <option value="B">All</option>
                        <option value="bca">BCA</option>
                        <option value="bba">BBA</option>
                    </select>
                </div>
            </div>
        </div>
          <div className="bg-[#F0F0F0] w-full rounded-b-2xl overflow-y-auto h-[33.75rem] pt-6 px-6">
            {filteredList && filteredList.filter((_, idx) => idx < 10).sort((a, b) => a.title.localeCompare(b.title)).map(book => <Book key={book.s_no} book_item={book} />)}
          </div>
      </div>
    </>
  )
}

export default BooksList;