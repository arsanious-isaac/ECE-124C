/*jslint browser: true, devel: true */
/* exported validateForm */
/*eslint-env browser*/
/*jshint strict: true */

    

function validateForm() {
    "use strict";
    var RegExp = /[A-Z]/, fn = document.form.fname.value, ln = document.form.lname.value, em = document.form.email.value, ph = document.form.phone.value, ad = document.form.address.value, pw = document.form.password.value, ml = document.getElementById("male"), fml = document.getElementById("female");
    
    if (fn === "" || ln === "" || em === "" || ph === "" || pw === "" || ad === "") {
        alert("من فضلك املأ جميع الخانات المطلوبة");
    } else if (!ml.checked && !fml.checked) {
        alert("من فضلك اختر الجنس");
    } else if (!/^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/.test(em)) {
        alert("من فضلك ادخل بريد الكتروني صالح");
    } else if (!RegExp.test(pw[0])) {
        alert("يجب ان يكون اول حرف في الرقم السري كابتل");
        return true;
    } else if (pw.length !== 8) {
        alert("يجب ان يكون الرقم السري من 8 خانات ");
    } else if (!/\d/.test(pw)) {
        alert("يجب ان يحتوي الرقم السري علي رقم علي الأقل ");
    } else if (/\s/g.test(pw)) {
        alert("يجب ألا يحتوي الرقم السري علي مسافة");
    } else if (/^[a-zA-Z0-9- ]*$/.test(pw)) {
        alert("يجب ان يحتوي الرقم السري علي حرف خاص علي الأقل");
    } else if (ph.length !== 11) {
        alert("يجب ان يتكون رقم الهاتف من 11 رقم");
    } else {
        document.form.classList.add("hideform");
        document.getElementsByClassName("formdone")[0].classList.add("showdone");
    }
}
document.form.submit.onclick = function () {"use strict"; validateForm(); };
    