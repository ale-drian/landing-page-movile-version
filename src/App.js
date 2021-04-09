import './index.css';
import Header from './components/Header';
import Content from './components/Content';

const categories = [
  {
      name: "Breakfast",
      image: "https://www.aspicyperspective.com/wp-content/uploads/2011/07/the-breakfast-salad-5-256x256.jpg"
  },
  {
      name: "Lunch",
      image: "https://pbs.twimg.com/profile_images/675448654136664064/gTzYU6dL_400x400.jpg"
  },
  {
      name: "Dinner",
      image: "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/2220581513408283438/a88ef44bc6be08c930abb7f7e2896e3a_large.png&width=256&type=webp&quality=40"
  }
]

const restaurants = [
  {
      name: "Session 24",
      rating: 4,
      location: "22/4 Alone Street Mopal",
      cost_per_person: 5.0,
      image: "https://images.rappi.pe/products/9776dffe-c5bd-4033-ab11-ec0d3d168d9b-1603929950419.jpeg?d=128x90"
  },
  {
      name: "New Food Way",
      rating: 5,
      location: "28 Lemper Street Mopal",
      cost_per_person: 4.5,
      image: "https://www.zenrooms.com/blog/wp-content/uploads/2020/03/Nasi-Goreng-256x256.jpg"
  },
  {
      name: "Total Food 18",
      rating: 4,
      location: "18 Bisquit Street Mopal",
      cost_per_person: 8.0,
      image: "https://images.rappi.pe/products/e4dea758-0792-4ef9-bab4-a732f8a74839-1606767791772.jpeg?d=128x90"
  },
  {
    name: "Session 24 V2.0",
    rating: 3.2,
    location: "22/4 Alone Street Mopal",
    cost_per_person: 5.0,
    image: "https://images.rappi.pe/products/9776dffe-c5bd-4033-ab11-ec0d3d168d9b-1603929950419.jpeg?d=128x90"
  }
]

function App() {
  return (
    <div className="container app p-8">
      <Header/>
      <Content categories={categories} restaurants={restaurants}/>
    </div>
  );
}

export default App;
