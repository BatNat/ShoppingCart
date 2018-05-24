//Variables
const courses = document.querySelector('#courses-list'),
      shoppingCartContent = document.querySelector('#cart-content tbody');


//listeners

loadEventListeners();

function loadEventListeners() {
    //Когда новый курс добавлен в корзину 
    courses.addEventListener('click', byuCours);
}

//Functions

function byuCours(e) {
    e.preventDefault();
    // использование делегирования  чтобы найти курс который мы добавили
    if(e.target.classList.contains('add-to-cart')) {
        //прочитать значение курса
        const course = e.target.parentElement.parentElement;

        getCourseInfo(course);
    }
}

function getCourseInfo(course) {
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    addIntoCart(courseInfo);
}

function addIntoCart() {
    // создать tr для корзины
    const row = document.createElement('tr');

    row.innerHTML = `
        <tr>
            <td>
                <img src="${course.image}" width=100>
            </td>
            <td>${course.price}</td>  
            <td>${course.title}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>
        </tr>
    `;
//добавить в корзину
        shoppingCartContent.appendChild(row);

}