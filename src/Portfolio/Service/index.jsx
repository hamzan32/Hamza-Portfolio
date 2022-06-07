import React from 'react'
import './Service.scss'
function Services() {
  return (
    <section className="services" id="services">
        <div className="title">
            <h2>Our Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste quia fugiat dolore excepturi? 
            Mollitia temporibus atque.</p>
        </div>
        <div className="row content">
            <div className="col-3 services-box">
                <img className="img-fluid" src="Assets/img/design.png" alt=""/>
                <h2>Web Design</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto placeat voluptate eaque expedita ex 
                Nihil, vero voluptates.</p>
            </div>
            <div className="col-3 services-box">
                <img className="img-fluid" src="Assets/img/fire.png" alt=""/>
                <h2>Wilcom</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto placeat voluptate eaque expedita ex 
                Nihil, vero voluptates.</p>
            </div>
            <div className="col-3 services-box">
                <img className="img-fluid" src="Assets/img/camera.png" alt=""/>
                <h2>Photo Graphy</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto placeat voluptate eaque expedita ex 
                Nihil, vero voluptates.</p>
            </div>
            <div className="col-3 services-box">
                <img className="img-fluid" src="Assets/img/coding.png" alt=""/>
                <h2>Development</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto placeat voluptate eaque expedita ex 
                Nihil, vero voluptates.</p>
            </div>
        </div>
    </section>
  )
}

export default Services