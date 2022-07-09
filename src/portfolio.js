const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://.github.io/cleanfolio',
  title: 'BT',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'bhavika thawani',
  role: 'Software Engineer',
  description:
    'I am Full stack developer i am studying in Gandhinagar Institute Of Technology.I have complete knowledge of NodeJS,ExpressJS,Data Structures,Java,Databases,Mongodb,SQL,Javascript,ReactJS.',
  resume:
    'https://drive.google.com/file/d/1vl2Vi1p_t6UzCxbBPr4_YhvCe0uFr291/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/bhavika-thawani-064517237/',
    github: 'https://github.com/BhavikaThawani',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Expense Tracker App',
    description:
      'Expense tracker app that tracks each expense of the individual,History funcationality is also present where user can see the history transcations and can remove it',
    stack: ['React'],
    sourceCode: 'https://github.com/BhavikaThawani/expenseapp/tree/master',
    livePreview: 'https://bhavikathawani.github.io/expenseapp/',
  },
  {
    name: 'Book Application',
    description:
      'Book Management System where user can add book to cart remove from cart update the cart page and admin can add new book to db and remove the book from db can see all the users present in the db.',
    stack: ['NodeJS', 'Express', 'Mongodb', 'React'],
    sourceCode: 'https://github.com/BhavikaThawani/bookapplication',
    livePreview: 'https://github.com/BhavikaThawani/bookapplication',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Java',
  'Bootstrap',
  'Git',
  'Node',
  'MERN',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tbhavika17@gmail.com',
}

export { header, about, projects, skills, contact }
