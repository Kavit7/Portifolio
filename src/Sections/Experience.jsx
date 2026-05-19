import React from 'react'

const Experience = () => {
    const experiences=[
        {
            period:"2025 ",
            role:"Full stack Developer",
            company:"University of Dar-es-Salaam Computing Center Ucc",
            description:"Developing the System using Yii2 Framework",
            technologies:["Jquery", "Javascript","Html","PHP"],
            current:true
        },
        {
            period:"2025 ",
            role:"Full stack Developer",
            company:"University of Dar-es-Salaam Computing Center Ucc",
            description:"Developing the System using Yii2 Framework",
            technologies:["Jquery", "Javascript","Html","PHP"],
            current:true
        },
        {
            period:"2025 ",
            role:"Full stack Developer",
            company:"University of Dar-es-Salaam Computing Center Ucc",
            description:"Developing the System using Yii2 Framework",
            technologies:["Jquery", "Javascript","Html","PHP"],
            current:true
        },
    ]
  return (
    <section id='Experience' className='py-32 relative overflow-hidden'>
        <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-gray-900 rounded-full blur-3xl -translate-y-1/2'/>



     <div className='container mx-auto px-6 relation z-10'> 
        {/* Section header */}
        <div className='max-w-3xl mb-16'>
            <span className='text-white font-medium text-6xl'> Career Journey</span>
            <h2 className='text-4xl lg:text-5xl font-bold leading-tight fadin animate-delay-100 text-[#20B2A6]' >
Experience that <span className='font-serif italic font-normal text-white'>speaks, volumes</span></h2>
        
        <p className='text-gray-600 fadin animate-delay-200'>
            A timeline of my professional growth, from curious begginer to seniour engineer loading tems and building product at scale.
        </p>
        </div>
        {/*timeline*/}
        <div className='relative text-white' >
            <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#20B2A6]/70 t0-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.0)]'/>
         {/* {Experience item } */}
                <div className='space-y-12'>
                    {experiences.map((exp,idx)=>(
                        <div key={idx} className='relative grid md:grid-cols-2 gap-8 fadin' 
                        style={{
                            animationDelay:`${(idx +1) *150}ms`
                        }}
                        >
                            {/* Timeline dot */}
                            <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-[#20B2A6] rounded-full -translate-x-1/2 ring-2 ring-black z-10 '>{
                                exp.current && <span className='absolute inset-0 rounded-full bg-[#20B2A6] animate-ping opacity-75' />
                            }
                            </div>

                            {/* content */}
                            <div className={`pl-8 md:pl-0 ${idx %2 ===0  ? "md:pr-16 md:text-right" :"md:col-start-2 md:pl-16"} `}>
                                <div className='glass p-6 rounded-2xl border border-[#20B2A6]/30 hover:border-[#20B2A6]/50 transition-all duration-500'>
                                    <span className='text-sm text-[#20B2A6] font-medium'>{exp.period}</span>
                                    <h2 className='text-xl font-semibold mt-2'>{exp.role}</h2>
                                    <p className='text-gray-400' >
                                        {exp.company}
                                    </p>
                                    <p className='text-sm text-gray-400'>
                                        {exp.description}
                                    </p>
                                    <div className={`flex flex-wrap  gap-2 mt-4 ${(idx%2 ===0 ) ?" md:justify-end":""}`}>{exp.technologies.map((tech,tidx)=>(
                                        <span key={tidx} className='px-3 py-1 bg- text-xs rounded-full text-gray-500' >
                                            {tech}
                                        </span>
                                        
                                    ))}</div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>

        </div>
     </div>
    </section>
  )
}

export default Experience