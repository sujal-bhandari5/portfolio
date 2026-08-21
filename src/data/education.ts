import kmcSchoolLogo from '../assets/education/kmcschool.jpg'
import kmcCollegeLogo from '../assets/education/kmccollege.jpg'
import hcoeLogo from '../assets/education/hcoe.jpg'

export const portfolio = {
  // keep your existing name, title, skills, projects, etc.

  education: [
    {
      period: 'Grade 7 – 10',
      degree: 'School Education',
      institution: 'KMC School',
      location: 'M8MJ+XQF, Shankhamul Marg, Kathmandu 44600, Nepal',
      description:
        'Studied from Grade 7 to 10 and completed Grade 8 BLE with a 3.55 GPA and SEE with a 3.70/4.00 GPA under the NEB.',
      logo: kmcSchoolLogo,
      url: 'https://kmcschool.edu.np/',
      result: 'SEE: 3.70/4.00 GPA · Grade 8 BLE: 3.55 GPA',
    },

    {
      period: 'Class 11 – 12',
      degree: 'Higher Secondary Education',
      institution: 'Kathmandu Model College',
      location: 'Bagbazar, Kathmandu, Nepal',
      description:
        'Completed Class 11 with a 3.62 GPA and graduated high school with a 3.64/4.00 GPA under the NEB Board.',
      logo: kmcCollegeLogo,
      url: 'https://ktmmodelcollege.edu.np/',
      result: 'Class 11: 3.62 GPA · High School: 3.64/4.00 GPA',
    },

    {
      period: 'Currently Studying · 1st Year, 2nd Semester',
      degree: 'BSc CSIT',
      institution: 'Himalaya College of Engineering',
      location: 'Chyasal-9, Lalitpur, Bagmati, Nepal',
      description:
        'Currently pursuing a BSc CSIT degree and building a strong foundation in programming, software development, databases, mathematics, and modern web technologies.',
      logo: hcoeLogo,
      url: 'https://hcoe.edu.np/',
      result: 'BSc CSIT · 1st Year, 2nd Semester',
    },
  ],
}