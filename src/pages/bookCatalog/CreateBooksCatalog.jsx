import { data } from "autoprefixer";
import { useState } from "react";

function FormTextbox(props){
    return(
    <>
        <div className="flex flex-col gap-2">
        <label key={props.name} className="mt-3 ml-1 font-bold">{props.text}</label>
        <input type="text" onChange={props.onChange} id={props.name} name={props.name} value={props.value} className="min-h-14 w-96 pl-3  border-2  rounded-s-lg rounded-r-lg " placeholder={props.text} />
    </div>   
    </>
    );
}

function Description(props) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <label className="mt-3 font-bold">{props.name}</label>
                <textarea key={props.value} onChange={props.onChange} id={props.name} type="text" className="min-h-56 w-96 pl-3  border-2  rounded-s-lg rounded-r-lg " placeholder="Description" value={props.value}/>
            </div>
        </>

    )
}



function CreateBookCatalog(){
    const[data,setdata] = useState({
            title: "",
            authors: "",
            isbn: "",
            publisher: "",
            publication_year: "",
            edition: "",
            genre: "",
            language: "",
            number_of_pages: "",
            cover_image_url: "",
            shelf_location: "",
            description: ""
    })

    // function handle(e){
    //     const newData = {...data};
    //     newData[e.target.id] = e.target.value
    //     setdata(newData);
    //     console.log(newData);
    // }
    console.log(data);

    return(
        <>
           <div className="flex justify-center bg-gray-100 flex-col">
           <h1 className="text-3xl font-semibold mb-10 ">New Book Catalog</h1>
            <form onSubmit={(e) => Submit(e)}>
                <div  className="flex gap-20">
                    <div className="flex-1">

                        <FormTextbox onChange={(e) => setdata(e.target.value)} name="Title" text="Title" value={data.title}/>
                        <FormTextbox onChange={(e) => setdata(e.target.value)}  name="Authors" text="Authors" value={data.authors}/>
                        <FormTextbox onChange={(e) => setdata(e.target.value)}  name="ISBN" text="ISBN" value={data.isbn}/>
                        <FormTextbox onChange={(e) => setdata(e.target.value)}  name="Publisher" text="Publisher" value={data.publisher}/>
                        <FormTextbox onChange={(e) => setdata(e.target.value)}  name="Publication_Year" text="Publication Year" value={data.publication_year}/>
                        <FormTextbox onChange={(e) => setdata(e.target.value)}  name="Edition" text="Edition" value={data.edition}/>
                        <FormTextbox onChange={(e) => setdata(e.target.value)}  name="Genre" text="Genre" value={data.genre}/>
                    </div>
                    <div className="flex-1  ">
                        <FormTextbox onChange={(e) => setdata(e.target.value)}  name="Language" text="Language" value={data.language}/>
                        <FormTextbox onChange={(e) => setdata(e.target.value)}  name="Number_of_Page" text="Number of Page" value={data.number_of_pages}/>
                        <FormTextbox onChange={(e) => setdata(e.target.value)}  name="Cover_Image_Url" text="Cover Image Url" value={data.cover_image_url}/>
                        <FormTextbox onChange={(e) => setdata(e.target.value)}  name="Shelf_Location" text="Shelf Location" value={data.shelf_location}/>
                        <Description onChange={(e) => setdata(e.target.value)} name="Disciption" value={data.description}/>
                    </div>
                </div>
                <div >
                    {/* <button type="cancel" className="mt-8 h-12 bg-zinc-400 w-28  text-1xl text-white  mr-5 rounded-lg">Cancel</button> */}
                    <button type="save" className="mt-4 h-12 bg-sky-500 w-24  text-1xl text-white rounded-lg">Save</button>
                </div>
            </form >
           </div>
        </>
    );
}
export default CreateBookCatalog;