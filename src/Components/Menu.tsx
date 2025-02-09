import openAi from '../assets/Symbol.svg.png';
import pic from '../assets/wqq.webp';
const Menu = () => {
  return (
    <div className='flex items-center justify-between w-full px-5 py-2 text-white '>
        <div className='lg:w-3/4'>
            <a className='flex items-center font-bold text-white capitalize ' href="#"><img className='h-6 pr-1 w-7' src={openAi} alt="" /> openAi <span className='pl-1 font-normal'>Platform</span> </a>
        </div>
        <div className='flex items-center justify-around lg:w-1/4'>
            <a href="#" className='hidden font-bold md:flex'>Docs</a>
            <a href="#" className='hidden text-zinc-500 md:flex md:px-3 lg:px-5'>API refrence</a>
            <button className='px-2 py-1 mr-3 text-xs font-medium rounded-md bg-emerald-700 sm:text-base'> start Building</button>
            <img src={pic} className='w-10 rounded-full' alt="" />
        </div>
    </div>
  )
}

export default Menu
