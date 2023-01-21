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
- swipeDown(up)
- sleep(up)
- wakeUp(up)
- setBrightness(ip, [1-100])
