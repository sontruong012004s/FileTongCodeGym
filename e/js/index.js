function toggleProducts() {
    let products = document.querySelectorAll('.section-3 .product:nth-child(n+11)');
    products.forEach(function(product) {
        if (product.style.display === 'none' || product.style.display === '') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
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
function copyVoucher(element) {
    let input = document.getElementById("value-voucher");
    let products = document.querySelectorAll('.notification');
    products.forEach(function(product) {
        if (product.style.display === 'none' || product.style.display === '') {
            product.style.display = 'block';
            input.style.color = 'white';
        } else {
            product.style.display = 'none';
        }
    });
    if (element.classList.contains('code_copy')) {
        let voucherValue = element.getAttribute('value');
        input.innerHTML = voucherValue;
        element.querySelector('p').innerText = "ĐÃ SAO CHÉP";
    }
    setTimeout(function() {
        products.forEach(function(product) {
            product.style.display = 'none';
        });
    }, 1500);
    setTimeout(function() {
        element.querySelector('p').innerText = 'SAO CHÉP MÃ';
    }, 1000);
    
}

