import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ProfileBar from '../components/ProfileBar'
import UserInfoList from '../components/UserInfoList'
import HeaderInfo from '../components/HeaderInfo'
import UserInfoEditor from '../components/UserInfoEditor'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Account settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
		  	<HeaderInfo/>
			<ProfileBar/>
		  	<UserInfoList/>
		    <UserInfoEditor/>
      </main>

    </div>
  )
}
