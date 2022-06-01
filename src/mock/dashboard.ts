import { responseData } from './response'
export default [
  {
    url: '/api/collapse/list',
    method: 'get',
    response: () => {
      return responseData({
        data: [
          {
            title: '陈钰琪',
            weibo: {
              name: '陈钰琪Yukee',
              link: 'https://weibo.com/u/5829543885'
            },
            info: '陈钰琪，1992年7月29日出生于四川省成都市，中国内地影视女演员，毕业于四川大学锦城学院艺术系表演专业。2015年，与唐嫣结缘并成为唐嫣工作室首位签约艺人。2016年，因在古装剧《锦绣未央》中饰演娇俏可爱的九公主拓跋迪而崭露头角。2017年2月，凭借《锦绣未央》获得中国电视剧品质盛典“年度新锐剧星”奖；同年，出演都市仙侠网络剧《私立蜀山学园》。2018年，主演古装剧《香蜜沉沉烬如霜》。2019年，主演古装武侠剧《倚天屠龙记》 [6]  ',
            extra: '粉丝：1073万',
            avatar:
              'https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/006mwaFnly8gf9cn3n104j30u00u0gnb.jpg?KID=imgbed,tva&Expires=1653909328&ssig=QWosgJBFVp'
          },
          {
            title: '沈月',
            weibo: {
              name: '沈月',
              link: 'https://weibo.com/u/5331040243'
            },
            info: '沈月，1997年2月27日出生于湖南省邵阳市武冈，中国内地女演员，毕业于湖南师范大学新闻与传播学院。2016年，沈月因参演科幻古装网剧《颤抖吧，阿部！》而进入演艺圈。2017年，出演青春校园网剧《致我们单纯的小美好》中的陈小希一角；同年，出演由柴智屏监制的青春言情偶像剧《流星花园》。2018年，与陈都灵搭档主演情感剧《七月与安生》；同年，获得百度娱乐年度人物奖。',
            extra: '粉丝：1248万',
            avatar:
              'https://tvax4.sinaimg.cn/crop.0.0.512.512.180/005OMv63ly8gunhqnfr2ej30e80e874l.jpg?KID=imgbed,tva&Expires=1653982969&ssig=RuccryRuAr'
          },
          {
            title: '赖美云',
            weibo: {
              name: '赖美云',
              link: 'https://weibo.com/u/5541182601'
            },
            info: '赖美云，1998年7月7日出生于广东省深圳市，中国流行乐女歌手。2015年8月10日，赖美云随SING发行首支单曲《青春的告白》，正式出道；2016年1月9日，随组合出席第一届繁星年度颁奖盛典，并获得年度先锋新人组合奖；2017年8月，随组合出演真人CG科幻青春偶像剧《快乐酷宝3》；9月26日，随组合推出EDM曲风的单曲《寄明月》；29日，随组合受邀出席第一届亚洲音乐盛典，获得年度人气飙升女团奖。',
            extra: '粉丝：1263万',
            avatar:
              'https://tvax1.sinaimg.cn/crop.0.0.1080.1080.180/00630eIVly8gyw2kjmsawj30u00u0n1c.jpg?KID=imgbed,tva&Expires=1653982913&ssig=3ejvJisWbA'
          }
        ]
      })
    }
  },
  {
    url: '/api/carousel/list/1',
    method: 'get',
    response: () => {
      return responseData({
        data: [
          'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
          'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
          'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
          'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg'
        ]
      })
    }
  },
  {
    url: '/api/charts/data',
    method: 'get',
    response: () => {
      return responseData({
        data: [
          ['2019-10-10', 200],
          ['2019-10-11', 560],
          ['2019-10-12', 750],
          ['2019-10-13', 580],
          ['2019-10-14', 250],
          ['2019-10-15', 300],
          ['2019-10-16', 450],
          ['2019-10-17', 300],
          ['2019-10-18', 100]
        ]
      })
    }
  }
]
