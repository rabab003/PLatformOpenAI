import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faComments, faFileImage } from '@fortawesome/free-regular-svg-icons';
import { faBook, faHexagonNodes, faWrench } from '@fortawesome/free-solid-svg-icons';
import imageDataAnalys from '../assets/vhj.jpg';
import arrow from '../assets/weui_arrow-outlined.png';
import qus from '../assets/formkit_help.png';


const Overveiw = () => {
  return (
    <div className="flex items-start justify-center h-full p-2 overflow-y-auto rounded bg-mainBlack [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

      <div className="flex flex-col w-2/3 pt-10">
        <h2 className="pb-10 text-xl sm:text-4xl">OpenAI Developer Platform</h2>
        <div className="flex flex-col items-center justify-between w-full px-4 capitalize border border-gray-700 rounded-lg sm:px-10 md:flex-row bg-secMainBlack">
          <div className="py-10">
            <p className="text-lg font-bold">Get Your API Keys</p>
            <p className="py-3 text-sm text-darkText ">
              Create or join an organization to access API keys and a suite of <br /> developer tools.
            </p>
            <button className="px-3 py-2 font-medium rounded-md bg-emerald-700">Start Building</button>
          </div>
          <img src={imageDataAnalys} alt="Data Analysis" className="hidden w-64 sm:flex" />
        </div>

        <div className="pt-12">
          <div className="flex items-center justify-between">
            <h1 className="pt-10 pb-4 text-lg font-medium sm:text-2xl">Meet the Models</h1>
            <a href="#" className="text-xs font-semibold hover:text-hoverText">
            Pricing  <FontAwesomeIcon icon={faArrowTrendUp} /> 
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border border-gray-700 rounded-md bg-secMainBlack">
              <h2 className="pb-3 text-xl font-bold">GPT-4o</h2>
              <p className="text-sm leading-7">
                Our versatile, high-intelligence flagship model Text and image input, text output 128k context length Smarter model, higher price per token
              </p>
            </div>

            <div className="p-4 border border-gray-700 rounded-md bg-secMainBlack">
              <h2 className="pb-3 text-xl font-bold">GPT-4o Mini</h2>
              <p className="text-sm leading-7">
                Our fast, affordable small model for focused tasks Text and image input, text output 128k context length Faster model, lower price per token
              </p>
            </div>

            <div className="p-4 border border-gray-700 rounded-md bg-secMainBlack">
              <h2 className="pb-3 text-xl font-bold">O1 & O1-Mini</h2>
              <p className="text-sm leading-7">
                Reasoning models that excel at complex, multi-step tasks Text and image input, text output 128k context length Uses additional tokens for reasoning
              </p>
            </div>
          </div>

          <a href="#" className="flex items-center justify-center pt-4 hover:text-hoverText">
            Explore All <img src={arrow} className="w-4 pl-1" alt="Arrow" />

            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </a>
        </div>

        <div className="pt-6 pb-10">
          <h2 className="pt-10 pb-8 text-2xl font-bold">Explore Our Guides</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
       
               <div className='flex'>
                
                <div className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-12 p-3 rounded-md bg-whiteGrey' viewBox="0 0 512 512"><path fill="#ffffff" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"/></svg>
             <div className='pl-3'>
                  <h1 className='text-base font-bold'>Prompt engineering</h1>
                  <p className='text-sm'>Get better results from LLMs</p>                 
           
                </div>    
                </div>
       
         
                </div>
                <div className='flex'>
            
                <div className='flex items-center'>                
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-12 p-3 rounded-md bg-whiteGrey' viewBox="0 0 448 512"><path fill="#ffffff" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>           

                <div className='pl-3'>
                <h1 className='text-base font-bold'>Safety best practices</h1>
                 <p className='text-sm'>Make sure your application is safe</p>                 
               
               </div>    
                </div>
       
             
                </div>
                <div className='flex'>
                
                <div className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg"  className='w-12 p-3 rounded-md bg-whiteGrey' viewBox="0 0 512 512"><path fill="#ffffff" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
                <div className='pl-3'>
                  <h1 className='text-base font-bold'> Production best practices </h1>
                  <p className='text-sm'> Transition from prototype to production</p>                 
               
                </div>    
                </div>
       
             
                </div>
               <div className='flex'>
                
                <div className='flex items-center'>
                  <FontAwesomeIcon className='p-4 text-2xl rounded-md bg-whiteGrey' icon={faFileImage} />
                  <div className='pl-3'>
                  <h1 className='text-base font-bold'>Latency optimization </h1>
                  <p className='text-sm'>Improve latency across multiple use cases</p>                 
               
                </div>    
                </div>
       
             
                </div>
                <div className='flex'>
                
                <div className='flex items-center'>
                  <FontAwesomeIcon icon={faWrench} className='p-3 text-2xl rounded-md bg-whiteGrey' />
                <div className='pl-3'>
                  <h1 className='text-base font-bold'>Optimizing LLM accuracy</h1>
                  <p className='text-sm'>Maximize correctness and consistent behavior of LLMs</p>                 
               
                </div>    
                </div>
                 
                </div>     
              
          </div>
        </div>


        <div className="grid gap-1 md:grid-cols-4 sm:grid-cols-2 py-14">


         <a href='' className='flex flex-col items-center justify-center p-2 text-center transition-all duration-300 ease-out rounded-lg hover:border hover:border-gray-700 hover:bg-secMainBlack'>
         <img src={qus} className='w-4 ' alt="" />
         
         <h1 className='py-3 font-bold'>Help Center</h1>
         <p className='text-sm text-darkText'>Frequently asked account and billing questions</p>
         </a>


         <a href='' className='flex flex-col items-center justify-center p-2 text-center transition-all duration-300 ease-out rounded-lg hover:border hover:border-gray-700 hover:bg-secMainBlack'>
         <FontAwesomeIcon icon={faComments} />
         <h1 className='py-3 font-bold'>Developer forum</h1>
         <p className='text-sm text-darkText'>Discuss topics with other developers         </p>
         </a>


         <a href='' className='flex flex-col items-center justify-center p-2 text-center transition-all duration-300 ease-out rounded-lg hover:border hover:border-gray-700 hover:bg-secMainBlack'>
         <FontAwesomeIcon icon={faBook} />
         <h1 className='py-3 font-bold'>Cookbook</h1>         
         <p className='text-sm text-darkText'>Open-source collection of examples and guides </p>
         </a>

         
         <a href='' className='flex flex-col items-center justify-center p-2 text-center transition-all duration-300 ease-out rounded-lg hover:border hover:border-gray-700 hover:bg-secMainBlack'>
         <FontAwesomeIcon icon={faHexagonNodes} />
         <h1 className='py-3 font-bold'>Status</h1>
         <p className='text-sm text-darkText'>Check the status of OpenAI services</p>
         </a>




       


       </div>


      </div>
    </div>
  );
};

export default Overveiw;
