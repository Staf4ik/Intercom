import { getByDisplayValue } from '@testing-library/react'
import styles from './Account.module.css'

const Account = () => {
  return (
    <div className={styles.wrapper1}>
      <div className={styles.main}>
        <div className={styles.block}>
          <div className={styles.header}>
            <p className={styles.account}> Аккаунт </p>
            <p className={styles.state}> Активен</p>
          </div>
          <p className={styles.number_of_customer}>№12312314</p>
        </div>
        <div className={styles.block2}>
          <div className={styles.block}>
            <p className={styles.title}>Клиент</p>
            <p className={styles.text}>
              Константинопольский Константин Константинович
            </p>
          </div>
          <div className={styles.block}>
            <p className={styles.title}>Адрес</p>
            <p className={styles.text}>Алапаевск </p>
            <p className={styles.text}>ул. Пушкина 13. кв 87 </p>
          </div>
        </div>
        <div className={styles.block2}>
          <div className={styles.block}>
            <p className={styles.title}>Телефон</p>
            <p className={styles.text}>+7 922 222 33 44</p>
          </div>
          <div className={styles.block}>
            <a href="#" className={styles.abc}>
              Изменить
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
