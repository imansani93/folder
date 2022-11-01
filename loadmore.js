$(function(){
        $('[datetime]:not(.timeago)').each(function() {
            var $this = $(this);
            var data_timeago = $this.attr('datetime');
            $this.addClass('timeago');
            if(!$this.attr('title')) {
                $this.attr('title', data_timeago);
            }
            $this.text(get_timeago(data_timeago));
        });
    });
    function get_timeago(t) {
        var e = new Date(t),
            a = 36e5,
            o = 24 * a,
            s = 30 * o,
            i = 365 * o,
            n = "yang lalu",
            l = new Date - e;
        return l &lt; 6e4 ? Math.round(l / 1e3) + " detik " + n : l &lt; a ? Math.round(l / 6e4) + " menit " + n : l &lt; o ? Math.round(l / a) + " jam " + n : l &lt; s ? Math.round(l / o) + " hari " + n : l &lt; i ? Math.round(l / s) + " bulan " + n : Math.round(l / i) + " tahun " + n
    }
$(document).ready(function() {
  $('span.close_icon_share, .fullClose').on('click', function() {
    $('.active').removeClass('active');
  });
  $('.share-job').on('click', function() {
    $(this).addClass('active');
  });
});
