// 示例export的module

export var num = 1
export default 10

export function test() {
  const b = 'xvhbvv'
  return new Promise((resolve, reject) => {
    window.jsBridge = {
      test:() => {
        resolve(b)
      }
    }
  })
}