
export const getTodos = (filter) => {
  return fetch(`https://65b8c458b71048505a896622.mockapi.io/api/v1/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Test-filter': JSON.stringify(filter)
    }
  })
}