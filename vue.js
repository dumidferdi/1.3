// import { createApp } from 'vue';
// import App from './App.vue';

// const app = createApp(App);
// app.mount('#app');
// Vue.js instance
const app = new Vue({
    el: '#app',
    data: {
        name: '',
        email: '',
        message: '',
        submitted: false,
    },
    methods: {
        submitForm() {
            
            if (this.name && this.email && this.message) {
               
                this.submitted = true;
            } else {
                alert('Please fill in all fields.');
            }
        },
        resetForm() {
            // Reset the form fields
            this.name = '';
            this.email = '';
            this.message = '';
            this.submitted = false;
        },
    },
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust the offset as needed
                behavior: 'smooth',
            });
        }
    });
});