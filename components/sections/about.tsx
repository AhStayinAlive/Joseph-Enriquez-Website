import ScrollRevealText from "@/components/scroll-reveal-text"
import SectionHeader from "@/components/section-header"

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>

      <SectionHeader title="ABOUT" subtitle="Get to know the person behind the code" />

      <div className="space-y-6">
        <ScrollRevealText direction="fade" delay={0}>
          <p className="mb-4 text-lg leading-relaxed">
            I'm a developer passionate about crafting accessible, pixel-perfect data pipelines and software solutions
            that blend thoughtful engineering with robust performance. My favorite work lies at the intersection of data
            engineering and software development, creating experiences that not only process data efficiently but are
            meticulously built for scalability and usability.
          </p>
        </ScrollRevealText>

        <ScrollRevealText direction="fade" delay={200}>
          <p className="mb-4 text-lg leading-relaxed">
            Currently, I'm a <span className="font-medium text-slate-200">Retail Tech Intern</span> at{" "}
            <a
              className="font-medium text-slate-200 hover:text-red-400 focus-visible:text-red-400 transition-colors duration-300"
              href="https://ing.com"
              target="_blank"
              rel="noreferrer"
            >
              ING Hubs Philippines
            </a>
            , specializing in data engineering. I contribute to the creation and maintenance of data pipelines that
            power ING's retail platform, ensuring our systems meet enterprise standards and best practices to deliver
            reliable data processing experiences.
          </p>
        </ScrollRevealText>

        <ScrollRevealText direction="fade" delay={400}>
          <p className="mb-4 text-lg leading-relaxed">
            In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
            <span className="font-medium text-slate-200">e-commerce platforms</span> and{" "}
            <span className="font-medium text-slate-200">large corporations</span> to{" "}
            <span className="font-medium text-slate-200">start-ups</span> and{" "}
            <span className="font-medium text-slate-200">academic research projects</span>. Additionally, I also led
            various{" "}
            <span className="font-medium text-slate-200">
              <a
                className="hover:text-red-400 focus-visible:text-red-400 transition-colors duration-300"
                href="#projects"
              >
                tech initiatives
              </a>
            </span>{" "}
            in the student community, organizing events and managing technical projects.
          </p>
        </ScrollRevealText>

        <ScrollRevealText direction="fade" delay={600}>
          <p className="text-lg leading-relaxed">
            In my spare time, I'm usually exploring new technologies, contributing to open source projects, or leading
            tech seminars and workshops for fellow students.
          </p>
        </ScrollRevealText>
      </div>
    </section>
  )
}

export default About
