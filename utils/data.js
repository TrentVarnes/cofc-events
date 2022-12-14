import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456789112345'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456789112345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'CofC vs UNC Basketball',
      slug: 'cofc-unc-basketball',
      category: 'Basketball',
      image: '/images/basketball1.jpg',
      price: 12,
      brand: 'UNC',
      rating: 1,
      countInStock: 3,
      description: 'CofC Cougars vs UNC Tar Heels basketball game at TD arena',
      isFeatured: true,
      banner: '/images/app3.jpg',
    },
    {
      name: 'CofC vs VT Basketball',
      slug: 'cofc-vt-basketball',
      category: 'Basketball',
      image: '/images/basketball2.jpg',
      price: 12,
      brand: 'VT',
      rating: 1,
      countInStock: 3,
      description: 'CofC Cougars vs Virginia Tech basketball game at TD arena',
      isFeatured: true,
      banner: '/images/app7.jpg',
    },
    {
      name: 'CofC vs Clemson Basketball',
      slug: 'cofc-clemson-basketball',
      category: 'Basketball',
      image: '/images/basketball3.jpg',
      price: 12,
      brand: 'Clemson',
      rating: 1,
      countInStock: 5,
      description: 'CofC Cougars vs Clemson Tigers basketball game at TD arena',
      isFeatured: true,
      banner: '/images/app8.jpg',
    },
    {
      name: 'CofC vs USC Basketball',
      slug: 'cofc-usc-basketball',
      category: 'Basketball',
      image: '/images/basketball4.jpg',
      price: 4,
      brand: 'USC',
      rating: 1,
      countInStock: 4,
      description: 'CofC Cougars vs USC Gamecocks basketball game at TD arena',
    },
    {
      name: 'CofC vs USC Baseball',
      slug: 'cofc-usc-baseball',
      category: 'Baseball',
      image: '/images/baseball4.jpg',
      price: 12,
      brand: 'USC',
      rating: 1,
      countInStock: 5,
      description:
        'CofC Cougars vs USC Gamecocks baseball game at Patriots Point',
    },
    {
      name: 'CofC vs Clemson Baseball',
      slug: 'cofc-clemson-baseball',
      category: 'Baseball',
      image: '/images/baseball1.jpg',
      price: 12,
      brand: 'Clemson',
      rating: 1,
      countInStock: 2,
      description:
        'CofC Cougars vs Clemson Tigers baseball game at Patriots Point',
    },
    {
      name: 'CofC vs CSU Baseball',
      slug: 'cofc-csu-baseball',
      category: 'Baseball',
      image: '/images/baseball3.jpg',
      price: 12,
      brand: 'CSU',
      rating: 1,
      countInStock: 3,
      description:
        'CofC Cougars vs CSU Buccaneers baseball game at Patriots Point',
    },
    {
      name: 'CofC vs Lander Baseball',
      slug: 'cofc-lander-baseball',
      category: 'Baseball',
      image: '/images/baseball2.jpg',
      price: 12,
      brand: 'Lander',
      rating: 2,
      countInStock: 1,
      description:
        'CofC Cougars vs Lander Bear Cats baseball game at Patriots Point',
    },
  ],
};

export default data;
