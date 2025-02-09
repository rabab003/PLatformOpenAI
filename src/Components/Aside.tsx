import searchIcon from '../assets/iconoir_search.png';
import codeIMG from '../assets/bitcoin-icons_code-filled.png';
import userIcon from '../assets/fa-solid_users.png';
// import helpIcon from '../assets/weui_help-filled.png';
import qusIcon from '../assets/formkit_help.png';
import { NavLink } from 'react-router-dom';



const Aside = () => {
  const linkClasses = 'py-[5px] text-[14px] text-darkText rounded-md px-4';
  const activeLinkClasses = 'bg-mainHover text-white'; 

  return (
  <>
  <div className='px-1 capitalize'>

  <div className='flex px-2 py-1 border rounded-md cursor-pointer border-zinc-700'>
    <img className='pr-2' src={searchIcon} alt="" />
    <p className='text-zinc-500'>search</p>
  </div>




  <div className='w-full h-full p-2 pt-8 overflow-y-auto rounded-lg max-h-[520px] 
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>


     <p className='pb-1 font-bold uppercase '>get started</p>
     <div className='flex flex-col w-full gap-1 rounded-2xl'>
     <NavLink to="/overview" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : 'hover:bg-mainHover hover:text-white'}`}>Overview</NavLink>
     <NavLink to="/Quickstart" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : 'hover:bg-mainHover hover:text-white'}`}>Quickstart</NavLink>
     <NavLink to="/Models"className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeLinkClasses : 'hover:bg-mainHover hover:text-white'}`
          }
        >
        Models
        </NavLink>
     
     <a href="#" className='hover:bg-mainHover hover:text-white text-darkText rounded-md px-4 py-[5px] text-[14px]'>Models</a>
     <a href="#" className='hover:bg-mainHover hover:text-white text-darkText rounded-md px-4 py-[5px] text-[14px]'>changelog</a>
     <a href="#" className='hover:bg-mainHover hover:text-white text-darkText rounded-md px-4 py-[5px] text-[14px]'>terms and policies</a>    
     </div>

    <p className='pt-3 pb-1 font-bold uppercase '>capabilities</p>
    <div className='flex flex-col w-full gap-1 rounded-2xl'>
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>text generation</a>
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>vision</a>
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>image generation</a>
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>audio generation</a>    
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>speech to text </a>    
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>text to speech</a>    
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>embedding</a>    
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>moderation</a>    
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>reasoning</a>    
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>structured outputs</a>    
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>Predicted Outputs</a>    
    <a href="#" className='hover:bg-mainHover text-[14px] hover:text-white py-[5px] text-darkText rounded-md px-4'>Function calling</a>    
  


 
 
 
 
 </div>

    <p className='pt-3 pb-1 font-bold uppercase '>realtime</p>
    <div className='flex flex-col w-full gap-1 rounded-2xl'>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> overview</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>Realtime API with WebRTC</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>connect with WebSockets</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>model capabilities</a>       
   </div>

    <p className='pt-3 pb-1 font-bold uppercase '>platform</p>
    <div className='flex flex-col w-full gap-1 rounded-2xl'>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> fine-tuning</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>distllation</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>Evaluating</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> batch</a>       
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> prompt genration</a>       
   
   </div>


    <p className='pt-3 pb-1 font-bold uppercase '>assistants</p>
    <div className='flex flex-col w-full gap-1 rounded-2xl'>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> overview</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>quickstart</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>deep dive</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>tools</a>       
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> what's new?</a>       
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> migration guide</a>       
   
   </div>


    <p className='pt-3 pb-1 font-bold uppercase '>chatgpt</p>
    <div className='flex flex-col w-full gap-1 rounded-2xl'>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> actions</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>release notes</a>

   </div>


    <p className='pt-3 pb-1 font-bold uppercase '>best practices</p>
    <div className='flex flex-col w-full gap-1 rounded-2xl'>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> prompt engineering</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>production best pracrices</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>safety best practices</a>
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>prompt caching</a>       
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'>model selection</a>       
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> latency optimization</a>       
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> accuracy optimization </a>       
    <a href="#" className='hover:bg-mainHover hover:text-white py-[5px] text-[14px] text-darkText rounded-md px-4'> advanced usage  </a>       
   
   </div>


  </div>

  <div className='flex flex-col p-2 border-t-2 border-zinc-800'>
    <div className='flex items-center rounded-md cursor-pointer hover:bg-secMainBlack'>
       <img src={codeIMG} className='w-8' alt="" />       
       <a href="" className='pl-1 text-darkText'>Cookbook</a>
    </div>

    <div className='flex items-center rounded-md cursor-pointer p-[4px] hover:bg-secMainBlack'>
      <img src={userIcon} className='w-6' alt="" />       
      <a href="" className='pl-2 text-darkText'>Forum</a>
    </div>

    <div className='flex items-center rounded-md cursor-pointer p-[4px]  hover:bg-secMainBlack'>
      <img src={qusIcon} className='w-6' alt="" />       
      <a href="" className='pl-2 text-darkText'>Help</a>
    </div>

  </div>    
  
</div>

  </>
  )
}

export default Aside





// const Aside = () => {

//   return (
//     <aside className='flex flex-col w-full rounded-2xl'>
//       <p className='pt-3 pb-1 font-bold uppercase'>Realtime</p>
//       <div className='flex flex-col'>
//         <NavLink to="/overview" className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : 'hover:bg-mainHover hover:text-white'}`
//           }
//         >
//           Overview
//         </NavLink>

//         <NavLink to="/models" className={({ isActive }) =>
//             `${linkClasses} ${isActive ? activeLinkClasses : 'hover:bg-mainHover hover:text-white'}`
//           }
//         >
//           Model Capabilities
//         </NavLink>

//       </div>
//     </aside>
//   );
// };
