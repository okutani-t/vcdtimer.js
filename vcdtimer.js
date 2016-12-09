(function( $ ) {
  $.fn.vcdTimer = function(options) {
    // オブジェクトのid名取得
    var vcdt_id = '#' + $(this).attr("id");

    // プラス、マイナス、リセット、スタート（ストップ）の定義
    var operations = ['.plus', '.minus', '.reset', '.action'];

    // スタート・ストップフラグ
    var repeat_flag = true;

    // タイマーの繰り返しid
    var timer_id;

    // 引数の設定
    var defaults = {
      default_time: '01:00'
    };
    var setting = $.extend(defaults, options);

    // タイマーの初期値セット
    $(vcdt_id).text(setting.default_time);

    // スタートボタン
    $('.action').on('click', function() {
      if ($(this).hasClass('disabled') ) { return false; }

      if (repeat_flag) { // スタート
        $(this).text('stop');
        repeat_flag = false;

        // 他のボタンをクリックさせないようにする
        $.each(operations, function(index, op) {
          if(op === '.action'){ return false; }
          $(op).addClass('disabled');
        });

        // タイマーの時刻をセット
        var target = Date.now() + getTargetSec() * 1000;
        vCountDown(target);
      } else { // ストップ
        $(this).text('start');

        // 他のボタンを使えるようにする
        $.each(operations, function(index, op) {
          $(op).removeClass('disabled');
        });

        repeat_flag = true;
        clearTimeout(timer_id);
      }
    });

    // プラスボタン
    $('.plus').on('click', function() {
      if ($(this).hasClass('disabled') ) { return false; }

      var strTime = $(vcdt_id).text().split(':');
      // 99以上だったら処理しない
      if (Number(strTime[0]) < 99) {
        $(vcdt_id).text(padZero(Number(strTime[0]) + 1) + ':' + strTime[1]);
      }
    });

    // マイナスボタン
    $('.minus').on('click', function() {
      if ($(this).hasClass('disabled') ) { return false; }

      var strTime = $(vcdt_id).text().split(':');
      // 0以下だったら処理しない
      if (Number(strTime[0]) > 0) {
        $(vcdt_id).text(padZero(Number(strTime[0]) - 1) + ':' + strTime[1]);
      }
    });

    // リセットボタン
    $('.reset').on('click', function() {
      if ($(this).hasClass('disabled') ) { return false; }

      // デフォルトの時刻をセット
      $(vcdt_id).text(setting.default_time);
      // start文字にする
      $('.action').text('start');

      repeat_flag = true;

      $.each(operations, function(index, op) {
        $(op).removeClass('disabled');
      });
    });

    /**
     * functions
     */
    /**
     * @param int target 設定したタイマーの時刻
     */
    function vCountDown(target) {
      // 現在時刻とターゲットの時刻の差を算出
      var now = Date.now();

      var diff = (target - now) / 1000;
      // 残り時間を計算
      var m = Math.floor(diff / 60);
      diff = diff - 60 * m;
      var s = Math.floor(diff);

      // 表示
      $(vcdt_id).text(padZero(m) + ':' + padZero(s));

      // 繰り返し処理
      timer_id = setTimeout(function() {
        vCountDown(target);
      }, 200);

      // タイマーが0だったら停止
      if (m < 1 && s < 1) {
        $('.reset').removeClass('disabled');
        $('.action').addClass('disabled');
        $(vcdt_id).text('00:00');
        clearTimeout(timer_id);
      }

    }

    // 0で埋める
    function padZero(n) {
      return (n < 10) ? '0' + n : n;
    }

    // タイマーの時刻を取得し秒数で返す
    function getTargetSec() {
      var strTime = $(vcdt_id).text().split(':');
      var sec = Number(strTime[0]) * 60 + Number(strTime[1]);

      return sec;
    }

  };
})( jQuery );
