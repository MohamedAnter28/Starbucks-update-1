const opt_1 = document.getElementById('opt-1');
const opt_2 = document.getElementById('opt-2');
const opt_3 = document.getElementById('opt-3');

// التعامل مع حدث اختيار opt-1
opt_1.addEventListener('click', function () {
  document.getElementById('circle').style.background = '#017143';

  changeImage_1('./img1.png');

  function changeImage_1(newImageUrl) {
    const image = document.getElementById('starbucks');
    image.src = newImageUrl;
    image.alt = 'New Image'; // ضع النص البديل للصورة هنا
  }
});

// دالة لتغيير رابط الصورة

opt_2.addEventListener('click', function () {
  document.getElementById('circle').style.background = 'rgb(255, 162, 178)';

  changeImage_2('./img2.png');

  function changeImage_2(newImageUrl) {
    const image = document.getElementById('starbucks');
    image.src = newImageUrl;
    image.alt = 'New Image';
  }
});

opt_3.addEventListener('click', function () {
  document.getElementById('circle').style.background = 'purple';

  changeImage_3('./img3.png');

  function changeImage_3(newImageUrl) {
    const image = document.getElementById('starbucks');
    image.src = newImageUrl;
    image.alt = 'New Image';
  }
});



function imgSlider(anything){
  document.querySelector('.starbucks').src = anything;

}
