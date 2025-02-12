import React from 'react';

interface Testimonial {
  name: string;
  status: string;
  headline: string;
  quote: string;
  bgColor: string;
  textColor: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const firstName = testimonial.name.split(' ')[0].toLowerCase();
  const imageName = `image-${firstName}.jpg`;
  return (
    <div 
      className="flex flex-col gap-4"
      style={{
        backgroundImage: testimonial.name.includes('Daniel') ? 
          `url("data:image/svg+xml,%3Csvg width='104' height='102' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z' fill='%23A775F1' fill-rule='nonzero'/%3E%3C/svg%3E")` : 
          'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '85% 0%'
      }}
    >
      <div className="flex items-center gap-4">
        <img
          src={`/assets/${imageName}`}
          alt={testimonial.name}
          className="w-8 h-8 rounded-full ring-2 ring-purple-400/40"
        />
        <div>
          <h2 className="font-semibold">{testimonial.name}</h2>
          <p className="opacity-50">{testimonial.status}</p>
        </div>
      </div>
      <p className="text-xl font-semibold">{testimonial.headline}</p>
      <p className="opacity-70 leading-relaxed">{testimonial.quote}</p>
    </div>
  );
}

function App(): React.ReactNode {
  const testimonials: Testimonial[] = [
    {
      name: "Daniel Clifford",
      status: "Verified Graduate",
      headline: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
      quote: "\"I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup.\"",
      bgColor: "bg-purple-600",
      textColor: "text-white",
    },
    {
      name: "Jonathan Walters",
      status: "Verified Graduate",
      headline: "The team was very supportive and kept me motivated",
      quote: "\"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself.\"",
      bgColor: "bg-gray-600",
      textColor: "text-white",
    },
    {
      name: "Jeanette Harmon",
      status: "Verified Graduate",
      headline: "An overall wonderful and rewarding experience",
      quote: "\"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.\" ",
      bgColor: "bg-white",
      textColor: "text-gray-600",
    },
    {
      name: "Patrick Abrams",
      status: "Verified Graduate",
      headline: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      quote: "\"The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.\"",
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
    {
      name: "Kira Whittle",
      status: "Verified Graduate",
      headline: "Such a life-changing experience. Highly recommended!",
      quote: "\"Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!\"",
      bgColor: "bg-white",
      textColor: "text-gray-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 lg:p-12">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {/* Daniel Clifford - Spans 2 columns */}
        <div className={`${testimonials[0].bgColor} ${testimonials[0].textColor} p-10 rounded-lg shadow-lg lg:col-span-2`}>
          <TestimonialCard testimonial={testimonials[0]} />
        </div>

        {/* Jonathan Walters */}
        <div className={`${testimonials[1].bgColor} ${testimonials[1].textColor} p-10 rounded-lg shadow-lg`}>
          <TestimonialCard testimonial={testimonials[1]} />
        </div>

        {/* Kira Whittle - Spans 2 rows on the right */}
        <div className={`${testimonials[4].bgColor} ${testimonials[4].textColor} p-10 rounded-lg shadow-lg lg:row-span-2`}>
          <TestimonialCard testimonial={testimonials[4]} />
        </div>

        {/* Jeanette Harmon */}
        <div className={`${testimonials[2].bgColor} ${testimonials[2].textColor} p-10 rounded-lg shadow-lg`}>
          <TestimonialCard testimonial={testimonials[2]} />
        </div>

        {/* Patrick Abrams - Spans 2 columns */}
        <div className={`${testimonials[3].bgColor} ${testimonials[3].textColor} p-10 rounded-lg shadow-lg lg:col-span-2`}>
          <TestimonialCard testimonial={testimonials[3]} />
        </div>
      </div>
    </div>
  );
}

export default App;
