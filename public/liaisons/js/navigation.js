const navigation = document.querySelector('.ctn-navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navigation.classList.add('bg-solid');
    } else {
        navigation.classList.remove('bg-solid');
    }
};