let soup_sum = 0;
let main_dish_sum = 0;
let drink_sum = 0;
let dessert_sum = 0;
let salad_sum = 0;  
let sum = 0;

// Вызов функции, прогружающей все данные из файла arrays.js
prepare_page()

// Слушатель ивента на отправление данных формы на адрес action. Нужен для отдельной валидации формы на стороне клиента
document.getElementById('construct_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Остановить стандартное поведение отправки формы
    
    let isValid = true; // Флаг для проверки валидности

    if (sum == 0){trigger_notification('Выберите что-нибудь для заказа'); isValid=false;}
    else if (drink_sum == 0){trigger_notification('Выберите напиток'); isValid=false;}
    else if (main_dish_sum == 0 && salad_sum == 0){trigger_notification('Выберите главное блюдо и салат'); isValid=false;}
    else if (soup_sum == 0 && main_dish_sum == 0){trigger_notification('Выберите суп или главное блюдо'); isValid=false;}
    else if (main_dish_sum == 0){trigger_notification('Выберите главное блюдо'); isValid=false;}

    // Если первая валидация прошла, проверить встроенные валидаторы
    if (isValid) {
        if (this.checkValidity()) {
            // Если все проверки пройдены, отправляем форму
            this.submit(); // Отправить форму
        } else {
            // Если встроенные валидаторы не пройдены
            this.reportValidity(); // Отобразить ошибки валидаторов
        }
    }
});

// Функция для создания уведомления
function trigger_notification(text){
    let notification = document.getElementById('notification')
    notification.getElementsByTagName('p')[0].innerHTML = text;
    notification.classList.remove('hidden');
}


// Функция, срабатывающая при нажатии кнопки "закрыть" на уведомлении
function close_notification(){
    document.getElementById('notification').classList.add('hidden');
}

// Функция, срабатывающая при нажатии на блок с конкретным блюдом.
function select(name, id, price){
    let arr = null;
    if (name == 'soup') {arr = soup_array}
    else if (name == 'main_dish') {arr = dishes_array}
    else if (name == 'drink') {arr = drinks_array}
    else if (name == 'salad') {arr = salads_array}
    else if (name == 'dessert') {arr = desserts_array}

    arr.forEach(el => {
        document.querySelector(`select[name='${el.category}'] option[value='${el.select_id}']`).removeAttribute('selected')
    });
    option = document.querySelector(`select[name='${name}'] option[value='${id}']`);
    option.setAttribute('selected', true);
    // Задавание суммы заказов. Общая сумма складывается из сумм за отдельно каждое блюдо
    if (name == 'soup'){
        soup_sum = price;
    }
    else if (name == 'main_dish'){
        main_dish_sum = price;
    }
    else if (name == 'drink'){
        drink_sum = price;
    }

    else if (name == 'dessert'){
        dessert_sum = price
    }
    else if (name = 'salad'){
        salad_sum = price
    }
    sum = soup_sum + main_dish_sum + drink_sum + dessert_sum + salad_sum
    document.getElementById('order_h2').innerHTML = `Ваш заказ стоит ${sum} рублей`
}

function delivery_time_pick_earlier(){
    time_inp = document.getElementById('delivery-time')
    time_pick_block = document.getElementById('delivery-time-block')
    if (time_inp.hasAttribute('required')){time_inp.removeAttribute('required')}
    time_pick_block.classList.add('hidden');
}

function delivery_time_pick_spec_time(){
    time_inp = document.getElementById('delivery-time')
    time_pick_block = document.getElementById('delivery-time-block')
    if (!time_inp.hasAttribute('required')){time_inp.setAttribute('required', true)}
    time_pick_block.classList.remove('hidden');
}


