var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var hrs = today.getHours();

var greet;

if (hrs < 12)

        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

alert(date  + " " +  greet + " hey baby good morning, from fawzullah");

