
// CHapter#1

const { array } = require("prop-types");

function chap1_q1() {
    alert("Welcome To Our Website");
}

function chap1_q2() {
    alert("Error! PleaseEnter a Valid Password")
}

function chap1_q3() {
    alert("Welcome to  JS Land... \nHappy Coding!")
}

function chap1_q4() {
    alert("Welcome to  JS Land");
}

function chap1_q5() {
    alert(`Hello... I can run JS through my web browser's onsole`);
}


// CHapter#02 

function chap2_q1() {
    var username;
    document.write("variable username has decleared")
}

function chap2_q2() {
    var myName = "Hafiz Muhammad Hassan"
    document.write(myName)
}

function chap2_q3() {
    var message = "Hello World!"
    alert(message)
}

function chap2_q4() {
    var fname, lname, age, course;
    fname = prompt("What is your First Name")
    lname = prompt("What is your Last Name")
    age = +prompt("What is your Age")
    course = prompt("In Which Course You are enrolled in")
    var bio_data = fname + " " + lname
    alert(bio_data)
    alert(age + " Years Old")
    alert(course)
}

function chap2_q5() {
    alert("pizza \npizz \npiz \npi \np")
}

function chap2_q6() {
    var email = String("example@example.com")
    alert("My Email is " + email)
}

function chap2_q7() {
    var book = prompt("Book Name: ")
    alert("I am trying to learn from the Book " + book)
}

function chap2_q8() {
    document.write("Yeah! I can write HTML content through JavaScript")
}

function chap2_q9() {
    var str = "“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”"
    alert(str)
}

// CHapter#03 

function chap3_q1() {
    var age = 20
    alert(`I am ${age} Years old`)
}

function chap3_q2() {
    var track = "14"
    alert(`You have visited this site ${track} times`)
}

function chap3_q3() {
    var birthYear = +prompt("Enter Your Birth Year")
    document.write(`My Birthday Year is  ${birthYear}<br>`)
    document.write("Data Type of my Declared variable is ", typeof (birthYear))
}

function chap3_q4() {
    var web_name = "E-clothing.com"
    alert("Welcome TO E-clothing Website")
    var visitor_name = prompt("Enter Your Name")
    var product_title = prompt("Enter The Product Name")
    var Quantity = +prompt("Enter The Product Quantity")
    document.write(`${visitor_name} ordered ${product_title} ${Quantity} on ${web_name}`)
}

// CHapter#04

function chap4_q1() {
    var var1, var2, var3
    document.write("Declared Three varibles in a single ine one statement")
    document.write("<br>var names are var1, var2, var3")
}

function chap4_q2() {
    var a123a, $true, title3, false_1, acC2ept
    // var 123, _123, a234dsf_, True, False
    document.write(a234dsf_)
}

function chap4_q3() {
    document.write("<h2>Rules for naming JS varible</h2>")
    document.write("Variable names can only contain numbers, $,and _.For eaxmple $my_1stVariable")
    document.write(`<br>Variables must begin with a letter, $ or
    _. For example $name, _name or name`)
    document.write("<br>Variable names are case Sensitive<br>")
    document.write("Variable names should not be JS keywords")
}

// CHapter# 05 

function chap5_q1() {
    var no1, no2;
    no1 = +prompt("Enter 1st no:")
    no2 = +prompt("Enter 2nd no:")
    document.write(`Sum of ${no1} and ${no2} is ${no1 + no2}`)
}

function chap5_q2() {
    var no1, no2;
    no1 = prompt("Enter 1st no")
    no2 = prompt("Enter 2nd no")
    var add = no1 + no2; var sub = no1 - no2; var mult = no1 * no2; var divis = no1 / no2
    document.write(`Addition of ${no1} and ${no2} is ${add}<br>`)
    document.write(`Subtraction of ${no1} and ${no2} is ${sub}<br>`)
    document.write(`Multiplication of ${no1} and ${no2} is ${mult}<br>`)
    document.write(`Dvision of ${no1} and ${no2} is ${divis}<br>`)

}

function chap5_q3() {
    var no = 22
    document.write(`Value after varible declaration is: ${a}`)
    document.write(`<br>Initial value: ${no}`)
    no++
    document.write(`<br>value after Increment ${no}`)
    no += 08
    document.write(`<br>value after addition ${no}`)
    no--
    document.write(`<br>value after Decrement ${no}`)
    no %= 3
    document.write(`<br>The Remainder is ${no}`)

}

function chap5_q4() {
    var ticket_price = 600;
    var cost = +prompt("How many Tickets You Want to Buy:")
    document.write(`Total Cost to buy ${cost} tickets to a movie is : ${ticket_price * cost}`)
}

function chap5_q5() {
    var user = +prompt("Of which no you want to find the Table:")
    document.write(`The Table of ${user} is:<br>`)
    for (var i = 0; i <= 10; i++) {
        table = user * i;
        document.write(`${user}x${i}=${table}<br>`)
    }
}

function chap5_q6() {
    var temp = +prompt("Write a tempertaure in Celcius")
    var deg = +prompt("Write a tempertaure in Fahrenhite")
    F = (temp * 9 / 5) + 32;
    C = (deg - 32) * 5 / 9
    document.write(`${temp}<sup>o</sup>C is ${F}<sup>o</sup>F<br>`)
    document.write(`${F}<sup>o</sup>F is ${C}<sup>o</sup>C`)
}

function chap5_q7() {
    var item1 = +prompt("Enter the Price of Item 1:")
    var item1_q1 = +prompt("Enter the Quantity of Item 1:")
    var item2 = +prompt("Enter the Price of Item 2:")
    var item2_q2 = +prompt("Enter the Quantity of Item 2:")
    var shipping_charges = +prompt("Enter the Price of Shipping charges")
    total_cost = (item1 * item1_q1) + (item2 * item2_q2) + shipping_charges
    document.write("<h1>Shopping Cart</h1><br><br>Price of Item 1 is: " + item1, "<br>")
    document.write("Quantity of Item 1 is: " + item1_q1, "<br>")
    document.write("Price of Item 2 is: " + item2, "<br>")
    document.write("Quantity of Item 2 is: " + item2_q2, "<br>")
    document.write("Shipping Charges: " + shipping_charges, "<br><br>")
    document.write("Total Cost: ", total_cost, "PKR")

}

function chap5_q8() {
    var total_marks = +prompt("Enter the Total Marks:")
    var Obtain = +prompt("Enter the Obtain Marks:")
    var percent = Obtain / total_marks * 100
    document.write("<h1>Mark Sheet</h1><br><br>Total Marks: ", total_marks, "<br>")
    document.write("Obtain Marks: ", Obtain, "<br>")
    document.write("Percentage " + percent)

}

function chap5_q9() {
    var us_dollars = +prompt("Enter amount in US Dollars:")
    var Saudi = +prompt("Enter amount in Saudi Dollars:")
    var currency = (us_dollars * 104.80) + (Saudi * 28)
    document.write("<h1>Currency in PKR</h1><br><br>Total Currency in PKR: ", currency + "<br>")
}

function chap5_q10() {
    var no = +prompt("Enter any number:")
    var cal = (no + 5) * 10 / 2;
    document.write("<h1>Calculations</h1><br> 1)Adding 5<br>2)Multiply by 10<br>3)Divide by 2")
    document.write("<br>Answer is: ", cal)
}

function chap5_q11() {
    var current = +prompt("Enter the Current Year:")
    var birth = +prompt("Enter the Birth Year:")
    document.write("<h1>Age Calculator</h1><br> Current Year: " + current, "<br>Birth Year", birth + "<br>Your Age is: ", current - birth)
}

function chap5_q12() {
    var radius = +prompt("Enter the Radius of Circle:")
    var pi = 3.14; circum = 2 * pi * radius; area = pi * radius ** 2
    document.write("<h1>The Geometrizer: </h1><br>Radius of Circle is: " + radius + "<br>The Circumference is: " + circum.toFixed(2), "<br> The Area is: ", area.toFixed(2))
}

function chap5_q13() {
    var snack = prompt("Enter Your Favuorite Snack:")
    var age = +prompt("Enter Your Current Age:")
    var max_age = +prompt("Enter the Maximum Age that You Think You Can Live:")
    var per_day = +prompt("Enter Amount of snack Per Day")
    var calc = (max_age - age) * per_day
    document.write("<h1>The Lifetime Supply Calculator:</h1><br>")
    document.write("Favourite Snack: ", snack, "<br>Current Age: ", age, "<br>Estimated Maximum Age: ", max_age, "<br>Amount of Snack Per Day: ", per_day)
    document.write("<br>You will need ", calc + " " + snack, " To Last You Utill You Ripe Old Age of ", max_age + " Years")
}

// Chapter# 06 To 09

function chap5_q11() {
    var current = +prompt("Enter the Current Year:")
    var birth = +prompt("Enter the Birth Year:")
    document.write("<h1>Age Calculator</h1><br> Current Year: " + current, "<br>Birth Year", birth + "<br>Your Age is: ", current - birth)
}


function chap6_q1() {
    var a = +prompt("Write any no:")
    document.write("<h1>Post and Pre Decremen/Increment</h1><br><br>Result:<br>")
    document.write(`The Value of a is: ${a}`)
    document.write("<br><hr width=210px align='left'>")
    document.write(`The Value of ++a is: ${++a}<br>Now the Value of a is ${a}<br><br>`)
    document.write(`The Value of a++ is: ${a++}<br>Now the Value of a is ${a}<br><br>`)
    document.write(`The Value of --a is: ${--a}<br>Now the Value of a is ${a}<br><br>`)
    document.write(`The Value of a-- is: ${a--}<br>Now the Value of a is ${a}<br><br>`)

}


function chap6_q2() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--
    document.write(`a=${a} and b=${b}<br>So --a - --b + ++b + b-- = `, result)
    a = 2, b = 1;
    document.write(`<h1>1) --a </h1>--a is pre decrement the value of a was ${a = 2} so after pre decrement the value of --a is ${--a}`)
    document.write(`<h1>2) --a - --b </h1>value of --a is now 1 -minus the present value of a with --b which is 0 so answer is 1-0 is 0`)
    document.write(`<h1>3) --a - --b + ++b</h1>we see the answer of -a - --b is 0 if we add with ++b so --a - --b + ++b equal to 1-0+1=2 `)
    document.write(`<h1>3) --a - --b + ++b + b--</h1>we see answer of --a - --b + ++b is 2 so right now value of b is 1 so if we incremented ppostly in b that not gonna invrement b value untill we call it so the final answer is<br>`)
}


function chap6_q3() {
    var name = prompt("Enter Your Name:")
    document.write("Hi! " + name + " Welcome to our platform")
}

function chap6_q4() {
    var no = +prompt("Enter a new number:")
    if (no > 0) {
        for (var a = 1; a <= 10; a++) {
            document.write(`${no} x ${a}= ${no * a}<br>`);
        }
    } else {
        for (var a = 1; a <= 10; a++) {
            document.write(`${no = 5} x ${a}= ${no * a}<br>`);
        }
    }
}

function chap6_q5() {
    alert("Enter The Name of 3 Subjects")
    var subject1 = prompt("Enter Sunjects1 Name")
    var subject2 = prompt("Enter Sunjects2 Name")
    var subject3 = prompt("Enter Sunjects3 Name")
    var total = 100
    var obtained1 = +prompt("Enter Obtained Marks of: ", subject1)
    var obtained2 = +prompt("Enter Obtained Marks of: ", subject2)
    var obtained3 = +prompt("Enter Obtained Marks of: ", subject3)
    var perc1 = (obtained1 / total) * 100, perc2 = (obtained2 / total) * 100, perc3 = (obtained3 / total) * 100
    var all_per = (perc1 + perc2 + perc3) / 3
    var all_obtained = obtained1 + obtained2 + obtained3
    document.write("<table class='table1'>")
    document.write(`<th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th>`)
    document.write("</tr>")

    document.write("<tr>")
    document.write(`<td>${subject1}</td><td>${total}</td><td>${obtained1}</td><td>${perc1.toFixed(2)}</td>`)
    document.write("</tr>")

    document.write("<tr>")
    document.write(`<td>${subject2}</td><td>${total}</td><td>${obtained2}</td><td>${perc2.toFixed(2)}</td>`)
    document.write("</tr>")

    document.write("<tr>")
    document.write(`<td>${subject3}</td><td>${total}</td><td>${obtained3}</td><td>${perc1.toFixed(2)}</td>`)
    document.write("</tr>")

    document.write("<tr>")
    document.write(`<th id='last'></th><th>${total * 3}</th><th>${all_obtained}</th><td>${all_per.toFixed(2)}</th>`)
    document.write("</tr>")

    document.write("</table>")
}

function chap9_q1() {
    var city = prompt("Enter Your City Name:", "City").toLowerCase()
    if (city == "karachi") {
        alert("'Welcome To The City of Lights'")
    }
}

function chap9_q2() {
    var user = prompt("Enter Your Gender:", "Gender").toLowerCase()
    if (user == "male") {
        alert("Good Morning Sir!:)")
    } else {
        alert("Good Morning Ma'am!:)")
    }
}

function chap9_q3() {
    var color = prompt("Enter Color of Traffic Signal:", "Signal_color").toLowerCase()
    if (color == "red") {
        alert("Must Stop")
    }
    else if (color == "yellow") {
        alert("Ready To Move")
    }
    else if (color == "green") {
        alert("Move Now")
    }
}

function chap9_q4() {
    var fuel = +prompt("Enter the Remaining Fuel in Your Car:" + "liters")
    if (fuel < 0.25) {

        alert("Please refill the fuel in your car")
    }
    alert(fuel + " liters")
}

function chap9_q5() {
    var ask = +prompt("Enter a case from 1 to 6")
    switch (ask) {
        case 1:
            var a = 4;
            if (++a === 5) {
                alert("given condition for variable a is true");
            }
            break;
        case 2:
            var b = 82;
            if (b++ === 83) {
                alert("given condition for variable b is true");
            }
            else {
                alert("No b=82 and after b++ is not equal to 83");
            }
            break;
        case 3:
            var c = 12;
            if (c++ === 13) {
                alert("condition 1 is true");
            }
            if (c === 13) {
                alert("condition 2 is true");
            }
            if (++c < 14) {
                alert("condition 3 is true");
            }
            if (c === 14) {
                alert("condition 4 is true");
            }
            break;
        case 4:
            var materialCost = 20000;
            var laborCost = 2000;
            var totalCost = materialCost + laborCost;
            if (totalCost === laborCost + materialCost) {
                alert("The cost equals");
            }
            break;
        case 5:
            if (true) {
                alert("True");
            }
            if (false) {
                alert("False");
            }
            break;
        case 6:
            if ("caz" > "cat") {
                alert("car is smaller than cat");
            }
            break;
    }
}

function chap9_q6() {
    var subject1 = +prompt("Enter the marks of 1st subject:" + "Subject1")
    var subject2 = +prompt("Enter the marks of 2nd subject:" + "Subject2")
    var subject3 = +prompt("Enter the marks of 3rd subject:" + "Subject3")
    var total_marks = 300
    var marks_obtained = subject1 + subject2 + subject3
    var per = marks_obtained / total_marks * 100, grade, remarks;
    if (per >= 80) {
        grade = "A-one";
        remarks = "Excellent"
        document.write(`<h2>Mark Sheet</h2>`)
        document.write(`<br><br>Total Marks: ${total_marks}<br>
        Marks Obtained: ${marks_obtained}<br>Percentage: ${per.toFixed(2)}%<br>Grade: ${grade}<br>Remarks: ${remarks} `)
    }
    else if (per >= 70) {
        grade = "A";
        remarks = "Good"
        document.write(`<h2>Mark Sheet</h2>`)
        document.write(`<br><br>Total Marks: ${total_marks}<br>
        Marks Obtained: ${marks_obtained}<br>Percentage: ${per.toFixed(2)}%<br>Grade: ${grade}<br>Remarks: ${remarks} `)
    }
    else if (per >= 60) {
        grade = "B";
        remarks = "You Need to Improve"
        document.write(`<h2>Mark Sheet</h2>`)
        document.write(`<br><br>Total Marks: ${total_marks}<br>
        Marks Obtained: ${marks_obtained}<br>Percentage: ${per.toFixed(2)}%<br>Grade: ${grade}<br>Remarks: ${remarks} `)
    }
    else if (per < 60) {
        grade = "Fail";
        remarks = "Sorry!"
        document.write(`<h2>Mark Sheet</h2>`)
        document.write(`<br><br>Total Marks: ${total_marks}<br>
        Marks Obtained: ${marks_obtained}<br>Percentage: ${per.toFixed(2)}%<br>Grade: ${grade}<br>Remarks: ${remarks} `)
    }
}

function chap9_q7() {
    var no = +prompt("Enter the any no:")
    if (no % 3 == 0) {
        alert("The Given no is divisible by 3")
    }
    else {
        alert("The Given no is  <b>not<b> divisible by 3")
    }
}

function chap9_q8() {
    var random = Math.floor(Math.random() * 10);
    document.write(random)
    var guess = +prompt("Guess the Secret Number Between:", "0 to 10")
    if (random == guess) {
        alert("Bingo! Correct answer")
    }
    else if (random == guess + 1) {
        alert("Greater but Close enough to the correct answer")
    }

    else if (random == guess - 1) {
        alert("Lesser But Close enough to the correct answer")
    }
}

function chap9_q9() {
    var no = + prompt("Enter any no:")
    if (no % 2 == 0) {
        alert("The Given no is Even no")
    }
    else {
        alert("The Given no is Odd no")
    }
}

function chap9_q10() {
    var temp = +prompt("Enter the temperature in your area",)
    if (temp > 40) {
        alert("It is too hot outside")
    }
    else if (temp > 30) {
        alert("The Weather today is Normal")
    }

    else if (temp > 20) {
        alert("Today’s Weather is cool")
    }
    else if (temp > 10) {
        alert("OMG! Today’s weather is so Cool")
    }
}


function chap9_q11() {
    var no1 = +prompt("Enter the 1st no:")
    var no2 = +prompt("Enter the 2nd no:")
    var operator = prompt("Enter the operator likw hich operation you want to perform b/w given two no's<br>+,-,*,/")
    switch (operator) {
        case "+":
            alert("The sum of " + no1 + " and " + no2 + " is " + no1 + no2);
            break;
        case "-":
            alert("The Subtraction of " + no1 + " and " + no2 + " is " + no1 - no2);
            break;
        case "*":
            alert("The Multiplication of " + no1 + " and " + no2 + " is " + no1 * no2);
            break;
        case "/":
            alert("The Division of " + no1 + " and " + no2 + " is " + no1 / no2);
            break;
    }
}

function chap12_q1() {
    var chracter = prompt("press any key:")
    if (!isNaN(chracter) == true) {
        alert("the given chracter is number")
    }
    else if (chracter == chracter.toUpperCase()) {
        alert("The Given chracter is Uppercase")
    }
    else if (chracter == chracter.toLowerCase()) {
        alert("The Given chracter is Lowercase")
    }
}

function chap12_q2() {
    var no1 = +prompt("Enter 1st no:")
    var no2 = +prompt("Enter 2nd no:")
    if (no1 > no2) {
        alert("1st no is greater than second no")
    }
    else if (no1 < no2) {
        alert("2nd no is greater than 1st no")
    }
    else {
        alert("Both numbers are equal")
    }
}


function chap12_q3() {
    var no1 = +prompt("Enter the no:")
    if (no1 > 0) {
        alert("Positive")
    }
    else if (no1 < 0) {
        alert("Negative")
    }
    else {
        alert("Zero")
    }
}

function chap12_q4() {
    var letter = prompt("Enter any Letter:")
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        alert("Letter is Vowel")
    }
    else {
        alert("Letter is Consonant")
    }
}

function chap12_q5() {
    var ritght_pass = "abcd1234"
    var user_pass = prompt("Enter Your Password Here!:")
    while (user_pass == 0) {
        alert("Please Enter Your Password")
        var user_pass = prompt("Enter Your Password Here!:")
    }
    if (user_pass == ritght_pass) {
        alert("Correct! Password")
    }
    else if (user_pass != ritght_pass) {
        alert("Wrong! Password")
    }
}


function chap12_q6() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        alert(greeting = "Good day");
    }
    else {
        alert(greeting = "Good evening");
    }
}

function chap13_q1() {
    var array = []
    alert(typeof (array))
}

function chap13_q2() {
    var array = new Array()
    alert(typeof (array))
}

function chap13_q3() {
    var array = ["Hasso", "Faraz", "Ghazali", "Anas", "Hussain"]
    alert(array)
}

function chap13_q4() {
    var array = [22, 60, 48, 66, 15]
    alert(array)
}

function chap13_q5() {
    var array = [true, false]
    alert(array)
}

function chap13_q6() {
    var array = [true, "Hasso", "Faraz", false, 22, 60]
    alert(array)
}


function chap13_q7() {
    var array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
    document.write("<h1>Qualifications</h1>")
    for (i = 0; i < array.length; i++) {
        document.write("<b>")
        document.write(i + 1, ") ", array[i])
        document.write("<br></b>")
    }
}

function chap13_q8() {
    var names = ["Hasso", "Faraz", "Ayan"]
    var score = [320, 230, 480]
    var per1 = score[0] / 500 * 100, per2 = score[1] / 500 * 100, per3 = score[2] / 500 * 100
    document.write(`Score of <b>${names[0]}</b> is ${score[0]}. Percentage is <b>${per1}%</b><br>Score of <b>${names[1]}</b> is ${score[1]}. Percentage is <b>${per2}%</b><br>Score of <b>${names[2]}</b> is ${score[2]}. Percentage is <b>${per3}%</b>`)
}

function chap13_q9() {
    var color = ["Yellow", "Green", "Red"]
    var user_color = prompt("Which color do you want to add in the begining")
    document.write("<b>Orignal:</b>", color, "<br><br>")
    color.unshift(user_color)
    document.write("<b>After using Unshift to insert color in the begining:</b><br>", color)
    var user_color = prompt("Which color do you want to add in the end")
    color.push(user_color)
    document.write("<br><br><b>After using push to insert color in the end:</b><br>", color)
    var user_color1 = prompt("Which 2 colors do you want to add in the begining")
    var user_color2 = prompt("Write another")
    color.splice(0, 0, user_color1, user_color2)
    document.write("<br><br><b>After using splice to insert 2 more color in the begininng:</b><br>", color)
    color.shift()
    document.write("<br><br><b>After using shift to delete color from the start:</b><br>", color)
    color.pop()
    document.write("<br><br><b>After using pop to delete color from the end:</b><br>", color)
    var user_color = prompt("Which color do you want to add in the array")
    var position = prompt("Enter Index/position ")
    color.splice(position, 0, user_color)
    document.write("<br><br><b>After using splice to add user favourite color on user given index:</b><br>", color)
    var user_index = +prompt("On Which index do you want to delte the colora from he array")
    var position = +prompt(`how many colors from ${user_index} index you wanna delete`)
    color.splice(user_index, position)
    document.write("<br><br><b>After using slice to delete user favourite color on user given index:</b><br>", color)

}

function chap13_q10() {
    var score = [320, 230, 480, 120]
    document.write("<br><br><b>Scores of Students: </b> ", score, "<br>")
    score.sort()
    document.write("<b>Ordered Scores of Students : </b> ", score)
}

function chap13_q11() {
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
    document.write("<b>Cities List:</b>", cities, "<br>")
    selected = cities.slice(2, 4)
    document.write("<b>Sekected Cities List:</b>", selected, "<br>")
}

function chap13_q12() {
    var array = ["This", "is", "my", "cat"]
    document.write("<b>Array:</b><br>", array, "<br>")
    document.write("<b>Array To Striing:</b><br>", array.join(" "), "<br>")
}

function chap13_q13() {
    var devices = new Array()
    devices[0] = "Keybord"
    devices[1] = "mouse"
    devices[2] = "printer"
    devices[3] = "monitor"
    document.write("<b>Devices:</b><br>", devices, "<br><br>")
    document.write("<b>Out:</b><br>", devices[0], "<br>", "<b>Out:</b><br>", devices[1], "<br>", "<b>Out:</b><br>", devices[2], "<br>", "<b>Out:</b><br>", devices[3], "<br>")
}

function chap13_q14() {
    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
    document.write("<b>Orignal Array:</b><br>", cities, "<br>")
    cities.reverse()
    document.write("<b>Reverse Array:</b><br>", cities, "<br>")
}

function chap17_q1() {
    var arrays = [[], [], []]
    document.write(arrays)
}

function chap17_q2() {
    var arrays = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
    document.write(arrays)
}

function chap17_q3() {
    for (var i = 1; i <= 10; i++) {
        document.write(i + "<br>")
    }
}

function chap17_q4() {
    var table = +prompt("Enter a number to show its multiplication table: ")
    var length = +prompt("Enter length of the given multiplication table: ")
    document.write(`<b>Multiplication Table of </b> ${table}<br><b>Length</b> ${length}<br><br>`)
    for (var i = 1; i <= length; i++) {
        document.write(`${table} x ${i} = ${table * i}<br>`)
    }
}

function chap17_q5() {
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
    for (i = 0; i < fruits.length; i++) {
        document.write("<b>Element at index</b> ", i, " is ", fruits[i] + "<br>")
    }
}

function chap17_q6() {
    document.write("<h2>Counting:</h2>")
    for (i = 1; i <= 15; i++) {
        document.write(i, ", ")
    }
    document.write("<br><br><h2>Reverse Counting:</h2>")
    for (i = 10; i > 0; i--) {
        document.write(i, ", ")
    }
    document.write("<br><br><h2>Even:</h2>")
    for (i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            document.write(i, ", ")
        }
    }
    document.write("<br><br><h2>Odd:</h2>")
    for (i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            document.write(i, ", ")
        }
    }
    document.write("<br><br><h2>Series:</h2>")
    for (i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            document.write(i, "k, ")
        }
    }
}

function chap17_q7() {
    var items = ["cake", "apple pie", "cookie", "chips", "patties"]
    var user = prompt("Welcoome to ABC Bakery  what do you want to order sir/ma'am?")
    for (i = 0; i < items.length; i++) {
        if (user == items[i]) {
            document.write(`${user} is <b>available</b> at index ${i} in our bakery'`)
        }
    }
   
}

// function chap17_q8() {
//     var array = [24, 53, 78, 91, 12];
//     var largest = 0;

//     for (i = 0; i <= largest; i++) {
//         if (array[i] > largest) {
//             var largest = array[i];
//         }
//     }
//     document.write(`The Largest Number is: ${largest} `)
// }

// / Another method to find smallest number from an array is given below

function chap17_q8() {
    var array = [24, 53, 78, 91, 12];
    document.write(`The Largest Number is: ${Math.max.apply(Math, array)}`)
}

// function chap17_q9() {
//     var array = [24, 53, 78, 91, 12];
//     document.write(`The Smallest Number is: ${Math.min(24, 53, 78, 91, 12)} `)
// }
// Another method to find smallest number from an array is given below

function chap17_q9() {
    var array = [24, 53, 78, 91, 12];
    document.write(`The Smallest Number is: ${Math.min.apply(Math, array)}`)
}

function chap17_q10() {
    for (i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            document.write(`${i}, `)
        }
    }
}


