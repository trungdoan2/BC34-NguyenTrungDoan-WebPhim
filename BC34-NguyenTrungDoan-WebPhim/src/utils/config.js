// lưu localStorage value là chuỗi
const saveStringLocal = (key, value) => {

    localStorage.setItem(key, value);
}

// lưu localStorage value là chuỗi
const getStringLocal = (key) => {

    return localStorage.getItem(key);
}

// lưu localStorage value là object hoặc list object
const saveLocal = (key, value) => {

    let data = JSON.stringify(value);
    localStorage.setItem(key, data);
}

// lấy localStorage
const getLocal = (key) => {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
}

// xóa localStorage
const removeLocal = (key) => {
    localStorage.removeItem(key);
}

export { saveStringLocal, getStringLocal, saveLocal, getLocal, removeLocal }