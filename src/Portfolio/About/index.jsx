import React from 'react'
import './About.scss'
function About() {
  return (
    <section className="about" id="about">
        <div className="title">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="content">
          <div className="text-box">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolorum aspernatur 
                    reiciendis a debitis commodi minus, ab aperiam voluptatem provident reprehenderit illum eum,
                     temporibus hic consequatur dolores! Repudiandae, quos quis? Lorem Lorem ipsum dolor sit, amet 
                     consectetur adipisicing elit. Minus sapiente debitis dolor, consectetur provident, quae quisquam 
                     ipsam accusamus fugiat reiciendis nisi molestiae at itaque enim iusto totam officia dignissimos cum 
                     ut qui doloribus est saepe. In voluptates consequatur optio nihil laboriosam, necessitatibus, eveniet 
                     non ab asperiores omnis voluptas<br/> <br/>rem error minus totam. Dicta quidem assumenda cumque modi officiis 
                     quo cum maxime ipsum repellendus, qui debitis dolorum sapiente illum voluptatem eligendi sint ad vel? 
                     Assumenda aperiam amet enim, doloremque quis dolorum alias officiis maxime praesentium veniam iusto 
                     blanditiis, voluptates numquam deleniti animi ducimus maiores, perspiciatis consectetur quod 
                     laboriosam molestiae dolores est.</p>
            </div>
            <div className="img-box">
                <img className="image img-fluid" src="Assets/img/me3.jpg" alt=""/>
            </div>
        </div>
    </section>
  )
}

export default About