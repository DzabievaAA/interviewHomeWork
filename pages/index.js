import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useState } from 'react';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/core'

import ProfileBar from '../components/ProfileBar'
import UserInfoList from '../components/UserInfoList'
import HeaderInfo from '../components/HeaderInfo'
import UserInfoEditor from '../components/UserInfoEditor'
import SuccessfullOperationDialog from '../components/SuccessfullOperationDialog'

export default function Home() {
  const [nameSurname, setNameSurname] = useState('Иванова Анна Михайловна');
  const [email, setEmail] = useState("ivanova@mail.ru");
  const [cellphone, setCellphone] = useState("+7 987 978 6767");
  const [isEditing, setEditing] = useState(false);
  const [successDialogVisible, setSuccessDialogVisible] = useState( false );

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

  const colorTheme = createMuiTheme({
    mainColor : "#00BFA5"
  })

  return (
    <div>
      <Head>
        <title>Account settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <ThemeProvider theme={colorTheme}>
          <SuccessfullOperationDialog isOpen={successDialogVisible} 
              close={() => setSuccessDialogVisible(false)}
              />

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
              setCellphone={setCellphone}
              showNotification={() => setSuccessDialogVisible( true )}/>  
            :
            <UserInfoList email={email}
              cellphone={cellphone}
              theme={colorTheme}/>
            
          }
        </ThemeProvider>
      </main>

    </div>
  )
}
