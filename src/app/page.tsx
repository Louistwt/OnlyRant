import HomeScreen from '../components/home/home-screen/HomeScreen.jsx';
import AuthScreen from '../components/home/auth-screen/AuthScreen.jsx';

export default function Home() {
  const user = false;
  return (
    <main>
      {user ? <HomeScreen /> : <AuthScreen />}
    </main>
  )
}