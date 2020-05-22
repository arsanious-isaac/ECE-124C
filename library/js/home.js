/*global $*/
/*global console*/
/*eslint-env browser*/
/* eslint-disable no-mixed-spaces-and-tabs */
$(document).ready(function () {
    "use strict";
    $(".text").typed({
        strings: ["إلى محبي القراءة"],
        typeSpeed: 0,
		startDelay: "1000",
		showCursor: false
	});
	$(".text2").typed({
        strings: ["إن المكتبات هي قلب المكتبة الذي تقدم من خلاله مساحة لطالبي المعرفة. فبالإضافة إلى المكتبة الرئيسية، تحتوي مكتبة الإسكندرية على ست مكتبات متخصصة وهي: مكتبة الفنون والوسائط المتعددة، ومكتبة طه حسين لضعاف البصر، ومكتبة الطفل، ومكتبة النشء قسم التبادل والأرشيف، قسم الكتب النادرة. كما أُنشئت المكتبة الفرنكوفونية نتيجة للإهداء الضخم الذي حصلت مكتبة الإسكندرية عليه من مكتبة فرنسا الوطنية."],
        typeSpeed: -30,
		startDelay: "2500",
		showCursor: false
	});
    /*start box effects*/
	$(".face3 i").click(function () {
        $(".face3 ul").toggleClass("op");
        $(".face3 i").toggleClass("fa-arrow-circle-up fa-times");
	});
	/*end box effects*/
    /*start navbar effects*/
	$(".navbar ul").animate({
		marginRight: '50px',
		opacity: '.5'
	}, 'slow').animate({
		marginRight: '0',
		opacity: '1'
	}, 'fast');
	
	$(".navbar img").animate({
		marginLeft: '50px',
		opacity: '.5'
	}, 'slow').animate({
		marginLeft: '0',
		opacity: '1'
	}, 'fast');
	/*end navbar effects*/
	/*start color option*/
	$(".alwan i").click(function () {
		$(".alwan").toggleClass("open");
	});
	$('.alwan li').click(function () {
		var col = $(this).css("backgroundColor");
		$("h1, p , i, label").css("color", col);
		$('.alwan li').removeClass("border");
		$(this).addClass("border");
	});
	/*end color option*/
	/*start scroll to top*/
	$(window).scroll(function () {
		if ($(this).scrollTop() < 400) {
			$(".sctop").css({transform: "scaley(0)"});
		} else {
			$(".sctop").css({transform: "scaley(1)"});
		}
	});
	$(".sctop").click(function () {
		
		$("html, body").animate({
			scrollTop: 0
		});
	});
	/*end scroll to top*/
	$(".navbar li").click(function () {
		$("html, body").animate({
			scrollTop: $("#" + $(this).data('value'))
				.position().top - 100
		}, 1000);
    });
	$(window).scroll(function () {
		var sc = $(window).scrollTop();
        $('div').each(function () {
            if (sc > $(this).offset().top - $(this).height() * 1.5) {
                $(this).animate({opacity: '1'}, 800);
                $(".navbar li[data-value='" + $(this).attr('id') + "']").addClass("active").siblings().removeClass("active");
            }
            if (sc < $('.idea').height() * 0.5) {
                $(".navbar li").eq(0).addClass("active").siblings().removeClass("active");
            }
        });
        if (sc > 200) {
			$(".navbar").css("backgroundColor", "rgba(0, 0, 0, 0.8)");
		} else {
			$(".navbar").css("backgroundColor", "rgba(0, 0, 0, 0)");
		}
	});
});

	/*start box arrow effect*/






