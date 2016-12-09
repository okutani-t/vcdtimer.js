# vcdtimer.js

カウントダウンを行うタイマーのプラグイン。

1～99分までカウントすることができる。

## HOW TO USE

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

## options

```javascript
$("#remainingTime").vcdTimer({
  default_time: '03:00' // default time
});
```

author: okutani
