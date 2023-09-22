import { getByDisplayValue } from '@testing-library/react'
import styles from './Action.module.css'

const Action = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.display}>
          <p className={styles.title}>
            Скидка 1000 рублей при подключении на 12 месяцев
          </p>
          <p className={styles.text}>
            Бери на год, получай деньги и экономь семейный бюджет
          </p>
        </div>
        <button className={styles.button}>Посмотреть тарифы</button>
      </div>
    </div>
  )
}

export default Action
