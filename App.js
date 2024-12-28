/** @format */

const ele = React.createElement(
  'h1',
  { key: '1', style: { color: 'red', padding: '20px' } },
  'hello world 2'
)

const ele1 = React.createElement('h2', { key: '2' }, 'hellp para2')
const container = React.createElement('div', { className: 'container' }, [
  ele,
  ele1,
])
console.log(container)
const root = ReactDOM.createRoot(document.getElementById('raja'))
root.render(container)
