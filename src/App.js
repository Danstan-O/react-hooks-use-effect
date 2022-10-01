import React, { useState, useEffect } from "react";



// function App() {
//   useEffect(
//     // side effect function
//     () => {
//       console.log("useEffect called");
//     }
//   );

//   console.log("Component rendering");

//   return (
//     <div>
//       <button>Click Me</button>
//       <input type="text" placeholder="Type away..." />
//     </div>);
  
// }



//only renders when clicked


function App() {
  const [cant, etCount] = useState(0);
  const [txt, stText] = useState("");

  useEffect(() => {
    document.title = txt;
  }, [txt]);

  useEffect(() => {
    setTimeout(() => etCount(0), 10);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => etCount((cant) => cant + 1)}>
        I've been clicked {cant} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={txt}
        onChange={(e) => stText(e.target.value)}
      />
    </div>
  );
}





//and endless loop showing dog images

// function DogPics() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random/3")
//       .then((r) => r.json())
//       .then((data) => {
//         // setting state in the useEffect callback
//         setImages(data.message);
//       });
//   } ,[]);

//   return (
//     <div>
//       {images.map((image) => (
//         <img src={image} key={image} alt=" "/>
//       ))}
//     </div>
//   );
// }

//helps us run out of the infinity loop.
// useEffect(() => {
//   fetch("https://dog.ceo/api/breeds/image/random/3")
//     .then((r) => r.json())
//     .then((data) => {
//       setImages(data.message);
//     });
// }, []);




// //
// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     console.log("useEffect called");
//   });

//   console.log("Component rendering");

//   return (
//     <div>
//       <button onClick={() => setCount((count) => count + 1)}>
//         I've been clicked {count} times
//       </button>
//       <input
//         type="text"
//         placeholder="Type away..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </div>
//   );
// }




// // function App() {
// //   useEffect(() => {
// //     console.log("useEffect called");
// //   });

// //   console.log("Component rendering");

// //   return <button>Click Me</button>;
// // }

export default App;
