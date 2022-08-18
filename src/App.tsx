import './App.scss';
import books from './data/techBooksUnstructured.json';

function App() {
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
