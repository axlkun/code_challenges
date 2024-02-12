<?php

// HITOWER
// -Iterate Over the numbers from 1 to 100. -Print the number if the following cases does NOT match. -For Multiples of 3 print “Fizz” instead of the number. -For multiples of 5 print “Buzz” instead of the number. -For numbers which are multiples of both 3 and 5 print “FizzBuzz”

//multiplo 3 = fizz
//multiplo 5 = buzz
// multiplo 3 y 5 = fizzbuzz

for($i = 1; $i<= 100; $i++){

    if ( ($i % 3 === 0) && ($i % 5 === 0)){
        echo $i . "fizzbuzz <br>";
    }
    elseif( $i % 3 === 0){
        echo  $i . "fizz <br>";
    }

    elseif($i % 5 === 0){
        echo $i . "buzz <br>";
    }

    else{
        echo $i . "<br>";
    }
}