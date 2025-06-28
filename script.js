
// Mảng chứa thông tin cho mỗi hình thu nhỏ
const images = [
  {
    src: "https://i.pinimg.com/736x/08/27/4c/08274c1605aa08bb42fec4d57ea1e632.jpg",
    alt: "Hình lớn màu đỏ",
    thumbAlt: "Hình ảnh màu đỏ",
  },
  {
    src: "https://i.pinimg.com/736x/81/45/86/81458631b88c01f52de1f6b46012c40c.jpg",
    alt: "Hình lớn màu xanh lá",
    thumbAlt: "Hình ảnh màu xanh lá",
  },
  {
    src: "https://i.pinimg.com/736x/f0/b6/ce/f0b6ce5a334490ba1ec286bd8bc348e9.jpg",
    alt: "Hình lớn màu xanh dương",
    thumbAlt: "Hình ảnh màu xanh dương",
  },
  {
    src: "https://i.pinimg.com/736x/e1/84/cc/e184ccda9a10550eed7d44cb83c75989.jpg",
    alt: "Hình lớn màu vàng",
    thumbAlt: "Hình ảnh màu vàng",
  },
  {
    src: "https://i.pinimg.com/736x/1e/5a/4e/1e5a4ee534c538cf457d8f9932850d20.jpg",
    alt: "Hình lớn màu tím",
    thumbAlt: "Hình ảnh màu tím",
  },
  {
    src: "https://i.pinimg.com/736x/24/11/bc/2411bca766f2778169460974fd4ce3ec.jpg",
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
