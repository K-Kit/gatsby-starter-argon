import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Navbar from "../../components/Navbars/DemoNavbar";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <section className="section">
          <div className="container mt-5">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
