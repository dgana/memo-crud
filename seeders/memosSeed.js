var format = require('date-format');

module.exports = [{
  title: 'Shopping List',
  memo: '2 Eggs, 3 Tomato, & 5 Onions',
  created_at: format('dd/MM/yy, hh:mm', new Date()),
  updated_at: format('dd/MM/yy, hh:mm', new Date())
},
{
  title: 'TODO List',
  memo: 'Coding, Eat, & Sleep',
  created_at: format('dd/MM/yy, hh:mm', new Date()),
  updated_at: format('dd/MM/yy, hh:mm', new Date())
},
{
  title: 'TODO List 2',
  memo: 'Eat, Coding',
  created_at: format('dd/MM/yy, hh:mm', new Date()),
  updated_at: format('dd/MM/yy, hh:mm', new Date())
},
{
  title: 'TODO List 3',
  memo: 'Coding',
  created_at: format('dd/MM/yy, hh:mm', new Date()),
  updated_at: format('dd/MM/yy, hh:mm', new Date())
}]
