// عرض عدد العملات
document.getElementById('currency-count').textContent = localStorage.getItem('robuxCount') || 0;

// دالة تنفذ عند النقر على زر تسجيل الدخول
function login() {
    // قم بتغيير الرابط لتوجيه المستخدم إلى تسجيل الدخول بالديسكورد
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1221219985985241178&redirect_uri=https%3A%2F%2Frobloxstore.github.io%2FRobux-S%2Flogin&response_type=code&scope=identify%20email';
}
