import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import client from '../client'
import groq from 'groq'
import SimpleBlockContent from '../components/SimpleBlockContent'
import styles from './index.module.css'

class IndexPage extends React.Component {
  static propTypes = {
    config: PropTypes.object
  }

  static async getInitialProps () {
    const frontPage = await client.fetch(groq`*[_id == "global-config"][0]{ //filters out everything that doesn't have ID = global config
    title, // get its title
    siteIntro, 
    "sections": mainNavigation[]->{ // let's make a key called "section", which has value [contents of the "mainNav" field], go get any refs for each item
      slug, // projection: return slug 
      page->{ // projection: return the page content (go get that)
       title, // specifically the page title
       siteIntro, 
       "pageIntro": content[_type == "pageIntro"][0] // let's have something called "pageIntro", and let that be all content with type = pageIntro. And return that, which we know will be one thing, i.e. item [0] in the array
    }
    }
  }`)
    return {frontPage}
  }
  
  render () {
    const {config, frontPage} = this.props
    return (
      <Layout config={config}>
        <div className={styles.content}>
        <h1>{frontPage.title}</h1>
        {frontPage.siteIntro && <SimpleBlockContent blocks={frontPage.siteIntro} />} {/*inserted by Chris*/}
        {frontPage.sections.map(({slug, page}) => (
          <article>
            <a href={slug.current}>
              <h2 key={page.pageIntro.heading}>{page.pageIntro.heading}</h2></a>
            {page.pageIntro.tagline && <SimpleBlockContent blocks={page.pageIntro.tagline} />}
          </article>
          ) )}
        {/*<pre>{JSON.stringify(this.props.frontPage,null,2)}</pre>*/}
        </div></Layout>
    )
  }
}

export default IndexPage
