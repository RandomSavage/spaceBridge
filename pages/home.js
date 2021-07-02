import MainLayout from '../components/layouts/MainLayout'
import SideNav from '../components/UI/SideNav/SideNav'
import Landing from '../components/UI/Landing/Landing'
import Content from '../components/UI/Content/Content'

const HomeView = () => {
  return (
    <MainLayout>
    <div className="landing-full">
      <SideNav />
      {/* <Landing /> */}
      <Content />
    </div>
  </MainLayout>
  )
}

export default HomeView
