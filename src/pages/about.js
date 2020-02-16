import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <div>
      <h1>About Page</h1>

      <p>This is about us bruv</p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        blanditiis reiciendis voluptate dolore vero, temporibus quibusdam atque
        numquam accusamus facere enim laborum ipsum esse ad at molestiae
        architecto? Consectetur hic facilis reprehenderit commodi cumque
        praesentium quam voluptatum rem ad voluptates nam, quae quasi veniam,
        molestias quibusdam accusamus earum inventore voluptate.
      </p>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default AboutPage
