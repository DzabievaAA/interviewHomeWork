import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ProfileBar from '../components/ProfileBar'
import UserInfoList from '../components/UserInfoList'
import HeaderInfo from '../components/HeaderInfo'
import UserInfoEditor from '../components/UserInfoEditor'
import SaveConfirmDialog from '../components/SaveConfirmDialog'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Account settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
		  	<HeaderInfo/>
			  <ProfileBar  nameSurname={'Иванова Анна Михайловна'}/>
		  	<UserInfoList email={"ivanova@mail.ru"}
                      cellphone={'+7 9089798997'}/>
		    <UserInfoEditor nameSurname={"Укажите Ваши фамилию и имя"}
                        email={'ivanova@mail.ru'}
                        cellphone={'Укажите номер телефона'}/>
        {/* <SaveConfirmDialog /> */}
      </main>

    </div>
  )
}
