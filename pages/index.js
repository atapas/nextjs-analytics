import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <Head>
          <title>Tapas Adhikary's Next.js Playground</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          { process.env.NEXT_PUBLIC_FAKE_BLOG_NAME } 😉(Original @ <a href={ process.env.NEXT_PUBLIC_ORIGINAL_BLOG_LINK } target="_blank">{ process.env.NEXT_PUBLIC_ORIGINAL_BLOG_NAME }</a>)
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        Feeling something about it? You can contact me on <a href={ process.env.NEXT_PUBLIC_TWITTER_LINK } target="_blank">Twitter</a>.
      </footer>
    </Layout>
  )
}