/ Mảng chứa thông tin cho mỗi hình thu nhỏ
const images = [
  {
    src: "https://via.placeholder.com/500x300/FF0000/FFFFFF?text=Hình+Đỏ",
    alt: "Hình lớn màu đỏ",
    thumbAlt: "Hình ảnh màu đỏ",
  },
  {
    src: "https://via.placeholder.com/500x300/00FF00/FFFFFF?text=Hình+Xanh+Lá",
    alt: "Hình lớn màu xanh lá",
    thumbAlt: "Hình ảnh màu xanh lá",
  },
  {
    src: "https://via.placeholder.com/500x300/0000FF/FFFFFF?text=Hình+Xanh+Dương",
    alt: "Hình lớn màu xanh dương",
    thumbAlt: "Hình ảnh màu xanh dương",
  },
  {
    src: "https://via.placeholder.com/500x300/FFFF00/000000?text=Hình+Vàng",
    alt: "Hình lớn màu vàng",
    thumbAlt: "Hình ảnh màu vàng",
  },
  {
    src: "https://via.placeholder.com/500x300/FF00FF/FFFFFF?text=Hình+Tím",
    alt: "Hình lớn màu tím",
    thumbAlt: "Hình ảnh màu tím",
  },
  {
    src: "https://via.placeholder.com/500x300/00FFFF/000000?text=Hình+Nước+Biển",
    alt: "Hình lớn màu nước biển",
    thumbAlt: "Hình ảnh màu nước biển",
  },
];

const gallery = document.getElementById('gallery');
const largeImage = document.getElementById('largeImage');

const originalText = "Chọn một hình ảnh bên dưới";
const originalBg = "";

// Hàm cập nhật hình ảnh lớn
function updateLargeImage(index) {
  if (index === null) {
    largeImage.style.backgroundImage = `url('${originalBg}')`;
    largeImage.textContent = originalText;
    largeImage.setAttribute('aria-label', originalText);
  } else {
    largeImage.style.backgroundImage = `url('${images[index].src}')`;
    largeImage.textContent = images[index].alt;
    largeImage.setAttribute('aria-label', images[index].alt);
  }
}

// Thêm thuộc tính tabindex và listener cho mỗi hình thu nhỏ
function addListeners() {
  const thumbs = gallery.querySelectorAll('.thumbnail');
  for (let i = 0; i < thumbs.length; i++) {
    const thumb = thumbs[i];
    thumb.setAttribute('tabindex', 0);
    thumb.setAttribute('alt', images[i].thumbAlt);

    // onmouseover
    thumb.addEventListener('mouseover', () => {
      console.log(`mouseover on image ${i+1}`);
      updateLargeImage(i);
    });

    // onmouseleave
    thumb.addEventListener('mouseleave', () => {
      console.log(`mouseleave on image ${i+1}`);
      updateLargeImage(null);
    });

    // onfocus
    thumb.addEventListener('focus', () => {
      console.log(`focus on image ${i+1}`);
      updateLargeImage(i);
    });

    // onblur
    thumb.addEventListener('blur', () => {
      console.log(`blur on image ${i+1}`);
      updateLargeImage(null);
    });
  }
}

// Hàm load gọi khi trang tải
function init() {
  console.log("Page loaded - initialize listeners and tabindex");
  addListeners();
  updateLargeImage(null);
}

// Gán listener onload để gọi hàm init
window.addEventListener('load', init);
