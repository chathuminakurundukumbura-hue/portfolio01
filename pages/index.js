import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SectionCard from '../components/SectionCard'

export default function Home(){
  return (
    <>
      <Head>
        <title>Chathumina Bandara — Biomedical Technology</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Portfolio of Chathumina Bandara — Biomedical Technology student." />
      </Head>

      <Nav />
      <main>
        <Hero />

        <section className="container section">
          <h2>Career Objective</h2>
          <SectionCard>
            <p>Dedicated and responsible undergraduate student in Biomedical Technology with strong leadership experience and a passion for healthcare innovation. Seeking opportunities to apply academic knowledge, leadership skills, and teamwork abilities in biomedical, clinical, or research-related environments.</p>
          </SectionCard>
        </section>

        <section id="education" className="container section">
          <h2>Education</h2>
          <SectionCard>
            <h3>Bachelor of Health Sciences (BHSc) in Biomedical Technology</h3>
            <p>Faculty of Indigenous Health Sciences and Technology — Gampaha Wickramarachchi University of Indigenous Medicine, Sri Lanka</p>
            <p>Status: Undergraduate (Current)</p>
          </SectionCard>
        </section>

        <section id="skills" className="container section">
          <h2>Skills & Interests</h2>
          <div className="grid">
            <SectionCard>
              <h4>Technical</h4>
              <ul>
                <li>Basic Biomedical Equipment Knowledge</li>
                <li>ECG, EEG, EMG (Basic)</li>
                <li>MS Word, Excel, PowerPoint</li>
                <li>Report Writing & Documentation</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h4>Soft Skills</h4>
              <ul>
                <li>Leadership & Team Management</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Problem Solving</li>
              </ul>
            </SectionCard>

            <SectionCard>
              <h4>Languages</h4>
              <ul>
                <li>Tamil — Fluent</li>
                <li>English — Good</li>
                <li>Sinhala — Basic</li>
              </ul>
            </SectionCard>
          </div>
        </section>

        <section id="leadership" className="container section">
          <h2>Leadership & Activities</h2>
          <SectionCard>
            <h3>President — LEO / LION Society</h3>
            <ul>
              <li>Led and coordinated society activities and community service projects.</li>
              <li>Managed team members and organized meetings and events.</li>
              <li>Actively involved in social responsibility and volunteer initiatives.</li>
            </ul>
          </SectionCard>
        </section>

        <section id="contact" className="container section contact-section">
          <h2>Contact</h2>
          <SectionCard>
            <p>Email: <a href="mailto:chathuminauni2003@gmail.com">chathuminauni2003@gmail.com</a></p>
            <p>Phone: 0701688606</p>
            <p>Address: Elivitiya, Kumarakattuwa, Sri Lanka</p>
          </SectionCard>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Chathumina Bandara — Biomedical Technology</p>
          <p><a href="https://seidhpp.netlify.app" target="_blank" rel="noreferrer">Old portfolio</a></p>
        </div>
      </footer>
    </>
  )
}
