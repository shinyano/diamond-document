import Vue from 'vue'
import VueRouter from 'vue-router'
import learn from '../views/learn'
import Team from '../views/Team'
import Teamroom from '../views/Teamroom'
import PublishDocument from "../views/PublishDocument";
import SetUp from "../views/SetUp";
import ViewDocument from "../views/ViewDocument";
import TeamMessage from "../views/TeamMessage";
import App from "../App";
import Home from "../views/Home";
import Docu from "../views/Docu";
import Mydesk from "../views/Mydesk";
import Teamdesk from "../views/Teamdesk";
import loginpage from "../views/loginpage";
import CreateTeam from "../views/CreateTeam";
import JoinedTeam from "../views/JoinedTeam";
import SearchTeam from "../views/SearchTeam";
import SkimTeam from "../views/SkimTeam";
import Messages from "../views/Messages";
import Notification from  "../views/Notification";
import CommentMes from "../views/CommentMes";
// import collect from "../views/collect";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '个人工作台',
    component: loginpage,

  },
  {
    path: '/teamroom',
    name: '个人工作台',
    component: Teamroom,
    redirect:'/mydesk',
    children:[
      {
        path: '/mydesk',
        name: 'xxxx',
        component: Mydesk
      },
    ]
  },
  {
    path: '/navigation',
    name: '文档',
    component: Teamroom,
    children:[
      {
        path: '/Docu',
        name: 'xx文档',
        component: Docu
      },
    ]
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    redirect:'/joinedTeam',
    children: [
      {
        path: '/joinedTeam',
        name: '加入的团队',
        component: JoinedTeam
      },
      {
        path: '/searchTeam',
        name: '搜索团队',
        component: SearchTeam
      },
      {
        path: '/createTeam',
        name: '新建团队',
        component: CreateTeam
      },
      {
        path: '/skimTeam',
        name: '浏览团队',
        component: SkimTeam
      }
    ]
  },
  {
    path: '/teamdesk',
    name: '团队操作台',
    component: Teamdesk,
    redirect:'/teamMessage',
    children: [{
      path: '/teamMessage',
      name: '团队信息',
      component: TeamMessage
    },
      {
        path: '/viewDocument',
        name: '团队文档',
        component: ViewDocument
      },

      {
        path: '/publishDocument',
        name: '发布文档',
        component: PublishDocument
      },
      {
        path: '/setUp',
        name: '管理信息',
        component: SetUp
      },]
  },
  {
    path: '/notification',
    name: '消息通知',
    component: Teamroom,
    //redirect:'/applyMes',
    children: [
      {
        path: '/messages',
        name: '团队消息',
        component: Messages
      },
      {
        path: '/commentMes',
        name: '评论消息',
        component: CommentMes
      },
    ]
  },
  // {
  //   path: '/collect',
  //   name: '发布文档',
  //   component: collect
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
