// script.js

// عند تحميل الصفحة
window.onload = function() {
    // أضف حدثًا لنموذج تسجيل الدخول
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة
        
        // احصل على قيم البريد الإلكتروني وكلمة المرور
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // يمكنك هنا إجراء عملية تحقق من بيانات تسجيل الدخول، مثل إرسالها إلى خادم أو التحقق منها بشكل محلي
        // هذا مجرد مثال بسيط
        if (email === 'user@example.com' && password === 'password') {
            alert('تم تسجيل الدخول بنجاح!');
        } else {
            alert('فشل تسجيل الدخول! الرجاء التحقق من بيانات الدخول.');
        }
    });
};
