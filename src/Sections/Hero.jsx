import React from 'react'
import Background from '../assets/background.jpg'
import Background2 from '../assets/profile.jpg'
import { ArrowRight, ChevronDown, Download, Github, Linkedin, MoveRight, Twitter } from 'lucide-react'
import Button from '../components/Button'
const Hero = () => {
    const skills = [
  "React",
  "Java",
  "PHP (Yii2)",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MySQL",
  "Node.js",
  "Git",
  "springboot"
];

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
        <div className='absolute inset-0'>
            <img src={Background} alt='Background' className='object-cover opacity-40 w-full h-full'/>
            <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black '/>
        </div>
        {/* Green dots*/}
        <div className='absolute inset-0 overflow-hidden pointer-events-none '> 
        {[...Array(30)].map((_,i)=>(
            <div className='absolute w-1.5 h-1.5 rounded-full opacity-60' style={{
                backgroundColor:"#20B2A6",
                top:`${Math.random() * 100}%`,
                left:`${Math.random() * 100}%`,
                animation:`slow-drift ${15+ Math.random()* 20}s ease-in-out infinite `,
                animationDelay:`${Math.random() * 5}s`
            }}>

            </div>
        ))}
        </div>

        {/*Content*/}
        <div  className='container mx-auto px-6 pt-32 pb-20 relative Z-10'>
         <div className='grid lg:grid-cols-2 gap-2 '>
            {/* Left Column -Text Content*/}
            <div className='space-y-8'>
                <div className='fadin animate-delay-300'> 
                    <span className='inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gray-900 text-sm text-[#20B2A6]'> 
                   <span className='w-2 h-2 bg-[#20B2A6] rounded-full  animate-pulse '/> Software Enginnering  . React Specialist
                   </span>
                </div>
            
            {/*header line*/}
            <div className='space-y-4'>
               <h1 className='text-white text-5xl md:text-6xl lg:text-7xl leading-tight fadin animate-delay-400'>
                Crafting <span className='text-[#20B2A6] glow-text'>digital</span>
               
               <br/>
               experience with
               <br/>
               <span className='font-serif italic font-normal text-white'> 
                Precision
             </span>
                </h1>
                <p className='text-gray-600 text-lg max-w-lg fadin animate-delay-600'>
                   Hi, I’m Kavit Paul, a software engineer specializing in React, Java, and occasionally PHP using the Yii2 framework.
I focus on building scalable, high-performance applications that are clean, reliable, and easy for users to love.
                </p>
            </div>
            {/*CTAS */}
            <div className='flex items-center gap-7 '>
                <Button  className="flex items-center gap-2">
  Contact me
  <ArrowRight size={35} />
</Button>
 <button className='bg-gray-700 text-[#20B2A6]  rounded-full p-3 font-bold border border-[#20B2A6]  flex gap-3'>
     <Download/> <span>Download CV </span>
 </button>
            </div>
            {/*Social media*/}
           <div className='flex items-center gap-2'>
                   <span className='text-white font-bold'>Follow:</span>
            {[{icon:Twitter,href:"#"},{icon:Github,href:"#"},{icon:Linkedin,href:"#"}].map((socila,idx)=>(
                <a href={socila.href} className='text-white glass rounded-full p-2 hover:text-blue-500 translation-all duration-300'>{<socila.icon/>}</a>
            ))}

           </div>

    </div>
            {/*Right column -Profile Image*/}
     <div className='relative  fadin animate-delay-500'>
      <div className='relative max-w-md mx-auto'>
        {/*Image profile*/}
        <div className=' absolute inset-0 rounded-3xl bg-gradient-to-br from-black/30 via-transparent to-black/10 animate-pulse'/>
        <div className='relative glass rounded-3xl p-1 '>

        <img src={Background2} alt='Kavit Paul' className='w-full aspect-[4/5] object-cover rounded-2xl'/>
        {/*floating badge*/}
        <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 px-3 animate-float ' >
            <div className='flex items-center gap-3' >
                <div className='w-3 h-3 bg-green-500  rounded-full animate-pulse'/>
                <span className='text-sm font-medium'>Available for work</span>
            </div>
        </div>

        <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float'>
            <div className='text-2xl font-bold text-  '>5+</div>
            <div className='text-xs text-gray-400'> Years Exp.</div>
        </div>

         </div>
      </div>
       </div> 
         </div>



         {/*Skill section*/}
         <div className='mt-4 fadin animate-delay-600'> 
            <p className='text-gray-300 text-sm  text-center'>Technology i work with.</p>
         </div>
         <div className='relative overflow-hidden'>
            <div className='flex animate-marque text-white'>
                { [...skills,...skills].map((skill,idx)=>(
                    <div key={idx} className='flex-shrink-0 px-8 py-4'>
                        <span className='text-xl font-semibold text-gray-300 hover:text-gray-400 transition-colors'>{skill}</span>
                    </div>

                )

                )}
            </div>
         </div>
        </div>
        <div className='absolute bottom-4 left-1/2 -translate-1/2 fadin '>
         <a href="#about" className=" flex flex-col items-center gap-2 text-gray-300 ">         
         <span className='text-xs uppercase tracking-wider'>
            Scroll
         </span>
         <ChevronDown className='w-6 h-6 animate-bounce'/>
        </a>
        </div>

    </section>
  )
}

export default Hero