import email from '../assets/email.svg';
import website from '../assets/website.svg';
import phone from '../assets/phone.svg';
import city from '../assets/city.svg';
import instagram from '../assets/instagram.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import russian from '../assets/russian.svg';
import english from '../assets/english.svg';
import brush from '../assets/brush.svg';
import earth from '../assets/earth.svg';
import play from '../assets/play.svg';
import freecodecamp from '../assets/freecodecamp.svg';
import canshecode from '../assets/canshecode.svg';
import ufa from '../assets/ufa.svg';
import LHL from '../assets/LHL.svg';
import git from '../assets/git.svg';
import google from '../assets/google.svg';
import winter from '../assets/winter.svg';
import portfolio from '../assets/portfolio.svg';
import instastaff from '../assets/instastaff.svg';
import react from '../assets/react.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import javascript from '../assets/javascript.svg';
import vscode from '../assets/vscode.svg';
import figma from '../assets/figma.svg';
import gittool from '../assets/gittool.svg';
import postgresql from '../assets/postgresql.svg';

const constants = {
  infos: [
    {
      id: 1,
      img: email,
      title: 'Email',
      href: 'mailto:akhtyamovadiana@gmail.com',
      text: 'akhtyamovadiana@gmail.com'
    },
    {
      id: 2,
      img: website,
      title: 'Website',
      href: 'https://github.com/Diana1888',
      text: 'https://github.com/Diana1888'
    },
    {
      id: 3,
      img: phone,
      title: 'Phone',
      href: 'tel:+16478505661',
      text: '(+1) 647 850 5661'
    },
    {
      id: 4,
      img: city,
      title: 'Address',
      href: '',
      text: 'Toronto, Canada'
    }
  ],

  socials: [
    {
      id: 1,
      img: instagram,
      title: 'Instagram',
      link: 'https://www.instagram.com/little_didi',
      text: '@little_didi'
    },
    {
      id: 2,
      img: github,
      title: 'Github',
      link: 'https://github.com/Diana1888',
      text: '@diana1888'
    },

    {
      id: 3,
      img: linkedin,
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/diana-ichmoukhametov/',
      text: '@diana-ichmoukhametov'
    }
  ],

  languages: [
    {
      id: 1,
      img: russian,
      title: 'Russian',
      text: 'Native'
    },
    {
      id: 2,
      img: english,
      title: 'English',
      text: 'Professional working'
    }
  ],

  hobbies: [
    {
      id: 1,
      img: earth,
      title: 'Traveling'
    },
    {
      id: 2,
      img: play,
      title: 'Movies'
    },
    {
      id: 3,
      img: brush,
      title: 'Painting'
    }
  ],

  courses: [
    {
      id: 1,
      img: freecodecamp,
      title: 'freeCodeCamp',
      subtitle: 'Responsive Web Design',
      year: 'Dec 2021 - Feb 2022'
    },
    {
      id: 2,
      img: canshecode,
      title: 'CanSheCode',
      subtitle: 'Front-end web development',
      year: 'Jan 2022 - June 2022'
    }
  ],

  schools: [
    {
      id: 1,
      img: ufa,
      title: 'Ufa State Aviation Technical University',
      degree: 'Bachelor in Applied Informatics in Economics',
      year: '2005 - 2010',
      score: '80%'
    },

    {
      id: 2,
      img: LHL,
      title: 'LightHouse Labs',
      degree: 'Web development diploma',
      year: '2023 - 2024',
      score: '100%'
    }
  ],

  results: [
    {
      id: 1,
      img: git,
      title: 'Github',
      role: 'Hacktoberfest Contributor',
      year: 'Oct 2021 - Nov 2021',
      description:
        "Contributed 8 PR's in various open source projects. Great experience and learning alot about working with Github and open-source. Connecting with developers"
    },
    {
      id: 2,
      img: winter,
      title: 'Winter of Code',
      role: 'Contributor',
      year: 'Jan 2021 - March 2021',
      description:
        'Overwhelming to be a part of DSC NSEC project - DSC NSEC Algorithms for Winter of Code 2020. First introduction to Git and Github. How github is used by most of the programmers in order to manage the projects.'
    },
    {
      id: 3,
      img: google,
      title: 'Google',
      role: '30Days of Google Cloud',
      year: 'Oct 2020 - Dec 2020',
      description:
        'Hands on practice on Google Cloud Platform - the tool that powers apps like Google Search, Gmail and YouTube. As part of the program had learned the concepts like computing, application development, big data & machine learning using cloud.'
    }
  ],

  projects: [
    {
      id: 1,
      img: portfolio,
      title: 'Portfolio Webpage',
      subtitle: 'Personal Portfolio webpage with resume and blog',
      link: 'https://github.com/Diana1888'
    },
    {
      id: 2,
      img: instastaff,
      title: 'Instastaff',
      subtitle:
        'InstaStaff is an app that facilitates the efficient exchange of labor and work in the medical service field.',
      link: 'https://github.com/dialop/instastaff'
    }
  ],

  skills: [
    {
      id: 1,
      img: figma,
      title: 'Figma',
      subtitle: 'Web UI Design, Prototyping'
    },
    {
      id: 2,
      img: javascript,
      title: 'Javascript',
      subtitle: 'ES6'
    },
    {
      id: 3,
      img: react,
      title: 'React',
      subtitle: 'JavaScript framework'
    },
    {
      id: 4,
      img: html,
      title: 'HTML 5',
      subtitle: 'Structural Design'
    },
    {
      id: 5,
      img: css,
      title: 'CSS 3',
      subtitle: 'Style Design'
    },
    {
      id: 6,
      img: vscode,
      title: 'VS Code',
      subtitle: 'Code editor'
    },
    {
      id: 7,
      img: gittool,
      title: 'Git',
      subtitle: 'Version control'
    },
    {
      id: 8,
      img: postgresql,
      title: 'PostgreSQL',
      subtitle: 'Relational database'
    }
  ]
};

export default constants;
