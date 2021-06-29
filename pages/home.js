import MainLayout from '../components/layouts/MainLayout'
import SideNav from '../components/UI/SideNav/SideNav'
import Landing from '../components/UI/Landing/Landing'


const HomeView = () => {
  return (
    <MainLayout>
    <div className="landing-full">
      <SideNav />
      <Landing />
    </div>
  </MainLayout>
  )
}

export default HomeView
