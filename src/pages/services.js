import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ServicesPage = () => (
  <Layout>
    <div>
      <h1>Our Services</h1>

      <p>This is about us bruv</p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius
        corporis a quisquam obcaecati ullam voluptatibus, maxime earum possimus.
        Maxime, nihil ex. Amet possimus provident assumenda ratione repellendus
        fuga rerum!
      </p>

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

export default ServicesPage
