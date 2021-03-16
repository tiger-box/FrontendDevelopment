// Лямзин Н. С.
// Работа с бразером
// 10 вариант - Напишите решение, которое вычисляет произведение квадратных корней для всех чётных чисел целочисленного массива
//              (Input: arr=[1,4,5,99,16,53,64,5], Output: 64)


function generateArrayFieldInput()
{
    var count = document.getElementById("count").value;
    var arrayFields = document.getElementById('array_fields');
    var htmlContent = "";

    for (var i = 0; i < count; i++)
    {
        htmlContent += "<li><input class=\"array_element\" type=\"text\" placeholder=\"" + i + "\"/></li>\n";
    }

    arrayFields.innerHTML = htmlContent;
}

function calc()
{
    var arrayElements = document.getElementsByClassName('array_element');
    var result = 1;

    for (var i = 0; i < arrayElements.length; i++)  {
        var item = arrayElements[i].value;
        if (item % 2 === 0) {
            result *= Math.sqrt(item);
        }
    }

    document.getElementById('result').innerHTML = result;
}