// Лямзин Н. С.
// Работа с бразером
// 10 вариант - Дан список продуктов «название, категория, цена». Необходимо создать массив таких объектов (5-10) штук и написать функцию, которая выведет общую сумму для каждой категории
//              console.log(showPriceByCategory()); // [ { 'Фрукты': 200 }, {'Хлеб': 400 } ]

var allProducts_obj_arr = [
    { name: "Батон",        category: "Хлебобулочные изделия",  price: 50 }, 
    { name: "Белый хлеб",   category: "Хлебобулочные изделия",  price: 30 },
    { name: "Молоко",       category: "Молочная продукция",     price: 40 },
    { name: "Сыр",          category: "Молочная продукция",     price: 100 },
    { name: "Яблоко",       category: "Фрукты",                 price: 50 },
    { name: "Грейпфрут",    category: "Фрукты",                 price: 150 },
    { name: "Банан",        category: "Фрукты",                 price: 80 }
];

function showPriceByCategory()
{
    var resultCategoryPrice_obj_arr = [];

    for (let i = 0; i < allProducts_obj_arr.length; i++) {
        
        var curretnCategory = resultCategoryPrice_obj_arr.find(
            resultCategoryPrice_obj_arr => resultCategoryPrice_obj_arr.category === allProducts_obj_arr[i].category
        );
        
        if (curretnCategory !== undefined)
        {
            curretnCategory.price += allProducts_obj_arr[i].price;
        }
        else
        {
            resultCategoryPrice_obj_arr.push({category: "", price: 0});
            resultCategoryPrice_obj_arr[resultCategoryPrice_obj_arr.length - 1].category = allProducts_obj_arr[i].category;
            resultCategoryPrice_obj_arr[resultCategoryPrice_obj_arr.length - 1].price += allProducts_obj_arr[i].price;
        }
    }

    return resultCategoryPrice_obj_arr;
}

console.log("Результат:");
console.log(showPriceByCategory());