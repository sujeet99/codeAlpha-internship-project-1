function calculateAge() {
            let x = new Date(2025, 7, 0);
            console.log(x);
            const dob = document.getElementById("dob").value;
            if (!dob) {
                document.getElementById("result").innerText = "⚠️ Please select your Date of Birth";
                return;
            }
            const today = new Date();
            const birthDate = new Date(dob);

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();
            
            // Adjust months & days
            if (days < 0) {
                months--;
                days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }
            if (months < 0) {
                years--;
                months +=12;
            }

            document.getElementById("result").innerText = `🎂 Your Age is ${years} Years, ${months} months and ${days} days`
        }