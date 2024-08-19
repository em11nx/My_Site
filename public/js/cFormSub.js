const postButton = document.getElementById('CformSumbit')

const baseURL = 'http://localhost:3000/'
const formSubURL = 'http://localhost:3000/form/sinfo'

var form = document.querySelector(".my-form");

postButton.addEventListener('click', postInfo)
async function postInfo(e) {
    e.preventDefault();
    var inputName = document.getElementById('CformName');
    var inputEmail = document.getElementById('CformEmail');
    var inputSubject = document.getElementById('CformSubject');
    //            |
    //change this\|/ to show in html
    if(inputName.value === '' | inputEmail.value === '' | inputSubject.value === ''){console.log("Not all info filled out"); return}
    console.log(inputName, " ", inputEmail, " ", inputSubject);
    const res = await fetch(formSubURL,
    {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            formContent: {
                'name': inputName.value,
                'email': inputEmail.value,
                'subject': inputSubject.value
            }
        })
    })
}