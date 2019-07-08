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
    title, // get the title content from the global config settings
    siteIntro, // get the siteIntro content, added by Chris
    "sections": mainNavigation[]->{ // let's make a key called "section", which has value [contents of the "mainNav" field], go get any refs for each item
      slug, // projection: return slug 
      page->{ // projection: return the page content (go get that)
       title, // specifically the page title
       //siteIntro, don't need this?
       "pageIntro": content[_type == "pageIntro"][0] // let's have something called "pageIntro", and let that be all content with type = pageIntro. And return that, which we know will be one thing, i.e. item [0] in the array
      }
    }, // new section starts from this comma
    "previews": pagePreview[]->{ // making a key called "previews" whose value is whatever the contents of the "pagePreview" field are, go get any refs for each item
      slug,
      page->{
        title,
        "pageIntro": content[_type == "pageIntro"][0] // as above, we let's have something called "pageIntro", and let that be all content with type = pageIntro. And return that, which we know will be one thing, i.e. item [0] in the array
      }
    } // new section ends on and includes this line 
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
        {frontPage.previews.map(({slug, page}) => (
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
