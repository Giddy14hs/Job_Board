import React from 'react'
import './home.css'
import Image1 from '../../images/image1'

const home = () => {
  return (
    <div>
      <div id="media">
        <div className="navbarHeader">
          <header id="header">
            <div class="overlay">
              <div class="container">
                <div class="row text-center">
                  <div class="col">
                    <h1 class="display-4" className="animate-hover animate__animated animate__flipInX animate__delay-2s">Job Find</h1>
                    <p class="text-muted" className="animate-hover animate__animated animate__bounce animate__delay-1s">Job Find is a company registered under companies Act in May 2016 as limited by guarantee. Its main aim is to build capacity of small entrepreneurs to realize their full potential through trainings and affordable credit hence financial inclusion. Financial inclusion is defined as the provision of “a full suite of quality financial services, provided at affordable prices, in a convenient manner, and with dignity for the clients”</p>
  
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
    </div>
    <div className="Ourwork">
          <section id="work" class="py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h1 className="animate-hover animate__animated animate__rotateIn animate__delay-2s">Our Work</h1>
                  <p class="text-muted" className="animate-hover animate__animated animate__flip animate__delay-3s">To build capacity of small entrepreneurs to realize their full potential through trainings and affordable credit</p>
                </div>
                <div class="col-md-6 text-center mx-auto">
                    <a href="#" class="video" data-image="images/image1.jpg"
                  data-toggle="modal" data-target="#firstModal"><i class="fa-solid fa-play fa-3x"></i></a>
                </div>
              </div>
            </div>
          </section>
          <div id="firstModal"class="modal fade" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>Close
                  </button>
                  <iframe src="images/modalVideo.mp4" width="100%" height="400"></iframe>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div className="Ourwork">
          <section id="work" class="py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h1 className="animate-hover animate__animated animate__rotateIn animate__delay-2s">Featured Jobs</h1>
                </div>
                  <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Software Engineer - Frontend</h5>
                      <p class="card-text">Join our dynamic team to develop and maintain user-facing features for our web applications. You'll work closely with designers and backend engineers to create seamless and responsive interfaces using the latest frontend technologies like React and Angular.</p>
                      <p class="card-text">Location: Remote</p>
                      <button type="button" name="button" className="btn btn-outline-warning px-3">Read More</button>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Digital Marketing Specialist</h5>
                      <p class="card-text"> We’re looking for a creative and data-driven Digital Marketing Specialist to manage our online marketing campaigns. You’ll develop strategies to increase brand awareness, drive traffic, and boost engagement through SEO, PPC, and social media.</p>
                      <p class="card-text">Location: New York, NY</p>
                      <button type="button" name="button" className="btn btn-outline-warning px-3">Read More</button>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Human Resources Manager</h5>
                      <p class="card-text"> Lead our HR department and manage all aspects of human resources, from recruitment and employee relations to benefits administration. You'll play a key role in fostering a positive workplace culture and ensuring compliance with labor laws.</p>
                      <p class="card-text">Location: Austin, TX</p>
                      <button type="button" name="button" className="btn btn-outline-warning px-3">Read More</button>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Data Scientist</h5>
                      <p class="card-text">Utilize your analytical skills to extract insights from large datasets and inform business decisions. As a Data Scientist, you'll work with cross-functional teams to develop models, perform statistical analysis, and drive data-driven strategies.</p>
                      <p class="card-text">Location: Chicago, IL</p>
                      <button type="button" name="button" className="btn btn-outline-warning px-3">Read More</button>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Project Manager - Construction</h5>
                      <p class="card-text">Oversee construction projects from inception to completion, ensuring they are completed on time and within budget. You'll coordinate with architects, engineers, and contractors, managing resources and timelines to deliver successful outcomes.</p>
                      <p class="card-text">Location: Denver, CO</p>
                      <button type="button" name="button" className="btn btn-outline-warning px-3">Read More</button>
                    </div>
                  </div>
                  </div>
                  <button type="button" name="button" className="btn btn-outline-warning px-3">See all jobs</button>
              </div>
            </div>
          </section>
        </div>
        <section id="product" class="mt-5 pb-5">
          <div class="container">
            <div class="row">
              <h1 class="text-center">Testimonials</h1>
              <div class="col-md-4 pb-5">
                <div class="card text-center pt-3">
                  <div class="card-body">
                    <h3>Software Developer</h3>
                    <p>Sarah J</p>
                    <p>"Finding the right job has never been easier. The job application website streamlined the entire process, from browsing listings to applying for positions. The user-friendly interface and detailed job descriptions made it simple to find roles that fit my skills perfectly. Thanks to this platform, I landed my dream job in just a few weeks!"</p>
                  </div>
                </div> 
              </div>
              <div class="col-md-4 pb-5">
                <div class="card text-center">
                  <div class="card-body">
                    <h3>Recent College Graduate</h3>
                    <p>Emma L</p>
                    <p>"Navigating the job market as a recent graduate was overwhelming until I started using this job posting website. The clear, organized listings and helpful application features made the process much less stressful. I received multiple interview invitations within a month and secured a position that aligns with my career goals. I highly recommend this site to any job seeker!"</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 pb-5">
                <div class="card text-center pt-3">
                  <div class="card-body">
                    <h3>Hiring Manager at Tech Innovators Inc.</h3>
                    <p>Michael T</p>
                    <p>"As a hiring manager, I appreciate how efficiently this website connects us with qualified candidates. The posting process is straightforward, and the platform’s filtering options ensure that we see only the most relevant applications. It has become an indispensable tool for our recruitment process, helping us find top talent quickly and effectively."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default home;