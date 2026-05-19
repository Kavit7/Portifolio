import React, {useEffect, useState} from 'react'
import Button from '../components/Button'
import { Menu,X} from 'lucide-react'
const NavBar = () => {
    const NavLinks=[
      {href:"#About",label:"About"},
      {href:"#Experience",label:"Experience"},
      {href:"#Projects",label:"Projects"},
      {href:"#Testimonials",label:"Testimonials"},  
    ]
    const [mobileOpen,setMobile]=useState(false)
    const[isScrolled,setIsScrolled]=useState(false)

    useEffect(()=>{
         const handleScroll=()=>{
            if (window.scrollY>50){
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
         }
        window.addEventListener("scroll",handleScroll)

        return ()=>window.removeEventListener("scroll",handleScroll)
    },[])

  return (
    <header className={`fixed top-0 left-0  right-0  transition-all duration-500 ${isScrolled ? " glass py-3": "bg-transparent py-5 " } z-50 `}>
        <nav className='container flex mx-auto px-6 items-center justify-between '>
        <a  href="#" className='text-xl tracking-tight hover:text-blue-400 text-white '>
            PM<span> .</span>
        </a>
            {/*Desketop nav*/}
            <div className='hidden md:flex gap-1'>
              <div className=' glass rounded-full px-2 flex items-center gap-1 py-1'>
                {NavLinks.map((links,index)=>( 
                    <a href={links.href} key={index} className='text-sm px-4 py-2 hover:text-blue-500 hover:bg-gray-900 rounded-full'>{links.label}</a>
                ))}
              </div>

            </div>

             {/*Cta button*/}
        <div className='hidden md:block'>
          <Button size='sm' children={"Contact me"} className/>
        </div>
        
        <button className='md:hidden ' onClick={()=>setMobile(!mobileOpen)}>
        {mobileOpen ? <X size={35} className='text-white'/> : <Menu size={35} className='text-white'/>}
        </button>
        </nav>

        {mobileOpen && (<div className='md:hidden fadin'>
            <div className=' glass px-2 flex flex-col gap-1 py-6 px-6'>
                {NavLinks.map((links,index)=>( 
                    <a href={links.href} key={index} onClick={()=>setMobile(false)} className='text-lg px-4 py-2 hover:text-blue-500 rounded hover:bg-gray-900 left'>{links.label}</a>
                ))}
                 <Button size='sm' children={"Contact me"} className/>
          </div>
           
        </div>)}


  
    </header>
  )
}

export default NavBar