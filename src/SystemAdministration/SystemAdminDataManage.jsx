import './SystemAdminDataManage.css'
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RightSide/RightSide';
import Sidebar from '../components/Sidebar/Sidebar';

function SystemAdminDataManage() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default SystemAdminDataManage;