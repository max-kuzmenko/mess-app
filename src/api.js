
export const getTodos = (params) => {
  return fetch(`https://65b8c458b71048505a896622.mockapi.io/api/v1/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Test-filter': JSON.stringify(params)
    }
  })
}

export const updateUserTodos = (userId, topicId, todos) => {
  return fetch(`https://65b8c458b71048505a896622.mockapi.io/api/v1/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, topicId, todos })
  })
}