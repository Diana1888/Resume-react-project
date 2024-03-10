import React from "react";
import email from '../../public/assets/email.svg';
import website from '../../public/assets/website.svg';
import phone from '../../public/assets/phone.svg';
import city from '../../public/assets/city.svg';
import photo from '../../public/assets/photo.jpg';
import instagram from '../../public/assets/instagram.svg';
import github from '../../public/assets/github.svg';
import linkedin from '../../public/assets/linkedin.svg';
import russian from '../../public/assets/russian.svg';
import english from '../../public/assets/english.svg';
import brush from '../../public/assets/brush.svg';
import earth from '../../public/assets/earth.svg';
import play from '../../public/assets/play.svg';
import '../styles/Aside.css'



const Aside = () => {
  const infos = [
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
  ]

  const socials = [
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
    },
  ]

  const languages = [
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
  ]

  const hobbies = [
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
    },
  ]


  return(
    <div className="aside">
    <div className="header horizontal-line">
    <img className="profile-photo" src={photo} alt="photo"/>
    <h1>Diana Ichmoukhametov</h1>
    <h3 className="summary">Junior full-stack developer with a background in IT. With a strong foundation in technology and problem-solving skills, I'm equipped to tackle challenges in software development.  </h3>
    </div>
 

    <div className="infos horizontal-line">
      {infos.map((info) => {
        return(
        <div className="info-card" key={info.id}>
           <div className="card-img">
          <img src={info.img} alt={info.title}/>
          </div>
          <div className="info-about">
          <div className="title">{info.title}</div>
          <a className={info.title === 'Website' ? 'underline-link' : 'infos-link'} href={info.href}>{info.text}</a>
          </div>
        </div>
      )})}
    </div>


    <div className="socials horizontal-line">
      <div className="card-title">Socials</div>
        {socials.map((item) => {
          return(
            <div className="social-card" key={item.id}>
              <div className="card-img">
              <img src={item.img} alt={item.title}/>
              </div>
              <div className="info-about">
              <div className="title">{item.title}</div>
              <a href={item.link}>{item.text}</a>
              </div>
            </div>
          )
        })}
    </div>

    <div className="languages">
      <div className="card-title">Languages</div>
        {languages.map((item) => {
          return(
            <div className="language-card" key={item.id}>
              <div className="card-img">
              <img src={item.img} alt={item.title}/>
              </div>
              <div className="info-about">
              <div className="title-text title-lang">{item.title}</div>
              <div className="title">{item.text}</div>
              </div>
            </div>
          )
        })}
    </div>

    <div className="hobbies">
      <div className="card-title">Hobbies & Interests</div>

        {hobbies.map((item) => {
          return(
            <div className="hobby-card" key={item.id}>
              <div className="card-img">
              <img src={item.img} alt={item.title}/>
              </div>
              <div className="info-about">
              <div className="title-text">{item.title}</div>
              </div>
            </div>
          )
        })}
    </div>

    </div>

  );

}

export default Aside;