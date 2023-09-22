import { getByDisplayValue } from '@testing-library/react'
import { useState } from 'react'
import styles from './Main.module.css'
import Account from './Account.js'
import Balance from './Balance'
import Tarif from './Tarif'
import Support from './Support'
import Action from './Action'

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Account />
      <Balance />
      <Tarif />
      <Support />
      <Action />
    </div>
  )
}

export default Main
