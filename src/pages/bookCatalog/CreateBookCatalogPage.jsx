import { useState } from "react";
import Description from "../../components/Description";
import FormTextbox from "../../components/FormTextbox";
import axios from "axios";

function CreateBookcatalogPage() {
    const url = "http://localhost:3000/api/books" 
    const [data, setData] = useState({
  title: " ",
  authors: " ",
  isbn: " ",
  publisher: " ",
  publication_year: 0,
  edition: " ",
  genre: " ",
  language: " ",
  number_of_pages: 0,
  cover_image_url: " ",
  shelf_location: " ",
  description: " "
    });
    const myHeaders = new Headers();
    myHeaders.append("x-secret-key", "9f65ab977aa8be03a346cdc106a707a943f8d33f5148ef3f89c88fdf6df3bffe");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE3MjI1MDM1MjIsImV4cCI6MTcyMjUwNzEyMn0.2Or9_z-HB55tVZURRWDUdL1IfXE5tRDdkWur6OvY9nk");
    const raw = JSON.stringify({
        title: data.title,
        authors: data.authors,
        isbn: data.isbn,
        publisher: data.publisher,
        publication_year: data.publication_year,
        edition: data.edition,
        genre: data.genre,
        language: data.language,
        number_of_pages: data.number_of_pages,
        cover_image_url: data.cover_image_url,
        shelf_location: data.shelf_location
    });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
    function submit(e) {
        e.preventDefault();
        axios.post(url,requestOptions)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }

    return (
        <>
            <h1 className="text-3xl font-semibold mb-10">New Book Catalog</h1>
            <form onSubmit={(e) => submit(e)}>
                <div className="flex gap-20">
                    <div className="flex-1">
                        <FormTextbox name="Title" onChange={(e) => handle(e)} id="title" value={data.title} placeholder="title" text="Title" />
                        <FormTextbox name="Authors" onChange={(e) => handle(e)} id="authors" value={data.authors} placeholder="authors" text="Authors" />
                        <FormTextbox name="ISBN" onChange={(e) => handle(e)} id="isbn" value={data.isbn} placeholder="isbn" text="ISBN" />
                        <FormTextbox name="Publisher" onChange={(e) => handle(e)} id="publisher" value={data.publisher} placeholder="publisher" text="Publisher" />
                        <FormTextbox name="Publication Year" onChange={(e) => handle(e)} id="publicationyear" value={data.publicationyear} placeholder="publication year" text="Publication Year" />
                        <FormTextbox name="Edition" onChange={(e) => handle(e)} id="edition" value={data.edition} placeholder="edition" text="Edition" />
                        <FormTextbox name="Genre" onChange={(e) => handle(e)} id="genre" value={data.genre} placeholder="genre" text="Genre" />
                    </div>
                    <div className="flex-1">
                        <FormTextbox name="Language" onChange={(e) => handle(e)} id="language" value={data.language} placeholder="language" text="Language" />
                        <FormTextbox name="Number of Page" onChange={(e) => handle(e)} id="numberofpage" value={data.numberofpage} placeholder="number of page" text="Number of Page" />
                        <FormTextbox name="Cover Image Url" onChange={(e) => handle(e)} id="coverimageUrl" value={data.coverimageUrl} placeholder="cover image url" text="Cover Image Url" />
                        <FormTextbox name="Shelf Location" onChange={(e) => handle(e)} id="shelflocation" value={data.shelflocation} placeholder="shelf location" text="Shelf Location" />
                        <Description />
                    </div>
                </div>
                <div>
                    <button type="button" className="mt-8 h-12 bg-zinc-400 w-28 text-1xl text-white mr-5 rounded-lg">Cancel</button>
                    <button type="submit" className="mt-4 h-12 bg-sky-500 w-24 text-1xl text-white rounded-lg">Submit</button>
                </div>
            </form>
        </>
    )
}

export default CreateBookcatalogPage;
