const form = document.querySelector('.add')

form.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(form)
    var object = {}
    formData.forEach((value, key) => object[key] = value)
    var json = JSON.stringify(object)
    fetch('http://localhost:5000/api/users/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(error => console.log(error))
    location.reload()
})