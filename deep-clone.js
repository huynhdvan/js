


const deepCopy = obj => {
	if (typeof obj !== 'object' || obj === null) {
		return obj;
	}

	let cloned, i;

	// Date
	if (obj instanceof Date) {
		cloned = new Date(obj.getTime());
		return cloned;
	}

	// array
	if (obj instanceof Array) {
		let l;
		cloned = [];
		for (i = 0, l = obj.length; i < l; i++) {
			cloned[i] = deepCopy(obj[i]);
		}
		return cloned;
	}

	// object
	cloned = {};
	for (i in obj) {
		cloned[i] = deepCopy(obj[i]);
	}

	return cloned;
}

let arr = {
  _string: "string",
  _number: 3,
  _bool: true,
  _null: null,
  _undefined: undefined,
  _arr: [
    ["Apple", "Pear"],
    ["Carrots", "Peas"],
    ],
  _obj: {
    a: "a",
    b: {
      mot: "Yellow",
      hai: "Red"
    }
  },
  _function: () => {
    let a = "giatriA";
    return a;
  }
};

// thực hiện sao chép hoàn toàn tách biệt từ arr sang 1 biến mới sử dụng function
// đây là hàm deep copy
// CÓ nhân bản nguyên thuỷ và object
// không bị thay đổi shallow property
// không bị thay đổi deep property
let newArr = deepCopy(arr);

// thay đổi giá trị của thuộc tính trên biến arr
arr._obj.b.mot = "Changed Yellow"; // deep changing
arr._string = "Changed String"; // shallow changing

console.log('Object arr');
console.log(arr);

// thử xem trên newArr có bị ảnh hưởng không
console.log('Object newArr');
console.log(newArr);




// BONUS:

// thực hiện sao chép arr sang 1 biến mới DÙNG ES6 Spread Operator
// - Tính năng
// CÓ nhân bản nguyên thuỷ và object
// không bị thay đổi shallow property
// nhưng bị thay đổi deep property
// Example:
// let newArr = { ...arr}

// thực hiện sao chép arr sang 1 biến mới DÙNG Object.assign()
// tính năng và điểm yếu tương tự ES6 Spread Operator bên trên
// Example:
// let newArr = Object.assign({}, arr);

// thực hiện sao chép arr sang 1 biến mới DÙNG JSON.parse(JSON.stringify())
// deep copy, nhưng chỉ những gì nó 'có thể' mang theo (string, number, null, array, object, )
// thuộc tính undefined và function bị loại bỏ không mang theo
// không bị thay đổi shallow property
// không bị thay đổi deep property
// Example:
// let newArr = JSON.parse(JSON.stringify(arr));