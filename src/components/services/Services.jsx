import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
// import ListServices from './listServices'


export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web/mobile applications</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design of mobile and web applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementation of mobile and web applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployment of mobile and web applications</p>
            </li>
          </ul>
        </article>
        {/* <ListServices /> */}
        <article className="service">
          <div className="service__head">
            <h3>AI models</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Computer vision projects</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Machine learning projects</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployment of AI models</p>
            </li>
          </ul>
        </article>
        {/* <ListServices /> */}
        <article className="service">
          <div className="service__head">
            <h3>Project Management</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Leadership </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Problem solving</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Realise visionary projects</p>
            </li>
          </ul>
        </article>
        {/* <ListServices /> */} 
      </div>
    </section>
  );
}
export default Services;