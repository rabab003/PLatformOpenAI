
// const Quickstart = () => {
//   const greenText = 'text-green'; 

//   return (
//     <div>
//             <div className="flex items-start justify-center h-full p-2 overflow-y-auto rounded bg-mainBlack [&::-webkit-scrollbar]:w-2
//       [&::-webkit-scrollbar-track]:rounded-full
//       [&::-webkit-scrollbar-track]:bg-gray-100
//       [&::-webkit-scrollbar-thumb]:rounded-full
//       [&::-webkit-scrollbar-thumb]:bg-gray-300
//       dark:[&::-webkit-scrollbar-track]:bg-neutral-700
//       dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

//         <div className="flex">

//           <div>

//             <h1 className="text-3xl ">Developer quickstart</h1>
//             <h3 className="py-3 text-xl text-darkText">Learn how to make your first API request.</h3>
//             <p className="text-[15px]">The OpenAI API provides a simple interface to state-of-the-art AI <span className="text-Lightgreen">models</span>  for natural language processing, image generation, semantic search, and speech recognition. Follow this guide to learn how to generate human-like responses to <span className="text-Lightgreen">natural language prompts, create vector embeddings </span> for semantic search, and <span className="text-Lightgreen"> generate images </span> from textual descriptions.</p>


//             <div className="py-10">
//             <div>Create and export an API key </div>
//             <div>Make your first API request</div>
//             <div>Next steps</div>              
//              </div>



//           </div>        
//         </div>

//     </div>
      
//     </div>
//   )
// }

// export default Quickstart



// const Quickstart = () => {
//   const greenText = 'text-green'; 

//   return (
//     <div>
//             <div className="flex items-start justify-center h-full p-2 overflow-y-auto rounded bg-mainBlack [&::-webkit-scrollbar]:w-2
//       [&::-webkit-scrollbar-track]:rounded-full
//       [&::-webkit-scrollbar-track]:bg-gray-100
//       [&::-webkit-scrollbar-thumb]:rounded-full
//       [&::-webkit-scrollbar-thumb]:bg-gray-300
//       dark:[&::-webkit-scrollbar-track]:bg-neutral-700
//       dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

//         <div className="flex flex-col md:flex-row">

//           <div>

//             <h1 className="text-3xl font-semibold">Developer quickstart</h1>
//             <h3 className="py-2 text-xl text-darkText">Learn how to make your first API request.</h3>
//             <p className="text-[15px] pt-7">The OpenAI API provides a simple interface to state-of-the-art AI <span className="text-Lightgreen">models</span>  for natural language processing, image generation, semantic search, and speech recognition. Follow this guide to learn how to generate human-like responses to <span className="text-Lightgreen">natural language prompts, create vector embeddings </span> for semantic search, and <span className="text-Lightgreen"> generate images </span> from textual descriptions.</p>


//             <div className="py-10">
//             <div>
//               <h2 className="pb-5 text-2xl">Create and export an API key </h2>
//               <p className="font-light"><span className="text-Lightgreen">Create an API key in the dashboard here</span>, which you’ll use to securely <span className="text-Lightgreen"> access the API</span>. Store the key in a safe location, span like a <a className="text-Lightgreen"> .zshrc file </a>or another text file on your computer. Once you’ve generated an API key, export it as an <span className="text-Lightgreen">environment variable</span>  in your terminal.</p>
//            <div className="the_buttons">

//            </div>
//             </div>








//             <div>Make your first API request</div>
//             <div>Next steps</div>              
//              </div>



//           </div>   

//           <div className="hidden md:block">
//             <h1>Create and export an API key</h1>
//             <h1> Make your first API request</h1>
//             <h1>Next steps</h1>
            
//             </div>     
//         </div>

//     </div>
      
//     </div>
//   )
// }

// export default Quickstart


import React, { useState } from 'react';

const Quickstart = () => {
  const greenText = 'text-green';
  const [content, setContent] = useState('default');

  const handleButtonClick = (platform) => {
    setContent(platform);
  };

  return (
    <div>
      <div className="flex items-start justify-center h-full p-2 overflow-y-auto rounded bg-mainBlack [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

        <div className="flex flex-col md:flex-row">

          <div>

            <h1 className="pt-5 text-3xl font-semibold">Developer quickstart</h1>
            <h3 className="py-2 text-xl text-darkText">Learn how to make your first API request.</h3>
            <p className="text-[15px] pt-7 ">The OpenAI API provides a simple interface to state-of-the-art AI <span className="text-Lightgreen">models</span>  for natural language processing, image generation, semantic search, and speech recognition. Follow this guide to learn how to generate human-like responses to <span className="text-Lightgreen">natural language prompts, create vector embeddings </span> for semantic search, and <span className="text-Lightgreen"> generate images </span> from textual descriptions.</p>


            <div className="py-10">
              <div>
                <h2 className="pb-5 text-2xl font-semibold">Create and export an API key </h2>
                <p className="font-light"><span className="text-Lightgreen">Create an API key in the dashboard here</span>, which you’ll use to securely <span className="text-Lightgreen"> access the API</span>. Store the key in a safe location, span like a <a className="text-Lightgreen"> .zshrc file </a>or another text file on your computer. Once you’ve generated an API key, export it as an <span className="text-Lightgreen">environment variable</span>  in your terminal.</p>

                <div className='gap-3'>
                <div className="w-[250px] p-1 bg-black rounded-md">
                  <button className='px-3 py-1 rounded-sm bg-mainHover'
                    onClick={() => handleButtonClick('macos_linux')}
                  >
                    macOS/Linux
                  </button>
                  <button  className='px-3 py-1 rounded-sm bg-mainHover'
                    onClick={() => handleButtonClick('windows')}
                  >
                    Windows
                  </button>
                </div>
                <div className="mt-5 content-box">
                  {content === 'macos_linux' && (
                    <div>
                      <h3>Export an environment variable on macOS or Linux system</h3>
                      <p>1. <code>export OPENAIL_API_KEY="your_api_key_here"</code></p>
                    </div>
                  )}
                  {content === 'windows' && (
                    <div>
                      <h3>Export an environment variable on Windows system</h3>
                      <p>1. <code>set OPENAIL_API_KEY="your_api_key_here"</code></p>
                    </div>
                  )}
                  {content === 'default' && (
                    <p>Please select a platform to see the instructions.</p>
                  )}
                </div>                  
                </div>

              </div>

              <div>Make your first API request</div>
              <div>Next steps</div>              
            </div>

          </div>   

          <div className="hidden md:block">
            <h1>Create and export an API key</h1>
            <h1> Make your first API request</h1>
            <h1>Next steps</h1>
          </div>     
        </div>

      </div>
    </div>
  );
}

export default Quickstart;