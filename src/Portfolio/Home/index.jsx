import React from 'react'
import './Home.scss'
function Home() {
  return (
    <section className="banner" id="home">
        <div className="img-sidebar">
            <img src="assets/img/Me.jpg" alt=""/>
        </div>
        <div className="content-box">
            <h5 className="logo-text">My_Portfolio</h5>
            <div>
                <h4><span>Hello</span>,I'm</h4>
                <h2>Hamza Nazir</h2>
                <h4>I'm a Professional Web Designer.</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore a cum obcaecati dolor harum nostrum fugiat debitis non asperiores optio, eum accusantium rerum maxime modi sit illo totam in? Quam?
                   Atque consequatur nemo obcaecati doloremque asperiores ipsam quo earum accusamus illo nisi! Id porro tenetur sunt mollitia?
                </p>
                <a className="btn" href="">About Me</a>
            </div>
        </div>
    </section>
  )
}

export default Home