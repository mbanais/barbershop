const navigation = document.querySelector('nav');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navigation.classList.add('bg-solid');
    } else {
        navigation.classList.remove('bg-solid');
    }
};