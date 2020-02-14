//task 1
function pause(func, seconds) {
    return function() {
        setTimeout(() => {
            func();
        }, seconds*1000);
    }
}

function func() {
	console.log('Функция выполниться с задержкой в 2 секунды!');
}

let paused = pause(func, 2);

paused();

//task 2
function func(){
	return [1, 2]
}

function return_object(f) {
    let fn = f();
    if(!Array.isArray(fn)) {
        return 0;
    }
    return () => {
        let obj = {};
        for(let i = 1; i < arguments.length; i++) {
            obj[arguments[i]] = fn[i-1];
        }
        return obj;
    }
}
/*
let func_decorated = return_object(func, 'one', 'two');
let r = func_decorated();

console.log(r.one); // 1
console.log(r.two); //2
*/
function func(){
	return ['Python', 'is', 'programming language']
}
let r = return_object (func, 'a', 'b', 'c')();
console.log(r.c) // 'programming language'