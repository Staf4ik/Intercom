import { getByDisplayValue } from '@testing-library/react'
import styles from './Balance.module.css'
import { useState } from 'react'
import Modal from './Modal'

const Balance = () => {
  const [TopupActive, setTopupActive] = useState(false)
  const [TemporaryActive, setTemporaryActive] = useState(false)

  return (
    <div className={styles.wrapper3}>
      <div className={styles.main}>
        <div className={styles.block}>
          {/* <div className={styles.header}> */}
          <div className={styles.block2}>
            <div>
              <div>
                <p className={styles.account}> Баланс </p>
                {/* </div> */}
                <p className={styles.number_of_customer}>1 570.50 ₽</p>
              </div>
              <div className={styles.block}>
                <p className={styles.title}>Ближайшее списание</p>
                <p className={styles.text}>25 апреля 2023</p>
              </div>
              <div className={styles.block}>
                <p className={styles.title}>Сколько спишется</p>
                <p className={styles.text}>500 ₽ </p>
              </div>
            </div>
            <div className={styles.block__buttons}>
              <button
                className={styles.button}
                onClick={() => setTopupActive(true)}
              >
                Пополнить баланс
              </button>
              <button
                className={styles.button2}
                onClick={() => setTemporaryActive(true)}
              >
                Обещанный платеж
              </button>
            </div>
          </div>
        </div>

        <a href="#" className={styles.detalied}>
          Подробнее
        </a>

        {/* окно пополнить баланс */}
        <Modal active={TopupActive} setActive={setTopupActive}>
          <h1 className={styles.Balance__title}>Пополнить баланс</h1>
          <div className={styles.flex}>
            <div className={styles.block__topup}>
              <div className={styles.img}></div>Картой
            </div>
            <div className={`${styles.block__topup} ${styles.block2__topup}`}>
              <div className={styles.img2}></div>СБП
            </div>
          </div>
          <p className={styles.Balance__text}>Номер договора</p>
          <input
            className={styles.input}
            placeholder="Введите номер договора"
          ></input>
          <p className={styles.Balance__text}>Сумма</p>
          <input className={styles.input} placeholder="Введите сумму"></input>
          <button className={styles.button__topup}>Оплатить</button>
        </Modal>

        {/* окно обещанный платеж */}
        <Modal active={TemporaryActive} setActive={setTemporaryActive}>
          <h1 className={styles.Balance__title}>Обещанный платеж</h1>
          <p className={styles.Temporary__text}>
            Услуга действует 3 дня и будет отключена по истечению.
          </p>
          <button className={styles.button__on}>Подключить</button>
        </Modal>
      </div>
    </div>
  )
}

export default Balance
