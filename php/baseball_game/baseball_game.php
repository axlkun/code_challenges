<?php

class Solution{

    /**
     * @param String[] $ops
     * @return Integer
     */

     function calPoints($ops){

        $records = [];

        $isNegative = false;

        foreach($ops as $key => $value){

            if(is_numeric($value)){

                if($isNegative){

                    array_push($records,(int)$value * -1);
                }else{

                    array_push($records,(int)$value);
                }
            }

            if($value === "+" && count($records) >= 2){
                $plus = array_slice($records,-2);
                array_push($records, $plus[0] + $plus[1]);
            }

            if($value === "D" && count($records) >= 1){
                $double = array_slice($records,-1);
                array_push($records,$double[0] * 2);
            }

            if($value === "C" && count($records) >= 1){
                array_pop($records);
            }

            if($value === '-'){
                $isNegative = true;
            }else{
                $isNegative = false;
            }
        }

        return array_sum($records);

     }

}

// read inputs
$ops = str_split(readline());

// solution
$solution = new Solution();
$output = $solution->calPoints($ops);

// print the otput
echo $output;

?>