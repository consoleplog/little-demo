# 远程获取数据

- 1.instal **axios** --save
 - import axios from 'axios'

- 2.bulid a **function** like this
```js
function getMd(add){
  let address = `https://raw.githubusercontent.com/consoleplog/datademo/master/blog/${add}.md`
  return axios.get(address)
        .then((res) => (
          { getMd:res.data }
        ))
        .catch(function (error) {
          alert(error);
        });
}
export { getMd }
```

# 实现调用
- 1.import { getMd } from './utils/helper'
- 2.import marked from 'marked';
