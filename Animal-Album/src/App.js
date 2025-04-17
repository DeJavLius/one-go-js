import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/Api.js";

export default function App($app) {
  this.state = {
    currentTab: window.location.pathname.replace('/', '') || 'all',
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: '',
    onClick: async (name) => {
      history.pushState(null, `${name} 사진`, name);
      this.updateContent();
    },
  });

  const content = new Content({
    $app,
    initialState: [],
  });

  this.setState = (nState) => {
    this.state = nState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  this.updateContent = async (tabName) => {
    try {
      const currentTab = tabName === 'all' ? '' : tabName;
      const photos = await request(currentTab);
      this.setState({
        ...this.state,
        currentTab: tabName,
        photos: photos,
      })
    } catch (error) {
      console.log(error);
    }
  }

  window.addEventListener('popstate', async () => {
    this.updateContent(window.location.pathname.replace('/', '') || 'all');
  });

  // 웹 페이지 처음 렌더링 시 실행
  // 새로고침할 때에도 동작
  const init = async () => {
    this.updateContent(this.state.currentTab);
  };

  init();
}