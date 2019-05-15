const version = document.querySelector('#xfw-msn').getAttribute('version')
const href = window.location.href;
console.log(`访问服务器${window.location.href}了版本号为 ${version}`);
if (version === '13.9.0') {
  console.log('版本正确');
} else {
  console.log('版本错误');
  if (!href.includes('t=')) {
    console.log('执行一次')
    window.applicationCache.update();
    window.location.href = `${href}&t=${new Date().getTime()}`;
  }
}
