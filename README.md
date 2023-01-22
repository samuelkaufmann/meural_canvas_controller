# Meural Canvas Controller #

## Example ##

```
const mcs = require('meural_canvas_controller');
const ip = 'x.x.x.x';

async function myAsyncFunction() {
  let result = await mcs.swipeRight(ip)
}
myAsyncFunction();
```

## Functions ##
- swipeRight(ip)
- swipeLeft(ip)
- swipeUp(ip)
- swipeDown(ip)
- sleep(ip)
- wakeUp(ip)
- setBrightness(ip, [1-100])
