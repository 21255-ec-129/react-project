// import axios from 'axios';
// import React from 'react';
// import Card from './card';
// import Spinner from './spinner';
// import { useEffect,useState } from 'react';

// const App = () => {
//   const [data,setData] = useState([]);
//   const [search,setSearch] = useState(null);
//   useEffect(() =>{
//     axios.get('').then(
//       res => {
//         !search ? setData(res.data) : setData(res.data.filter(songs => songs.singer===search))
//       }
//     )
//   },[search])
//   const onSubmit = e =>{
//     e.preventDefault();
//     setSearch(search);
//   }
//   return (
//     <div>
//         <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//             <h3 className="navbar-brand">Telugu Skillhub Music World <span style={{color:"blue"}}>𝄞</span>	</h3>
//             <form className="d-flex" onSubmit={onSubmit} >
//             <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
//             <input className="btn btn-outline-success" type="submit" value="Search" />
//             </form>
//         </div>
//     </nav>
    
//     {data.length >=1 ? 
//     <center>
//       <Card songs={data} />
//     </center> 
//     :
//     <Spinner />
//     }

//     </div>
//   )
// }

// export default App;
// import AudioPlayer from "./audio";
// import './App.css'

// function App() {
//     return (
//         <div className="App">
//             <AudioPlayer />
//         </div>
//     );
// }

// export default App;

// import React,{useEffect,useState} from 'react';
// import axios from 'axios';
// import Gallery
//  from './gallery';

// const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
// const App = () => {
//   const [data,setData] = useState([]);
//   const [search,setSearch] = useState("");
//   useEffect(()=>{
//     },[])
//   const changeHandler = e =>{
//     setSearch(e.target.value);
//   }
//   const submitHandler = e =>{
//     e.preventDefault();
//     axios
//     .get(
//       `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
//     )
//     .then(response => {
//       setData(response.data.photos.photo)
//     })
//     .catch(error => {
//       console.log(
//         "Encountered an error with fetching and parsing data",
//         error
//       );
//   })
//   }
//   return (
//     <div>
//       <center>
//         <h2>Gallery Snapshot</h2><br></br>
//         <form onSubmit={submitHandler}>
//           <input size="30" type="text" onChange={changeHandler} value={search}/><br /><br />
//           <input type="submit" name="Search" />
//         </form>
//         <br />
//         {data.length>=1?<Gallery data={data}/>:<h4>No Image Loaded</h4>}
//       </center>
//     </div>
//   )
// }

// export default App
// import React,{useEffect, useState} from 'react'
// import EmojiData from './emoji.json';

// const App = () => {
//   const [search,setSearch] = useState("");
//   const [data,setData] = useState([]);

//   useEffect(()=>{
//       const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
//       setData(newData);
//   },[search])
//   return (
//     <div>
//       <center>
//         <h1> Emoji Search</h1>
//         <input size="30" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
//         </center>
//         {data.map(emoji =>
//           <div className="card" key={emoji.title}>
//           <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
//             {emoji.symbol} {emoji.title}
//           </div>
//         </div>
//         )}
      
//     </div>
//   )
// }
// export default App




//Import React and your JSON file

import React from 'react';
import songsData from './songs.json';
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2 style={{color:"green"}}>ONE SMALL MUSIC APP</h2>
                    {songsData.map((song, index) => (
                        <div key={index} className="col-sm-4" style={{border: '2px solid gold', margin: '10px', padding: '10px'}}>
                            <h2>{song.title}</h2>
                            <iframe width="100%" height="315" src={song.song } title={song.title} ></iframe>
                        </div>
                    ))}
                </div>
            </div>  
        );
    }
}

export default App;




//or

// Import React and your JSON file
// import React from 'react';
// import songsData from './songs.json';

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 {songsData.map((song, index) => (
//                     <div key={index} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
//                         <h2>{song.title}</h2>
//                         <p>ID: {song.id}</p>
//                         <iframe width="560" height="315" src={song.song.replace("watch?v=", "embed/")} title={song.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }

// export default App;


