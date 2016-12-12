# vcdtimer.js

A jQuery plugin for count down timer.

## Description

vcdtimer.js plugin is a simple countdown timer and can be from 1~99 minutes. This plugin is responsive.

* mobile

## Getting started

## Demo

* [https://okutani-t.github.io/vcdtimer.js/examples/basic.html](https://okutani-t.github.io/vcdtimer.js/examples/basic.html)

## Requirement

* [jQuery](http://jquery.com/)

## Usage(Example)

```html
<p>
  残り時間: <span id="remainingTime"></span>
</p>
<p>
  <span class="plus">+</span> <span class="minus">-</span> <span class="reset">reset</span> <span class="action">start</span>
</p>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="./vcdtimer.js"></script>
<script>
$(function() {
  $("#remainingTime").vcdTimer();
});
</script>
```

### options

```javascript
$("#remainingTime").vcdTimer({
  default_time: '03:00' // default time
});
```

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[http://okutani.net](http://okutani.net)
