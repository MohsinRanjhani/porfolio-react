import heroImage from "../assets/ShaukatKorai.jpeg";
import profileImage from "../assets/Shaukat-korai.jpeg";
import article1Img from "../assets/Religious_Minorties.jpg";
import article2Img from "../assets/Climate_change.jpg";
import article3Img from "../assets/HumanRights.jpg";
import artical4 from "../assets/political.jpg";
import journalismImg from "../assets/freelance.jpg";
import journalism2Img from "../assets/research.jpg";
import channel1Img from "../assets/express.png"; // <-- add your channel logos
import channel2Img from "../assets/Voicepk.jpg";
import channel3Img from "../assets/freethinkers.png";
import channel4Img from "../assets/fridaytimes.png";
import channel5Img from "../assets/News_lens.png";
import channel6Img from "../assets/Nayadur.png";
import Contactform from "../components/Contactform"; 
import articleImg1 from "../assets/Article.jpg";
import articleImg2 from "../assets/karsaz.jpg";
import articleImg3 from "../assets/BYC.jpeg";
import articleImg4 from "../assets/sugarcane.jpg";
import articleImg5 from "../assets/Hindu_community.jpg";
import articleImg6 from "../assets/Sindh_law.jpg";
import { useState } from "react";

const articlesData = [
  {
    id: 1,
    title: "Trampled Rights: The Tragic Stories Behind Blasphemy-Related Killings in Pakistan",
    channel: "The Free Thinkers",
    image: articleImg1,
    url: "https://freethinker.co.uk/author/shaukat-korai/", // external link
    author: "Shaukat Korai",
  },
  {
    id: 2,
    title: "The Karsaz Smokescreen: A Sordid Case Of Terror And Tribulation",
    channel: "The friday times",
    image: articleImg2,
    url: "https://www.thefridaytimes.com/contributor/shaukat-korai",
    author: "Shaukat Korai",
  },
  {
    id: 3,
    title: "BYC once again barred from holding press conference at Karachi Press Club",
    channel: "voicepk.net",
    image: articleImg3,
    url: "https://voicepk.net/2026/01/byc-once-again-barred-from-holding-press-conference-at-karachi-press-club/",
    author: "Shaukat Korai",
  },
  {
    id: 4,
    title: "Sugar cane growers caught in the yearly price war",
    channel: "The Express Tribune",
    image: articleImg4, // replace later
    url: "https://tribune.com.pk/author/11834/shaukat-korai",
    author: "Shaukat Korai",
  },
  {
    id: 5,
    title: "Members Of Hindu Community Protest Against Forced Conversions",
    channel: "Nayadur.tv",
    image: articleImg5, // replace later
    url: "https://nayadaur.tv/contributor/shaukat-korai",
    author: "Shaukat Korai",
  },
  {
    id: 6,
    title: "Sindh’s law against forced conversion faces resistance",
    channel: "The News lens Pakistan",
    image: articleImg6, // replace later
    url: "https://newslens.pk/2016/12/22/sindhs-law-against-forced-conversion-faces-resistance/",
    author: "Shaukat Korai",
  },
];

const channelsData = [
  { id: 1, name: "Express Tribune", logo: channel1Img, url: "https://tribune.com.pk/" },
  { id: 2, name: "VoicePK.net", logo: channel2Img, url: "https://voicepk.net/" },
  { id: 3, name: "The Free thinker", logo: channel3Img, url: "https://freethinker.co.uk/" },
  { id: 4, name: "The Friday times", logo: channel4Img, url: "https://www.thefridaytimes.com/" },
  { id: 5, name: "The News lens Pakistan", logo: channel5Img, url: "https://newslens.pk/" },
  { id: 6, name: "Nayadur.tv", logo: channel6Img, url: "https://nayadaur.tv/" },
];

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div>
      {/* Hero Section */}
<section
  id="home"
  className="min-h-screen flex items-center justify-start bg-cover bg-center relative"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 text-left px-6 max-w-2xl ml-12">
    <h1
      className="text-5xl font-bold text-white"
      style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }}
    >
      Hello, I’m Shaukat Korai
    </h1>
    <p
      className="mt-6 text-gray-200 text-lg"
      style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}
    >
      a seasoned multimedia journalist based in Karachi, Sindh, with over 15 years of rich and diverse experience across print, broadcast, and digital media platforms..
    </p>
  </div>
</section>


 {/* About Section */}
<section id="about" className="bg-black py-24">
  <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">

    {/* Profile Image */}
    <div className="relative group mb-12">
      <img
        src={profileImage}
        alt="Shaukat Korai"
        className="rounded-3xl shadow-2xl max-w-sm object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 rounded-3xl bg-indigo-600/20 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
    </div>

    {/* About Me Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
      About Me
    </h2>

    {/* Description Text */}
    <div className="space-y-6 max-w-4xl text-center">
      <p className="text-gray-300 text-lg leading-relaxed">
        Shaukat Korai is a seasoned multimedia journalist based in Karachi, Sindh, with over 15 years of rich and diverse experience across print, broadcast, and digital media platforms. Throughout his career, he has established himself as a dedicated voice covering some of the most pressing and underreported issues in Pakistan, particularly in Sindh and beyond.
      </p>

      <p className="text-gray-400 text-lg leading-relaxed">
        His work spans multiple critical beats, combining sharp investigative reporting with compelling multimedia storytelling to bring attention to complex realities on the ground.
      </p>
    </div>

    {/* Expertise Cards */}
    <div className="grid sm:grid-cols-2 gap-6 mt-12 w-full">
      {/* Card 1 */}
      <div className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center text-center 
            border-2 border-transparent hover:border-indigo-400 hover:shadow-lg transition-all duration-300">

        <img src={article1Img} alt="Religious Minorities" className="h-24 w-24 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-bold text-indigo-400 mb-2">Religious Minorities</h3>
        <p className="text-gray-300 text-sm">
          Highlighting the lives, challenges, cultural heritage, and resilience of religious minority communities in Sindh, including Hindus, Christians, Sikhs, Dalits, and others.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center text-center 
            border-2 border-transparent hover:border-indigo-400 hover:shadow-lg transition-all duration-300">
        <img src={article2Img} alt="Climate Change" className="h-24 w-24 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-bold text-indigo-400 mb-2">Climate Change & Resilience</h3>
        <p className="text-gray-300 text-sm">
          Reporting on devastating climate impacts, floods, community adaptation, resilient infrastructure, and sustainable development in Sindh.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center text-center 
            border-2 border-transparent hover:border-indigo-400 hover:shadow-lg transition-all duration-300">

        <img src={article3Img} alt="Human Rights" className="h-24 w-24 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-bold text-indigo-400 mb-2">Human Rights</h3>
        <p className="text-gray-300 text-sm">
          Covering violations, activism, protests, and the broader struggle for justice, dignity, and accountability in Pakistan.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center text-center 
            border-2 border-transparent hover:border-indigo-400 hover:shadow-lg transition-all duration-300">

        <img src={artical4} alt="Political & Development Affairs" className="h-24 w-24 object-cover rounded-full mb-4" />
        <h3 className="text-xl font-bold text-indigo-400 mb-2">Political & Development Affairs</h3>
        <p className="text-gray-300 text-sm">
          Reporting on Sindh’s provincial governance, policy decisions, political developments, infrastructure projects, and the intersection of politics and development.
        </p>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">
      <a
        href="#contact"
        className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-300 hover:shadow-indigo-500/40 hover:shadow-lg"
      >
        Hire Me
      </a>
      <a
        href="/Mohsin-CV.pdf"
        download
        className="px-8 py-3 rounded-full border border-indigo-500 text-indigo-400 font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
      >
        Download CV
      </a>
    </div>
  </div>
</section>



      {/* Services Section */}
      <section id="services" className="min-h-screen bg-slate-950 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">My Services</h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              I offer professional journalism services focused on truth, impact, and powerful storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="group bg-black rounded-3xl overflow-hidden shadow-xl 
            border-2 border-transparent hover:border-indigo-500 hover:shadow-indigo-600/40 transition-all duration-500">

              <img
                src={journalismImg}
                alt="Freelance Journalism"
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-indigo-400">Freelance Journalism</h3>
                <p className="text-gray-300 leading-relaxed">
                 Freelance journalism covering news, features, and documentary reporting across print, broadcast, and digital platforms, with a strong focus on factual accuracy, ethical standards, and public interest reporting                </p>
              </div>
            </div>

            <div className="group bg-black rounded-3xl overflow-hidden shadow-xl 
            border-2 border-transparent hover:border-indigo-500 hover:shadow-indigo-600/40 transition-all duration-500">

              <img
                src={journalism2Img}
                alt="Storytelling"
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-indigo-400">Media Research & Investigative Reporting</h3>
                <p className="text-gray-300 leading-relaxed">
                 In-depth media research and investigative reporting with a strong focus on accuracy, ethical journalism, and real-world impact.                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
         <section className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-500 mb-12 text-center">
          Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500 transition cursor-pointer"
            >
              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Text */}
              <div className="p-5">
                <p className="text-sm text-indigo-400 mb-1">
                  {article.channel}
                </p>
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-400 mb-1">
                 By {article.author}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

      {/* Channels Section */}
     {/* Channels Section */}
<section id="channels" className="min-h-screen bg-slate-950 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-12 text-center">
      Channels I’ve Worked With
    </h2>

    {channelsData?.length > 0 && (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        {channelsData.map((channel) => (
          <div key={channel.id} className="flex flex-col items-center">
            {/* Logo box wrapped in link */}
            <a
              href={channel.url}       // <-- channel website link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={channel.logo}
                alt={channel.name}
                className="h-16 object-contain"
              />
            </a>
            {/* Channel name below logo */}
            <p className="mt-3 font-bold text-white text-center">{channel.name}</p>
          </div>
        ))}
      </div>
    )}
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-black py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Contact Me</h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Have a story to tell or a project in mind? Let’s connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">{/* Contact info here */}</div>
            <div><Contactform /></div>
          </div>
        </div>
      </section>
    </div>
  );
}
