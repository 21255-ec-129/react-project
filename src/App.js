




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


