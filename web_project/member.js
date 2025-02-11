//member.js
//localStorage에서 members 정보.
const members = [];
members = JSON.parse(localStorage.getItem('members'));
console.log(members);