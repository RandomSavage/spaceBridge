import MainLayout from '../components/layouts/MainLayout'
import SideNav from '../components/UI/SideNav/SideNav'
import Landing from '../components/UI/Landing/Landing'
import Content from '../components/UI/Content/Content'
import PinkCards from '../components/UI/PinkCards/PinkCards'
import Contact from '../components/UI/Contact/Contact'

const HomeView = () => {
  return (
    <MainLayout>
    <div className="landing-full">
      <SideNav />
      <div className="right-side">
        <Landing />
        <Content />
        <PinkCards />
        <Contact />
      </div>
    </div>
  </MainLayout>
  )
}

export default HomeView
