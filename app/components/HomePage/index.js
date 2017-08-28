import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <section className="container-custom about-me">
            <div className="photo">
              <img src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/14233267_523439451200720_2546722205411837697_n.jpg?oh=7516fbc29cc11ed707231e44cf6de239&oe=59EEF233" />
            </div>
            <div className="info-about">
              <div className="about">
                <h6>
                  About me
                </h6>
                <p className="content">
                With an i am to become a good developer, i always find my self chances to acquire
                more knowledge about infomation technology and woking skill. Whith 2 years working
                experience in website development, i believe that Web development ( font -end,
                back-end) position fits me very well. I am an sociable, team working, open-minded so
                there will be no dificulties in adapting new working environment.
                </p>
              </div>
              <div className="contact">
                <div className="detail">
                  <p className="info">
                    <i className="fa fa-info"></i>
                  </p>
                  <p>
                    <span className="title">Name</span>
                    <span>
                      Ngo Thanh Truong
                    </span>
                  </p>
                </div>
                <div className="detail">
                  <p className="info">
                    <i className="fa fa-address-book"></i>
                  </p>
                  <p>
                    <span>Address</span>
                    <span>
                      30 Nguyen Chinh Sac Tan Binh Distric Ho Chi Minh City, Vietnam
                    </span>
                  </p>
                </div>
                <div className="detail">
                  <p className="info">
                    <i className="fa fa-calendar"></i>
                  </p>
                  <p>
                    <span>Date of Birth</span>
                    <span>08. December 1992</span>
                  </p>
                </div>
                <div className="detail">
                  <p className="info">
                    <i className="fa fa-phone"></i>
                  </p>
                  <p>
                    <span>Phone</span>
                    <span>01642378975</span>
                  </p>
                </div>
                <div className="detail">
                  <p className="info">
                    <i className="fa fa-envelope"></i>
                  </p>
                  <p>
                    <span>E-Mail</span>
                    <span>ngothanhtruong92@gmail.com</span>
                  </p>
                </div>
                <div className="detail">
                  <p className="info">
                    <i className="fa fa-skype"></i>
                  </p>
                  <p>
                    <span>Skype</span>
                    <span>ngothanhtruong92@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
        </section>
        <section className="skills">
          <div className="content">
            With an i am to become a good developer, i always find my self chances to acquire
            more knowledge about infomation technology and woking skill. Whith 2 years working
            experience in website development, i believe that Web development ( font -end,
            back-end) position fits me very well. I am an sociable, team working, open-minded so
            there will be no dificulties in adapting new working environment.
          </div>
          <div className="skill">
            <div className="item">
              <p className="title">HTML</p>
              <div className="progress">

              </div>
            </div>
          </div>
        </section>
        <section className="education">

        </section>
        <section className="experience">

        </section>
      </div>
    );
  }
}

export default HomePage;
