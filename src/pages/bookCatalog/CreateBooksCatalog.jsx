import { Link } from "react-router-dom";
import { useState } from "react";

function FormTextbox(props) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label key={props.id} className="mt-3 ml-1 font-bold">
          {props.name}
        </label>
        <input
          type={props.type}
          onChange={props.onChange}
          id={props.name}
          name={props.name}
          value={props.value}
          className="min-h-14 w-96 pl-3  border-2  rounded-s-lg rounded-r-lg "
          placeholder={props.name}
        />
      </div>
    </>
  );
}

function Description(props) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="mt-3 font-bold">{props.name}</label>
        <textarea
          key={props.id}
          onChange={props.onChange}
          id={props.name}
          type={props.type}
          className="min-h-56 w-96 pl-3  border-2  rounded-s-lg rounded-r-lg "
          placeholder="Description"
          value={props.value}
        />
      </div>
    </>
  );
}

function CreateBookCatalog() {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [isbn, setISBN] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publication_year, setPublication_Year] = useState(0);
  const [edition, setEdition] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [number_of_pages, setNumber_of_Page] = useState(0);
  const [cover_image_url, setCover_Image_Url] = useState("");
  const [shelf_location, setShelf_Location] = useState("");
  const [description, setDisciption] = useState("");

  const Token = localStorage.getItem("token");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
        body: JSON.stringify({
          title: title,
          authors: authors,
          isbn: isbn,
          publisher: publisher,
          publication_year: parseInt(publication_year),
          edition: edition,
          genre: genre,
          language: language,
          number_of_pages: parseInt(number_of_pages),
          cover_image_url: cover_image_url,
          shelf_location: shelf_location,
          description: description,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center bg-gray-100 flex-col">
        <h1 className="text-3xl font-semibold mb-10 ">New Book Catalog</h1>
        <form onSubmit={(e) => submit(e)}>
          <div className="flex gap-20">
            <div className="flex-1">
              <FormTextbox
                onChange={(e) => setTitle(e.target.value)}
                name="Title"
                type="text"
                value={title.title}
              />
              <FormTextbox
                onChange={(e) => setAuthors(e.target.value)}
                name="Authors"
                type="text"
                value={authors.authors}
              />
              <FormTextbox
                onChange={(e) => setISBN(e.target.value)}
                name="ISBN"
                type="text"
                value={isbn.isbn}
              />
              <FormTextbox
                onChange={(e) => setPublisher(e.target.value)}
                name="Publisher"
                type="text"
                value={publisher.publisher}
              />
              <FormTextbox
                onChange={(e) => setPublication_Year(e.target.value)}
                name="Publication_Year"
                type="number"
                value={publication_year.publication_year}
              />
              <FormTextbox
                onChange={(e) => setEdition(e.target.value)}
                name="Edition"
                type="text"
                value={edition.edition}
              />
              <FormTextbox
                onChange={(e) => setGenre(e.target.value)}
                name="Genre"
                type="text"
                value={genre.genre}
              />
            </div>
            <div className="flex-1  ">
              <FormTextbox
                onChange={(e) => setLanguage(e.target.value)}
                name="Language"
                type="text"
                value={language.language}
              />
              <FormTextbox
                onChange={(e) => setNumber_of_Page(e.target.value)}
                name="Number_of_Page"
                type="number"
                value={number_of_pages.number_of_pages}
              />
              <FormTextbox
                onChange={(e) => setCover_Image_Url(e.target.value)}
                name="Cover_Image_Url"
                type="text"
                value={cover_image_url.cover_image_url}
              />
              <FormTextbox
                onChange={(e) => setShelf_Location(e.target.value)}
                name="Shelf_Location"
                type="text"
                value={shelf_location.shelf_location}
              />
              <Description
                onChange={(e) => setDisciption(e.target.value)}
                name="Disciption"
                type="text"
                value={description.description}
              />
            </div>
          </div>
          <div>
            <Link
              to="/book-catalog"
              className="mt-8 h-12 p-4 bg-zinc-400 w-28  text-1xl text-white  mr-5 rounded-lg"
            >
              Cancel
            </Link>
            <button className="mt-4 h-12 bg-sky-500 w-24  text-1xl text-white rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreateBookCatalog;
