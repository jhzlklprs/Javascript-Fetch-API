fetch('https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg')
.then((res) => res.blob())
.then((blob) => {
    console.log(blob);
    document.querySelector('#myImage').src = URL.createObjectURL(blob);
}).catch((err) => {
    console.log(err);
})