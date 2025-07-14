import { AnimatedTestimonials } from "./ui/Testi";
import { SparklesCore } from "./ui/Sparkles";
export default function AnimatedCertificationsDemo() {
  
const testimonials = [
    {
      quote:
        "Mastered object-oriented programming, multithreading, collections framework, and design patterns. Built enterprise-level applications with Spring Boot and Hibernate.",
      name: "Advanced Java Masterclass",
      designation: "March 2025",
      src: "https://media.licdn.com/dms/image/v2/D4D22AQHANZzbQS2aUg/feedshare-shrink_800/B4DZWAarABHAAo-/0/1741616233951?e=1755129600&v=beta&t=LWY8y8cf0i86TTZbogd9UK8xq_j_nLpcp2nYoGHSkKU",
    },
    {
      quote:
        "Gained expertise in HTML5, CSS3, Flexbox, Grid, and responsive design principles. Created mobile-first, cross-browser compatible websites with modern UI/UX practices.",
      name: "Responsive Web Design",
      designation: "July 2024",
      src: "https://media.licdn.com/dms/image/v2/D5622AQGoNL9ERw8lew/feedshare-shrink_800/feedshare-shrink_800/0/1720334002145?e=1755129600&v=beta&t=k0Mo_W8Nkih6kzX7ujZBiCMKfEDxvKAVURqEYwVpzkY",
    },
    {
      quote:
        "Developed proficiency in SQL queries, database design, normalization, and data manipulation. Worked with complex joins, subqueries, and database optimization techniques.",
      name: "IBM SQL DataBase",
      designation: "Jun 2024",
      src: "https://media.licdn.com/dms/image/v2/D5622AQHKTzUTDbcwEQ/feedshare-shrink_800/feedshare-shrink_800/0/1718796940986?e=1755129600&v=beta&t=eMxjvhg38KKfPxenrq8AyDBmBUi3wDyNM9ujCYIIVwo",
    },
    {
      quote:
        "Mastered advanced Python concepts including decorators, generators, context managers, and async programming. Built scalable applications with testing and debugging techniques.",
      name: "Google Advance Python",
      designation: "January 2024",
      src: "/cert2.png",
    },
    {
  quote:
    "Mastered fundamental and advanced data structures including arrays, linked lists, trees, graphs, and hash tables. Implemented efficient algorithms for sorting, searching, and dynamic programming with optimal time and space complexity.",
  name: "Data Structure Algorithm",
  designation: "August 2024",
  src: "/cert1.png",
},
    {
      quote:
        "Achieved expertise in complex SQL operations, window functions, CTEs, and advanced query optimization. Demonstrated skills in data analysis and database performance tuning.",
      name: "Hackerrank Sql Advanced",
      designation: "June 2024",
      src: "https://media.licdn.com/dms/image/v2/D5622AQGw4llK8Y5Mtg/feedshare-shrink_800/feedshare-shrink_800/0/1718915908075?e=1755129600&v=beta&t=MJE3ufZnQe3I8zY2naFNth7Clbn4u-7Vp_RtvEjTGHI",
    },
  ];
  return (
    <main>
        <div id="cert" className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Certifications
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients*/}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  <AnimatedTestimonials testimonials={testimonials} />
  </main>
  );
}