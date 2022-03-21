export const fakeRequest = (callback: Function, timeout: number): Promise<() => {}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback())
    }, timeout)
  })
}
