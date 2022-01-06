import React, { useState, useEffect, useRef } from 'react';

// Написать компонент на React с испольхованием хуков, который принимает в поле кол-во секунд
// и по нажатию на кнопку производит обратный отсчет.

//1.
//Инпут: [введите количество секунд]
//Кнопка: (запустить)

//2.
//Инпут: [введите количество секунд]
//Кнопка: (остановить)
//Текст: 3 сек

const Task6 = () => {
    const [seconds, setSeconds] = useState(0);
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const handleStartCountdown = () => {
        setIsPaused(true);
        if(seconds > 0) {
            countRef.current = setInterval(() => {
                setSeconds((seconds) => seconds - 1)
            }, 1000)
        }
    }

    const handlePauseCountdown = () => {
        clearInterval(countRef.current);
        setIsPaused(false);
    }

    useEffect(() => {
        if (seconds <= 0) {
           clearInterval(countRef.current);
        }
    }, [seconds])

    const renderButton = (onStart, onPause, isPaused) => (
        <>
            {!isPaused
                ? <button onClick={onStart}>{'Запустить'}</button>
                : <button onClick={onPause}>{'Остановить'}</button>}
        </>
    );

    return (
        <>
            <div><label>Секунды:</label>{seconds}</div>
            <input value={seconds} onChange={(event) => setSeconds(event.target.value)} />
            {renderButton(
                handleStartCountdown,
                handlePauseCountdown,
                isPaused,
            )}
        </>
    )
};

export default Task6;
