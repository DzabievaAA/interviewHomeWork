import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ProfileBar from '../components/ProfileBar'
import UserInfoList from '../components/UserInfoList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Account settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
			<ProfileBar/>
		  	<UserInfoList/>
      </main>

    </div>
  )
}
