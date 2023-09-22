import { getByDisplayValue } from '@testing-library/react'
import { useState } from 'react'
import styles from './Tarif.module.css'
import Modal from './Modal'

const Tarif = () => {
  const [TarifActive, setTarifActive] = useState(false)
  const [OffComleted, setOffComleted] = useState(false)

  return (
    <div className={styles.wrapper2}>
      <div className={styles.main}>
        {/* <div className={styles.block}> */}
        <div className={styles.header}>
          <p className={styles.account}> Тариф </p>
        </div>
        <p className={styles.main_title}>Просто 100</p>
        {/* </div> */}
        <div className={styles.block2}>
          <div className={styles.block}>
            <p className={styles.title}>Стоимость</p>
            <p className={styles.text}>500 ₽ за месяц </p>
          </div>
          <div className={styles.block}>
            <p className={styles.title}>Скорость</p>
            <p className={styles.text}>до 100 мб/с</p>
          </div>
          <div className={styles.block}>
            <p className={styles.title}>Телевидение</p>
            <p className={styles.text}>55 каналов</p>
          </div>
        </div>
        <button className={styles.button} onClick={() => setTarifActive(true)}>
          Приостановить на 14 дней
        </button>

        {/* окно приостановить тариф */}
        <Modal active={TarifActive} setActive={setTarifActive}>
          <h1 className={styles.stopTarif__title}>Приостановить тариф </h1>
          <p className={styles.stopTarif__text}>
            Выключим интернет на 14 дней и приостановим списание средств по
            тарифу
          </p>
          <button
            className={styles.button__cancel}
            onClick={() => setTarifActive(false)}
          >
            Не надо
          </button>
          <button
            className={styles.button__off}
            onClick={() => {
              setTarifActive(false)
              setOffComleted(true)
            }}
          >
            Выключить
          </button>
        </Modal>

        {/* окно заяка отправлена */}

        <Modal active={OffComleted} setActive={setOffComleted}>
          <h1 className={styles.stopTarif__title}>Готово</h1>
          <p className={styles.stopTarif__text}>
            Интернет выключен на 14 дней, списание приостановлено
          </p>
        </Modal>

        <a href="#" className={styles.change_tarif}>
          Изменить тариф
        </a>
      </div>
    </div>
  )
}

export default Tarif
