import React from "react";

// reactstrap components
import { Badge, Button, Card, Media, Container, Row, Col } from "reactstrap";

import { PreviewCompatibleContent} from "../components/Content";
// // core components
// import ColorNavbar from "components/Navbars/DemoNavbar.js";
// import BlogPostHeader from "components/Headers/BlogPostHeader.js";
// import FooterGray from "components/Footers/FooterGray.js";
import {isBrowser, isEditor} from "../utils";
// https://www.facebook.com/sharer/sharer.php?u=${social.url}
// https://twitter.com/home?status=${social.url}
// https://pinterest.com/pin/create/button/?url=${social.url}&media=&description=
// https://www.linkedin.com/shareArticle?mini=true&url=${social.url}&title=&summary=&source=
// mailto:info@example.com?&subject=&body=${social.url}
const BlogPost = ({
                    content,
                    contentComponent,
                    description,
                    tags,
                    title,
                    helmet = '',
                    date = 'August 3, 2019',
    ...props
                  }) => {
  console.log(content)
  // isBrowser() && document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   if (isBrowser()) {
  //     document.body.classList.add("blog-post");
  //     window.scrollTo(0, 0);
  //     document.body.scrollTop = 0;
  //     return function cleanup() {
  //       document.body.classList.remove("blog-post");
  //     };
  //   }
  // });
  return (
    <>
      <div className="wrapper">
        {helmet || ''}
        <div className="main">
          <div className="section section-white">
            <Container>
              {/*<Row>*/}
              {/*  <Col className="ml-auto mr-auto text-center title" md="6">*/}
              {/*    <h2>{title}</h2>*/}
              {/*    <h3 className="title-uppercase">*/}
              {/*      <small>{description}</small>*/}
              {/*    </h3>*/}
              {/*  </Col>*/}
              {/*</Row>*/}
              <Row>
                <Col className="ml-auto mr-auto mt-2" md="10">
                  <div className="text-center mt-5">
                    {/*<Badge className="main-tag" color="warning">*/}
                    {/*  Trending*/}
                    {/*</Badge>*/}
                    <a href="javascrip: void(0);">
                      <h3 className="title">
                        {title}
                      </h3>
                    </a>
                    <h6 className="title-uppercase">{date}</h6>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  {/*<a href="javascrip: void(0);">*/}
                  {/*  <Card*/}
                  {/*    data-radius="none"*/}
                  {/*    style={{*/}
                  {/*      // backgroundImage:*/}
                  {/*      //   "url(" +*/}
                  {/*      //   require("") +*/}
                  {/*      //   ")"*/}
                  {/*    }}*/}
                  {/*  />*/}
                  {/*  /!*<p className="image-thumb text-center">*!/*/}
                  {/*  /!*  Photo by Cam Adams*!/*/}
                  {/*  /!*</p>*!/*/}
                  {/*</a>*/}

                  <div className="article-content" >
                    <PreviewCompatibleContent content={content} isEditor={false} />
                  </div>
                  <br />
                  <div className="article-footer">
                    <Container>
                      <Row>
                        <Col md="6">
                          <h5>Tags:</h5>
                          <label className="label label-default mr-1">
                            Motivational
                          </label>
                          <label className="label label-default mr-1">
                            Newsletter
                          </label>
                          <Badge color="warning">Trending</Badge>
                        </Col>
                        <Col className="ml-auto" md="4">
                          <div className="sharing">
                            <h5>Spread the word</h5>
                            <Button
                              className="btn-just-icon mr-1"
                              color="twitter"
                            >
                              <i className="fa fa-twitter" />
                            </Button>
                            <Button
                              className="btn-just-icon mr-1"
                              color="facebook"
                            >
                              <i className="fa fa-facebook" />
                            </Button>
                            <Button className="btn-just-icon" color="google">
                              <i className="fa fa-google" />
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  {/*<hr />*/}
                  {/*<Container>*/}
                  {/*  <Row>*/}
                  {/*    <Media>*/}
                  {/*      <a*/}
                  {/*        className="pull-left"*/}
                  {/*        href="#pablo"*/}
                  {/*        onClick={e => e.preventDefault()}*/}
                  {/*      >*/}
                  {/*        <div className="avatar big-avatar">*/}
                  {/*          <Media*/}
                  {/*            alt="..."*/}
                  {/*            object*/}
                  {/*            // src={require("assets/img/faces/kaci-baum-2.jpg")}*/}
                  {/*          />*/}
                  {/*        </div>*/}
                  {/*      </a>*/}
                  {/*      <Media body>*/}
                  {/*        <Media heading>Sophie Banks</Media>*/}
                  {/*        <div className="pull-right">*/}
                  {/*          <Button*/}
                  {/*            className="btn-round"*/}
                  {/*            color="default"*/}
                  {/*            href="#pablo"*/}
                  {/*            onClick={e => e.preventDefault()}*/}
                  {/*          >*/}
                  {/*            <i className="fa fa-reply mr-1" />*/}
                  {/*            Follow*/}
                  {/*          </Button>*/}
                  {/*        </div>*/}
                  {/*        <p>*/}
                  {/*          Hello guys, nice to have you on the platform! There*/}
                  {/*          will be a lot of great stuff coming soon. We will*/}
                  {/*          keep you posted for the latest news.*/}
                  {/*        </p>*/}
                  {/*        <p>Don't forget, You're Awesome!</p>*/}
                  {/*      </Media>*/}
                  {/*    </Media>*/}
                  {/*  </Row>*/}
                  {/*</Container>*/}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
