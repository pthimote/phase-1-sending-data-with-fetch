// // Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: 'POST',
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   })

function submitData(name, email) {
    
   return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name, email})
        })
        .then(res => res.json())
        .then(function (object){
            document.body.textContent = object.id
    })
    .catch(function (error) {
        console.log('error message: *', error.message)
        document.body.textContent = error.message
        
        
      })
}

/* <body>
<script src="index.js"></script>
</body> */

// fetch(`http://localhost:3000/movies/${input.value}`)
// .then(response => response.json())
// .then(data => {
//     const title = document.querySelector('section#movieDetails h4')
//     const summary = document.querySelector('section#moviesDetails p')

//     title.innerText = data.title
//     summary.innerText = data.summary
// })
// });


// document.addEventListener('DOMContentLoaded', init);