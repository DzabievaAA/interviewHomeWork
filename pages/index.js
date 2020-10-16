import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState } from 'react';

import ProfileBar from '../components/ProfileBar'
import UserInfoList from '../components/UserInfoList'
import HeaderInfo from '../components/HeaderInfo'
import UserInfoEditor from '../components/UserInfoEditor'
import SaveConfirmDialog from '../components/SaveConfirmDialog'

export default function Home() {
  const [nameSurname, setNameSurname] = useState('Иванова Анна Михайловна');
  const [email, setEmail] = useState("ivanova@mail.ru");
  const [cellphone, setCellphone] = useState("+7 987 978 6767");
  const [isEditing, setEditing] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Account settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
		  	<HeaderInfo/>
			  <ProfileBar  nameSurname={nameSurname}
                     onClick={() => setEditing(true)}/>
        {   
          isEditing ? 
            <UserInfoEditor nameSurname={nameSurname}
                            email={email}
                            cellphone={cellphone}
                            setEditing={setEditing}
                            setNameSurname={setNameSurname}
                            setEmail={setEmail}
                            setCellphone={setCellphone}/>  
            :
            <UserInfoList email={email}
                          cellphone={cellphone}
                          />
        }
        {/* <SaveConfirmDialog /> */}
      </main>

    </div>
  )
}
