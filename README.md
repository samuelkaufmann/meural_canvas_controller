# Meural Canvas Controller #

## Example ##

```
const mcs = require('meural_canvas_controller');
const ip = 'x.x.x.x';

async function myAsyncFunction() {
  let result = await mcs.swipe(ip, 'right');
}
myAsyncFunction();
```

## Functions ##

| Function | Parameter 1 | Parameter 2 |
| -------- | ----------- | ----------- |
| swipe(param1, param2) | ip (variable) | direction (string) right, left, up, down |
| sleep(param1) | ip (variable) | N/A |
| wakeUp(param1)  | ip (variable) | N/A |
| setBrightness(param1, param2) | ip (variable) | brightness (int) 1-100 |
