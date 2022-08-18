import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

const url =
	'https://edwardtanguay.netlify.app/share/techBooksUnstructured.json';

interface IBook {
	id: number;
	title: string;
	description: string;
	language: string;
	yearMonth: string;
	numberInStock: number;
}

function App() {
	const [books, setBooks] = useState<IBook[]>([]);

	useEffect(() => {
		(async () => {
			const rawBooks = (await axios.get(url)).data;
			const books: IBook[] = [];
			rawBooks.forEach((rawBook:any) => {
				const book: IBook = {
					id: rawBook.id,
					title: rawBook.title,
					description: rawBook.description,
					language: !rawBook.language ? 'english' : rawBook.language,
					yearMonth: rawBook.yearMonth,
					numberInStock: rawBook.numberInStock,
				};
				books.push(book);
			});
			setBooks(books);
		})();
	}, []);

	return (
		<div className="App">
			<h1>TypeScript Data-Cleansing Example</h1>
			<h2>There are {books.length} books:</h2>
			<div className="bookArea">
				{books.map((item, i) => {
					return (
						<fieldset className="book" key={i}>
							<legend>ID: {item.id}</legend>

							<div className="row">
								<label>Title</label>
								<div>{item.title}</div>
							</div>

							<div className="row">
								<label>Description</label>
								<div>{item.description}</div>
							</div>

							<div className="row">
								<label>Language</label>
								<div>{item.language}</div>
							</div>

							<div className="row">
								<label>Year/Month</label>
								<div>{item.yearMonth}</div>
							</div>

							<div className="row">
								<label>In Stock</label>
								<div>{item.numberInStock}</div>
							</div>
						</fieldset>
					);
				})}
			</div>
		</div>
	);
}

export default App;
