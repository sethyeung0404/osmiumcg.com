import type { NextPage } from 'next'
import Layout from '../components/layout'
import Head from 'next/head'
import Navbar from '../components/Navbar/navbar'

export default function Contact() {
  return (
    <section>
      <p>Home Page</p>
    </section>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
