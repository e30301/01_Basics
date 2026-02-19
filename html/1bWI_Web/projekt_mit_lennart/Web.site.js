var count = 2;

        function validate() {
            var user = document.login.uname.value;
            var password = document.login.password.value;
            var valid = false;

            var usernameArray = ["lennart", "isaak"];
            var passwordArray = ["password", "456"];

            for (var i = 0; i < usernameArray.length; i++) {
                if (user === usernameArray[i] && password === passwordArray[i]) {
                    valid = true;
                    break;
                }
            }

            if (valid) {
                alert("Login was successful");
                if (user === "isaak") {
                    window.location.href = "loginsucessbvS0LVwfjGvJ2GUITBLw.html";
                    return false;
                } else if (user === "lennart") {
                    window.location.href = "loginsucessLennartsjgkahuvbgsvlhzuvscu.html";
                    return false;
                }
            }

            if (count > 0) {
                window.location.href = "http://127.0.0.1:5500/Meine_Sites/loginsucessbvS0LVwfjGvJ2GUITBLw.html";
                count--;
            }

            return false;
        }