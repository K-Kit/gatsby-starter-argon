import React from "react";

// reactstrap components
import { Badge, Button, Card, Media, Container, Row, Col } from "reactstrap";

import { PreviewCompatibleContent} from "../components/Content";
// // core components
// import ColorNavbar from "components/Navbars/DemoNavbar.js";
// import BlogPostHeader from "components/Headers/BlogPostHeader.js";
// import FooterGray from "components/Footers/FooterGray.js";
import {isBrowser, isEditor} from "../utils";
import {graphql, useStaticQuery} from "gatsby";

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
  const data = useStaticQuery(graphql`
    query SiteUrlQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }

  `)
  return (
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
                    <h6 className="title-uppercase">{typeof date === 'object' ? date.toLocaleString():date}</h6>
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

                  <div className="article-content " >
                    <PreviewCompatibleContent content={content} isEditor={true}  />
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
                            <a href={`https://twitter.com/home?status=${data.site.siteMetadata.siteUrl}`}>
                              <Button
                                  className="btn-just-icon mr-1"
                                  color="twitter"
                              >
                                <i className="fa fa-twitter" />
                              </Button>
                            </a>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${data.site.siteMetadata.siteUrl}`}>
                              <Button
                                className="btn-just-icon mr-1"
                                color="facebook"
                              >
                                <i className="fa fa-facebook" />
                              </Button>
                            </a>
                            <a href={`https://pinterest.com/pin/create/button/?url=${data.site.siteMetadata.siteUrl}&media=&description=`}>
                              <Button className="btn-just-icon" color="pinterest">
                                <i className="fa fa-pinterest" />
                              </Button>
                            </a>
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
  );
}

export default BlogPost;
