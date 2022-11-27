

const form = document.getElementById('comp-form');

const ha = document.getElementById('hidden-alert');

form.addEventListener('submit', function(e) {
   e.preventDefault();

   const payload = new FormData(form) // makes array of arrays
   console.log(...payload)

   
   let obj;

   fetch('https://ggdm340m97.execute-api.eu-central-1.amazonaws.com', {
      method: "POST",
      body: payload,
   })
   .then(res => {
      if (res.status === 200) {
         console.log("WOOOW")
         location.replace("./haha.html");
      } else {
         console.log("invalid")
         ha.innerHTML = "<a href='#''loginerrormessage' class='accesshide'>Invalid login, please try again</a><div class='alert alert-danger' role='alert' data-aria-autofocus='true'>Invalid login, please try again</div>";
      }
   })
   .catch(err => console.log(err));
})

// http://192.168.0.133:3001/post

// async function theForm(e) {
//    e.preventDefault();
//    const payload = new FormData(form)

//    const res = await fetch('http://192.168.0.133:3001/post', {
//       method: "POST",
//       body: payload,
//    })

//    obj = await res.json();

//    console.log(obj);
// }