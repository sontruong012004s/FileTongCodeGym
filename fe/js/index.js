// document.addEventListener("DOMContentLoaded", function() {
//     const banners = document.querySelectorAll('.image-info');
//     const prevButton = document.querySelector('.prev-button');
//     const nextButton = document.querySelector('.next-button');
//     const numVisibleBanners = 3; // Số lượng banner hiển thị đồng thời

//     let currentBannerIndex = 0;

//     function showBanner(index) {
//         banners.forEach(function(banner, i) {
//             if (i >= index && i < index + numVisibleBanners) {
//                 banner.style.display = 'block';
//             } else {
//                 banner.style.display = 'none';
//             }
//         });
//     }

//     showBanner(currentBannerIndex);

//     prevButton.addEventListener('click', function() {
//         if (currentBannerIndex === 0) {
//             currentBannerIndex = banners.length - numVisibleBanners; // Chuyển đến ảnh cuối cùng
//         } else {
//             currentBannerIndex = Math.max(0, currentBannerIndex - 1);
//         }
//         showBanner(currentBannerIndex);
//     });

//     nextButton.addEventListener('click', function() {
//         if (currentBannerIndex + numVisibleBanners >= banners.length) {
//             currentBannerIndex = 0; // Trở lại ảnh đầu tiên nếu đến cuối danh sách
//         } else {
//             currentBannerIndex++;
//         }
//         showBanner(currentBannerIndex);
//     });
// });

// see more 
// function toggleProducts() {
//     let products = document.querySelectorAll('.see-more-product');
//     let seeMore = document.querySelector('.see-more');
//     let seeMoretext = document.querySelector('.text');
//     products.forEach(function(product) {
//         if (product.style.display === 'none' || product.style.display === '') {
//             product.style.display = 'block';
//             seeMore.style.display = 'none';
//             seeMore.style.padding = '0';
//             seeMoretext.style.display = 'none';
//         } else {
//             product.style.display = 'none';

//         }
//     });
// }
function toggleProducts() {
    // Toggle display of products
    let products = document.querySelectorAll('.section-3 .product:nth-child(n+11)');
    products.forEach(function(product) {
        if (product.style.display === 'none' || product.style.display === '') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    // Hide or show "See more" button and text
    let seeMore = document.querySelector('.see-more');
    let seeMoreText = document.querySelector('.text');
    if (seeMore.style.display === 'none' || seeMore.style.display === '') {
        seeMore.style.display = 'block';
        seeMore.style.padding = '0';
        seeMoreText.style.display = 'none';
    } else {
        seeMore.style.display = 'none';
    }
}

