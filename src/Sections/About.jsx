
import React from 'react'
  import {
  Code2,
  Monitor,
  Server,
  Zap,
  Database,
} from "lucide-react"

const About = () => {


const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Monitor,
    title: "Modern Frontend",
    description: "Building responsive and interactive UIs using React and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Developing secure and efficient backends with Java, Node.js, and PHP (Yii2).",
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Optimizing applications for speed, scalability, and reliability.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing well-structured databases with MySQL and efficient data flow.",
  },
]




  return (
    <section id='About' className='py-32 relative overflow-hidden text-white'>

  <div className='container mx-auto px-6 relative z-10'>
    <div className='grid lg:grid-cols-2 gap-16 items-center'>
    <div className='space-y-8' >
        {/*Left colum*/}
        <div className='fadin' >
            <span className='text-gray-500 text-sm font-medium tracking-wider uppercase '> About Me</span>
        </div>
        <h2 className='text-4xl lg:text-5xl font-bold leading-tight fadin animate-delay-100 text-[#20B2A6]' >
            Building the future,
            <span className='font-serif italic font-normal text-white'> One component at a time.</span>
        </h2>
        <div className='space-y-5  text-gray-400 fadin animate-delay-200'>
          <p>
            I’m Kavit Paul, a software engineer with a strong focus on building modern web applications using React and Java. I enjoy turning complex ideas into clean, functional solutions that are easy to use and easy to maintain.
          </p>
          <p>
            My development style emphasizes clean code, performance, and scalability. I’ve worked with PHP using the Yii2 framework, relational databases like MySQL, and I’m comfortable designing systems that grow smoothly as user needs evolve.

          </p>
          <p>
            Beyond writing code, I’m passionate about learning, improving, and solving real-world problems through technology. I aim to build software that not only works well, but also delivers meaningful value and a great experience for users.
          </p>
        </div>
        <div className='glass rounded-2xl p-6 fadin text-gray-400 animate-delay-400'>
            <p className='text-lg font-medium italic text-gray-400'>
                My mission is to build reliable, scalable, and high-performance software that solves real-world problems. I aim to write clean, maintainable code, continuously improve my skills, and create digital experiences that are both meaningful and enjoyable for users.
            </p>
        </div>
    </div>
    {/*Right Column*/}
    <div className='grid sm:grid-cols-2 gap-6'>
       {highlights.map((item,idx)=>(
        <div key={idx} className='glass p-6 rounded-2xl fadin' style={{
            animationDelay:`${(idx +1) * 100 }ms`
        }}>
            <div className='w-12 h-12 rounded-xl bg-[#20B2A6]/10 flex items-center justify-center mb-4 hover:bg-[#20B2A6]/20'><item.icon className='w-6 h-6 text-[#20B2A6]'/></div>
            <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
            <p className='text-sm text-gray-500'>{item.description}</p>
        </div>

       ))}
    </div>
    </div>
  </div>

    </section>
  )
}

export default About