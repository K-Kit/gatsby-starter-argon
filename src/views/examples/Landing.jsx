/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useRef, useState, useEffect } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

import ReactMarkdown from "react-markdown";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import { PreviewCompatibleContent} from "../../components/Content";
import Img from '../../components/PreviewCompatibleImage'


// TODO replace all <img> and bgimage with gatsby image
// todo add buttons to schema, refactor some of the schema into cleaner, clearer, more dynamic objects
const Landing = (props) => {
  const {
    image,
    title,
    heading,
    subheading,
    demoCards,
    featureSection,
      customerSection,
      section3,
      formSection,
      menuButtons,
      team,
      teamHeader,
      preForm,
      isEditor=false,
      points,

      
  } = props
  const [state, setState] = useState({})
    return (
      <>
        {/*<DemoNavbar />*/}
        <main type='main'>
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        {heading}
                      </h1>
                      <p className="lead text-white">
                        {subheading}
                      </p>
                      <div className="btn-wrapper">
                        {menuButtons && menuButtons.map(item => {
                          return (
                              <Button
                                  className="btn-icon mb-3 mb-sm-0"
                                  color={item.color}
                                  href={item.link}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <i className={`fa ${item.icon}`} />
                                </span>
                                <span className="btn-inner--text">{item.text}</span>
                              </Button>
                          )
                        })}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                      {demoCards.map(card => {
                        const tags = card.tags.split(', ')
                        return (
                          <Col lg="4">
                            <Card className="card-lift--hover shadow border-0">
                              <CardBody className="py-5">
                                <div className={`icon icon-shape icon-shape-${card.color} rounded-circle mb-4`}>
                                  <i className={`ni ${card.icon}`} />
                                </div>
                                <h6 className={`text-${card.color} text-uppercase`}>
                                  {card.heading}
                                </h6>
                                <p className="description mt-3">
                                  {card.description}
                                </p>
                                <div>
                                  {tags && tags.map(tag => <Badge color={card.color} pill className="mr-1">{tag}</Badge>)}

                                </div>
                                <Button
                                  className="mt-4"
                                  color={card.color}
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Learn more
                                </Button>
                              </CardBody>
                            </Card>
                          </Col>
                        )
                      })}


                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">

                  <Img imageInfo={featureSection.image}
                       className="img-fluid floating" />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>{featureSection.heading}</h3>
                    <PreviewCompatibleContent content={featureSection.description} isEditor={isEditor} />
                    <ul className="list-unstyled mt-5">
                      {featureSection.iconList &&
                      featureSection.iconList.map(item =>
                          <li className="py-2">
                            <div className="d-flex align-items-center">
                              <div>
                                <Badge
                                    className="badge-circle mr-3"
                                    color={item.color}
                                >
                                  <i className={`ni ${item.icon}`} />
                                </Badge>
                              </div>
                              <div>
                                <h6 className="mb-0">
                                  {item.text}
                                </h6>
                              </div>
                            </div>
                          </li>
                      )}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    {/*todo replace with gatsby-image*/}
                    <Img imageInfo={{
                      image: customerSection.cardImage,
                      childImageSharp: customerSection.cardImage.childImageSharp,
                      className: 'card-img-top'
                    }} />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        {customerSection.cardTitle}
                      </h4>
                      <p className="lead text-italic text-white">
                        {customerSection.cardText}
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <PreviewCompatibleContent content={customerSection.description} />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../../../static/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">{section3[0].heading}</h4>
                      <p className="text-white">
                        {section3[0].description}
                      </p>
                    </div>
                  </div>
                  {
                    section3.slice(1).map(item => {
                      return(
                          <Card className="shadow shadow-lg--hover mt-5">
                            <CardBody>
                              <div className="d-flex px-3">
                                <div>
                                  <div className={`icon icon-shape bg-gradient-${item.color} rounded-circle text-white`}>
                                    <i className={`ni ${item.icon}`} />
                                  </div>
                                </div>
                                <div className="pl-4">
                                  <h5 className={`title text-${item.color}`}>
                                    {item.heading}
                                  </h5>
                                  <p>
                                    {item.description}
                                  </p>
                                  <a
                                      className={`text-${item.color}`}
                                      href={item.link}
                                      onClick={e => e.preventDefault()}
                                  >
                                    Learn more
                                  </a>
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                      )
                    })
                  }

                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">{teamHeader.heading}</h2>
                  <p className="lead text-muted">
                    {teamHeader.subHeading}
                  </p>
                </Col>
              </Row>
              <Row>
                {team.map(item => {
                  return (
                      <Col className="mb-5 mb-lg-0" lg="3" md="6">
                        <div className="px-4">
                          <Img
                              alt="..."
                              imageInfo={{
                                childImageSharp: item.image.childImageSharp,
                                image: item.image,
                                style: { width: "200px" },
                                className: `rounded-circle img-center img-fluid shadow shadow-lg--hover`
                              }}
                          />
                          <div className="pt-4 text-center">
                            <h5 className="title">
                              <span className="d-block mb-1">{item.heading}</span>
                              <small className="h6 text-muted">{item.subHeading}</small>
                            </h5>
                            <div className="mt-3">

                              <Button
                                  className="btn-icon-only rounded-circle"
                                  color={item.color}
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-twitter" />
                              </Button>
                              <Button
                                  className="btn-icon-only rounded-circle ml-1"
                                  color={item.color}
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-facebook" />
                              </Button>
                              <Button
                                  className="btn-icon-only rounded-circle ml-1"
                                  color={item.color}
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-dribbble" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Col>
                  )
                })}

              </Row>
            </Container>
          </section>
          {/*<section className="section section-lg pt-0">*/}
          {/*  <Container>*/}
          {/*    <Card className="bg-gradient-warning shadow-lg border-0">*/}
          {/*      <div className="p-5">*/}
          {/*        <Row className="align-items-center">*/}
          {/*          <Col lg="8">*/}
          {/*            <h3 className="text-white">*/}
          {/*              We made website building easier for you.*/}
          {/*            </h3>*/}
          {/*            <p className="lead text-white mt-3">*/}
          {/*              I will be the leader of a company that ends up being*/}
          {/*              worth billions of dollars, because I got the answers. I*/}
          {/*              understand culture.*/}
          {/*            </p>*/}
          {/*          </Col>*/}
          {/*          <Col className="ml-lg-auto" lg="3">*/}
          {/*            <Button*/}
          {/*              block*/}
          {/*              className="btn-white"*/}
          {/*              color="default"*/}
          {/*              href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"*/}
          {/*              size="lg"*/}
          {/*            >*/}
          {/*              Download React*/}
          {/*            </Button>*/}
          {/*          </Col>*/}
          {/*        </Row>*/}
          {/*      </div>*/}
          {/*    </Card>*/}
          {/*  </Container>*/}
          {/*</section>*/}
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                {/*wrote schema for this section will map later*/}
                <Col lg="10">
                  <h2 className="display-3 text-white">{preForm.heading}</h2>
                  <p className="lead text-white">
                    {preForm.subHeading}
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                {points.map(item => {
                  return (
                      <Col lg="4">
                        <div className={`icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary`}>
                          <i className={`ni ${item.icon} text-${item.color}`} />
                        </div>
                        <h5 className="text-white mt-3">{item.heading}</h5>
                        <p className="text-white mt-3">
                          {item.description}
                        </p>
                      </Col>
                  )
                })}
                
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <form  name="contact-landing" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact-landing" />
                        <FormGroup
                            className={classnames("mt-5", {
                              focused: state.nameFocused
                            })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-user-run" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Your name"
                                type="text"
                                name="name"
                                onFocus={e => setState({ ...state, nameFocused: true })}
                                onBlur={e => setState({ ...state, nameFocused: false })}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                            className={classnames({
                              focused: state.emailFocused
                            })}

                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                onFocus={e => setState({ emailFocused: true })}
                                onBlur={e => setState({ emailFocused: false })}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mb-4">
                          <Input
                              className="form-control-alternative"
                              cols="80"
                              name="text"
                              placeholder="Type a message..."
                              rows="4"
                              type="textarea"
                          />
                        </FormGroup>
                        <div>
                          <Button
                              block
                              className="btn-round"
                              color="default"
                              size="lg"
                              type="submit"
                          >
                            Send Message
                          </Button>
                        </div>
                      </form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  
}

export default Landing;
