//index.js
const members = [
  {id: 'user01', pw:'1111', name:'홍길동'},
  {id: 'user02', pw:'2222', name:'고길동'},
  {id: 'user03', pw:'3333', name:'상길동'},
]
let memebers_json = JSON.stringify(members);
// 회원정보.
localStorage.setItem('members', memebers_json);
