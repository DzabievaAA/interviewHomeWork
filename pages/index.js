import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles'
import {Box} from '@material-ui/core'

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

  React.useEffect( () => {
    setNameSurname( localStorage.getItem("name") || nameSurname);
    setEmail( localStorage.getItem("email") || email);
    setCellphone( localStorage.getItem("cellphone") || cellphone);
  },[]);

  React.useEffect( () =>{
    localStorage.setItem("name", nameSurname)
    localStorage.setItem("email", email)
    localStorage.setItem("cellphone", cellphone)
  },[nameSurname, email, cellphone])

  return (
    <div>
      <Head>
        <title>Account settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

		  	<HeaderInfo userName={nameSurname}/>
			  <ProfileBar  nameSurname={nameSurname}
                     onClick={() => setEditing(!isEditing)}
                     isEditing={isEditing}/>
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
        
      </main>

    </div>
  )
}
