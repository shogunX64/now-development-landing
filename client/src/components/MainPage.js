import React from 'react'
import background from '../img/header.jpg'

const MainPage = () => {

    return (
        <div className="index-page sidebar-collapse">


    <div>
      <div className="wrapper">
        <div className="page-header clear-filter" filter-color="orange">
          <div className="page-header-image" data-parallax="true" style={{ backgroundImage: `url(${background})` }}>
          </div>
          <div className="container">
            <div className="content-center brand">
              <img className="n-logo" src="./assets/img/now-logo.png" alt=""/>
              <h1 className="h1">NowDevelopment Lab.</h1>
              <h3>we build tools and apps that help you succeed</h3>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="wrapper">
            <div className="section section-team text-center">
              <div className="container">
                <h2 className="title">Some of our projects</h2>
                <div className="team">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="team-player">
                        <h2 className="title">Quizio</h2>
                        <p className="category text-primary">Prepare for cloud certification tests and ace them</p>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur nisi, sed fringilla neque. Praesent et molestie magna. In eu fermentum enim. Proin venenatis iaculis neque, ut bibendum diam tempus sed. </p>
                        <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-aws"></i></a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="team-player">
                        <h2 className="title">ChallangeJS</h2>
                        <p className="category text-primary">Master JS algorithms and nail interviews</p>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur nisi, sed fringilla neque. Praesent et molestie magna. In eu fermentum enim. Proin venenatis iaculis neque, ut bibendum diam tempus sed. </p>
                        <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-js"></i></a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="team-player">
                        <h2 className="title">FolioBuilder</h2>
                        <p className="category text-primary">When Help is needed to build your app portfolio</p>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur nisi, sed fringilla neque. Praesent et molestie magna. In eu fermentum enim. Proin venenatis iaculis neque, ut bibendum diam tempus sed. </p>
                        <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-edge"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        
      </div>
    </div>
    </div>

    </div>
    )
}

export default MainPage
