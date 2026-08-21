import kmcSchoolLogo from '../assets/education/kmcschool.jpg'
import kmcCollegeLogo from '../assets/education/kmccollege.jpg'
import hcoeLogo from '../assets/education/hcoe.jpg'

const education = [
  {
    year: '2019 – 2023',
    title: 'KMC School',
    text: 'SEE · 3.70 GPA',
    logo: kmcSchoolLogo,
    url: 'https://kmcschool.edu.np/',
  },
  {
    year: '2023 – 2024',
    title: 'Kathmandu Model College',
    text: 'Higher Secondary · 3.64 GPA',
    logo: kmcCollegeLogo,
    url: 'https://ktmmodelcollege.edu.np/',
  },
  {
    year: '2025 – Present',
    title: 'Himalaya College of Engineering',
    text: 'BSc CSIT · 1st Year',
    logo: hcoeLogo,
    url: 'https://hcoe.edu.np/',
  },
]

export function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education-timeline">
        <div className="education-line" />

        {education.map((item) => (
          <div className="education-item" key={item.title}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="education-logo"
            >
              <img src={item.logo} alt={item.title} />
            </a>

            <div className="education-info">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}