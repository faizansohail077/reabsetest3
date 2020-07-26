const root = (req, res) => {
  res.send('Welcome to express')
}

const getUser = (req, res) => {
  const user = {
    name: 'Umair ahmed',
    age: 22,
    profession: 'Software Engineer | Fullstack Dev'
  }
  res.json(user)
}

module.exports = {
  root,
  getUser
}
