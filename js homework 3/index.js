//Инпуты
let userName = document.querySelector('.user-name')
let userSurname = document.querySelector('.user-surname')

//Кнопки
let addStudentButton = document.querySelector('.add-student')

//Таблица
let studentListElement = document.querySelector('.student-list')
let id = 0

let studentArray = []


addStudentButton.addEventListener('click', function (event) {
    let userNameValue = userName.value
    let userSurnameValue = userSurname.value
    id+=1
    
    let userObj = {
        userNameKey: userNameValue,
        userSurnameKey: userSurnameValue,
        idKey: id 
    }
    
    studentArray.push(userObj)

    let innerHtmlWithStudents = ''

    studentArray.forEach((item) => {
        innerHtmlWithStudents += `<div class='student>
            <div class='description-wrapper>
                <p> ${item.idKey}</p>                      
                <p> ${item.userNameKey}</p>            
                <p> ${item.userSurnameKey}</p> 
            </div>        
        </div>`
    })

    studentListElement.innerHTML = innerHtmlWithStudents
})
    