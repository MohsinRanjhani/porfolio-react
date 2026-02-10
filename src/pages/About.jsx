import profileImage from "../assets/Shaukat-korai.jpeg"; // Add your profile photo here

export default function About() {
  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600">
            About Me
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hello! I’m Shaukat Korai, a passionate journalist with a focus on investigative reporting and multimedia storytelling. 
            I believe in the power of stories to inform, inspire, and create impact.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Over the years, I have contributed to multiple publications and worked on projects ranging from breaking news coverage to in-depth investigative articles. 
            My goal is to continue sharing stories that matter and connect people with meaningful content.
          </p>

          {/* Optional Buttons */}
          <div className="flex gap-4 mt-4">
            <a
              href="/contact"
              className="px-6 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Contact Me
            </a>
            <a
              href="/articles"
              className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
            >
              My Work
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Shaukat Korai"
            className="rounded-2xl shadow-lg max-w-sm object-cover"
          />
        </div>

      </div>
    </section>
  );
}
