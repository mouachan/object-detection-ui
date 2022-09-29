// // script.js

const form = document.getElementById("form");

form.addEventListener("submit", submitForm);
//function submitForm(e) {
export const submitForm = () => {
  console.log("submit form");

    //e.preventDefault();
    //const url = document.getElementById("url").value;
    const files = document.getElementById("files");
    console.log("image "+files);
    const formData = new FormData();
    formData.append("image", files);
    // for(let i =0; i < files.files.length; i++) {
    //   console.logs("file "+files.files[i]);
    //           formData.append("files", files.files[i]);
    //  }
    const url = "http://object-detection-rest-retail-rhods-project.apps.cluster-xhrd6.sandbox1005.opentlc.com/predictions"
    fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
    })
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));
}

