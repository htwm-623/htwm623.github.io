import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.centerCard}>
          天地一朝 万朝须臾
        </div>
      </div>

    </>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader/>
      <main>
      </main>
    </Layout>
  )
}
