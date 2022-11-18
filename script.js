

function print(value) {
    console.log(value)
}
print("Hello World")

console.dir(print)
console.log({ name: "Kyle", age: 26 })

//Callback

//function useCallback(callback) {
//    callback("Hello")
//}
//useCallback(print)

const callback = print
callback("Hello")

//Function VS Objects

print.hi = "test"
console.dir(print.hi)