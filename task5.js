// Написать ф-ю, которая на вход принимает урл, асинхронно ходит по урлу ГЕТ запросом,
// и возвращает данные json.
// Для получения данных можно испольщовать &.get или fetch.
// Если во время запроса произошла ошибка, то пробовать запросить еще 5 раз.
// Если не получилось получить данные, вернуть ошибку «заданный урл не доступен»

const get = url => {
    const fetch_retry = (url, n) => {
        return fetch(url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        })
            .catch(() => {
                if (n === 1) throw Error('заданный урл не доступен');

                return fetch_retry(url, n - 1);
            });
    }

    return fetch_retry(url, 5);
}

get('api/event/123')
  .then(result => console.log(result))
  .catch(error => console.log(error))
