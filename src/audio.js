// import React from 'react';
// import song from './song.mp3';

// class AudioPlayer extends React.Component {
//     render() {
//         return (<center>
//             <div>
//             <h1 className='a'>This Is My React Code On Songs Player </h1>
//             <audio controls>
//                 <source src={song} type="audio/mpeg" />
//           </audio>
//           <h2>Movie:Bolashanker</h2>
//           <audio controls>
//                 <source src={song} type="audio/mpeg" />
//           </audio>
//           <h2>Movie:Bolashanker</h2>
//           </div></center>
//         );
//     }
// }

// export default AudioPlayer;

import React from 'react';
import songsData from './songs.json';

class YourComponent extends React.Component {
    render() {
        return (
            <div>
                {songsData.map((song, index) => (
                    <div key={index} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                        <h2>{song.title}</h2>
                        <p>ID: {song.id}</p>
                        <audio controls>
                            <source src={song.link} type="audio" />
                            
                        </audio>
                    </div>
                ))}
            </div>
        );
    }
}

export default YourComponent;

