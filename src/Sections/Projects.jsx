import React from 'react'
import Bacj from '../assets/background 2.jpg'
import { ArrowUpRight, Github } from 'lucide-react'
const Projects = () => {

    const projects=[
        {
            title:"Bar Counter System",
            description:" This system is designed to assist bar managers in performing accurate calculations and managing daily business operations effectively.",
            image:Bacj,
            tags:['php',"MysQl","HTML","Css","JavaScript"],
            link:"#",
            github:"#"

        },
         {
            title:"Bar Counter System",
            description:" This system is designed to assist bar managers in performing accurate calculations and managing daily business operations effectively.",
            image:Bacj,
            tags:['php',"MysQl"],
            link:"#",
            github:"#"

        }
    ]
  return (
    <section id='Projects' className='py-32 relative overflow-hidden text-white'>
  <div className='absolute w-96 h-96 top-1/4 right-0 rounded-full blur-3xl'/>
  <div className='absolute w-96 h-96 bottom-1/4 left-0  rounded-full blur-3xl'/>
  <div className='container mx-auto px-6 relative z-10'>
      <div className='text-center mx-auto mx-w-3xl mb-16  '>
        <span className='text-gry-400 text-sm font-medium tracking-wider uppercase fadin'> Featured Work</span>
        <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 fadin animate-delay-200 text-gray-400'>
            Project that 
            <span className='font-serif italic font-normal text-white'> make an impact.</span>
        </h2>
        <p className='text-gray-500 fadin animate-delay-300'>
            A selection for my recent work, from complex web application to innovative tools that solve real-world problem.
        </p>

      </div>
      {/*project Gid*/}
      <div className='grid grid-cols-2 gap-8'>
        {projects.map((project,idx)=>(
            <div key={idx} className='glass rounded overflow-hidden fadin md:row-span-1'
            style={{
            animationDelay:`${(idx +1) * 100 }ms`}}>
                {/*image*/}
                <div className='relative overflow-hidden aspect-video'>
                <img src={project.image}
                alt={project.title}
                className='w-full h-full object-cover transition-transform duration-700 hover:scale-110'/>
                <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'/>
             {/*Overlay link*/}
              <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <a href='#' className=' rounded p-3 glass rounded-full hover:bg-[#20B2A6] hover:text-gray-400 transition-all'>
                    <ArrowUpRight className='w-5 h-5 '/>
                </a>
                <a href='#' className=' rounded p-3 glass rounded-full hover:bg-[#20B2A6] hover:text-gray-400 transition-all'>
                    <Github className='w-5 h-5 '/>
                </a>
              </div>
             </div>
             {/*content*/}
             <div className='p-6 space-y-4'>
               <div className='flex items-start justify-between'>
                <h3 className='text-xl font-semibold text-white'>{project.title}</h3>
                <ArrowUpRight className='w-5 h-5 text-gray-400 hover:text-gray-400 hover:translate-x-1 hover:translate-y-1 transition-all'/>
               </div>
               <p className='text-gray-400 text-sm'>{project.description}</p>
               <div className=' flex flex-wrap gap-3'> 
                 {project.tags.map((tag,tidx)=>(
                    <span key={tidx} className='px-4 rounded-full py-1.5 bg-black/30 text-xs font-medium border border-[#20B2A6]/50 text-gray-300 hover:text-[#20B2A6]/30 transition-all duration-300'>
                     {tag}
                    </span>

                 ))}
               </div>

                </div>

            </div>
        ))}

      </div>
      <div className='text-center fadin animate-delay-200 mt-14 flex items-center justify-center'> 
      <button className='glass px-3 py-2 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-100 cursor-pointer '>
          View all project 
            <ArrowUpRight className='w-5 h-5 bg-[#20B2A6] rounded-full ml-3'/>
      </button>
      </div>

  </div>

    </section>
  )
}

export default Projects