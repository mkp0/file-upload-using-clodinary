const API_Base_URL = "https://api.cloudinary.com/v1_1/{put_yours_own}/upload";
const PRESET = "{put_yours_own}";

const file = document.getElementById("myFile");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const myfile = file.files[0];
  const fd = new FormData();
  fd.append("file", myfile);
  fd.append("upload_preset", PRESET);

  fetch(API_Base_URL, {
    method: "POST",
    body: fd,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
