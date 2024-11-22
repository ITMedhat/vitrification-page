// كلمة المرور المطلوبة (يمكنك تعديلها هنا)
const correctPassword = "x8igAX8nZcacR-5";

// عناصر الصفحة
const loginForm = document.getElementById("loginForm");
const addMemberForm = document.getElementById("addMemberForm");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const memberForm = document.getElementById("memberForm");

// التحقق من كلمة المرور عند تقديم النموذج
passwordForm.addEventListener("submit", function (event) {
    event.preventDefault(); // منع تحميل الصفحة عند تقديم النموذج

    // التحقق من كلمة المرور المدخلة
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        // إخفاء نموذج كلمة المرور وإظهار نموذج إضافة العضو
        loginForm.style.display = "none";
        addMemberForm.style.display = "block";
    } else {
        alert("كلمة المرور غير صحيحة!"); // تنبيه في حال كانت الكلمة خاطئة
    }
});

// التعامل مع إضافة العضو الجديد
memberForm.addEventListener("submit", function (event) {
    event.preventDefault(); // منع تحميل الصفحة عند تقديم النموذج

    // جمع بيانات العضو من النموذج
    const name = document.getElementById("name").value;
    const nationalID = document.getElementById("nationalID").value;
    const studentCode = document.getElementById("studentCode").value;
    const rank = document.getElementById("rank").value;
    const idNum = document.getElementById("idNum").value;
    const photoInput = document.getElementById("photo");

    // تحويل الصورة إلى Base64
    const photoFile = photoInput.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
        const photoBase64 = reader.result;

        // إنشاء رابط العضو الجديد باستخدام ID N.
        const memberLink = `member_${idNum}.html`;

        // هنا يتم حفظ البيانات العضو (ممكن استخدام API أو تخزين محلي)
        // مثال على طريقة حفظ البيانات محليًا (يمكنك تعديلها حسب ما تحتاج)
        const newMember = {
            name,
            nationalID,
            studentCode,
            rank,
            idNum,
            photoBase64
        };

        console.log("تم إضافة العضو:", newMember); // هنا يمكنك حفظ البيانات في ملف JSON أو قاعدة بيانات

        // إنشاء صفحة جديدة للعضو
        const newMemberPage = `
            <!DOCTYPE html>
            <html lang="ar">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${name} - صفحة العضو</title>
            </head>
            <body>
                <h1>بيانات العضو</h1>
                <p><strong>الاسم:</strong> ${name}</p>
                <p><strong>الرقم القومي:</strong> ${nationalID}</p>
                <p><strong>كود الطالب:</strong> ${studentCode}</p>
                <p><strong>الرتبة:</strong> ${rank}</p>
                <p><strong>ID N.:</strong> ${idNum}</p>
                <p><strong>الصورة:</strong></p>
                <img src="${photoBase64}" alt="صورة العضو" style="max-width: 300px;">
            </body>
            </html>
        `;

        // حفظ صفحة العضو في ملف HTML باستخدام JavaScript (افتراضيًا في المتصفح لا يمكن حفظ ملفات جديدة)
        // لكن يمكنك إرسال البيانات إلى خادم أو تخزينها محليًا
        alert("تم إضافة العضو بنجاح!");
        window.location.href = memberLink; // الانتقال إلى صفحة العضو الجديدة
    };

    // قراءة الصورة وتحويلها إلى Base64
    reader.readAsDataURL(photoFile);
});
