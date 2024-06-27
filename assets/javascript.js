
function detail(id){
  location.href = `detail.html?id=${id}`;
}
function url(){
  location.href = ('https://www.hay88.one/?inviteCode=7950760');
}
$(document).ready(function(){
  const FunVisible = () => {
    if (window.pageYOffset > 250) {
      $("header").addClass("is-sticky");
    } else {
      $("header").removeClass("is-sticky");
    }
  };
  window.addEventListener("scroll", FunVisible);
  const swiper = new Swiper('#swiper1', {
      loop: true,
      spaceBetween: 20,
      pagination: {
        el: '#swiper-pagination1',
      },
      // breakpoints: {
      //   640: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,
      //   },
      // },

      navigation: {
        nextEl: '#swiper-button-next1',
        prevEl: '#swiper-button-prev1',
      },
      autoplay: {
        delay: 3000,
      }
    
    });


    $("blockquote p strong").closest('blockquote').addClass("relative");



  const header = `
    <div class="bg-[#ffffffe6] flex items-center max-w-screen-xl mx-auto">
        <div class="menu-icon md:hidden duration-500">
          <label class="hamburger">
            <svg viewBox="0 0 32 32">
              <path
                class="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
        <div class="py-5 mx-auto">
        <a href="./index.html">
          <img src="./assets/images/logo.png" alt=""></a>
        </div>
      </div>
      <div class="bg-[#2273D6] max-w-screen-xl mx-auto">
        <div class="container max-w-screen-xl mx-auto">
          <div class="flex justify-center  md:justify-between items-center">
            <ul
              class="items-center py-8 *:text-white font-semibold uppercase flex-wrap *:leading-10 *:px-3 hidden md:flex *:transition-all text-xl *:duration-500">
              <li class="relative"><a href="./index.html" class="tittle_navbar">TRANG CHỦ</a></li>
              <li class="relative"><a href="./gioi-thieu-vin777.html" class="tittle_navbar">GIỚI THIỆU</a></li>
              <li class="relative"><a href="./dang-ky-vin777.html" class="tittle_navbar">ĐĂNG KÝ</a></li>
              <li class="relative"><a href="./casino-online-vin777.html" class="tittle_navbar">CASINO</a></li>
              <li class="relative"><a href="./the-thao-vin777.html" class="tittle_navbar">THỂ THAO</a></li>
              <li class="relative"><a href="./xo-so-vin777.html" class="tittle_navbar">XỔ SỐ</a></li>
              <li class="relative"><a href="./ban-ca-vin777.html" class="tittle_navbar">BẮN CÁ</a></li>
              <li class="relative"><a href="./da-ga-vin777.html" class="tittle_navbar">ĐÁ GÀ</a></li>
              <li class="relative"><a href="./blog.html" class="tittle_navbar">BLOG</a></li>
              <li class="relative"><a href="./lien-he.html" class="tittle_navbar">LIÊN HỆ
                </a></li>
            </ul>

            <div class="flex items-center gap-4 h-32 md:h-0">
              <button
                class="btn1 py-3 px-5 bg-[#106ADE] rounded-2xl text-white font-bold text-xl hover:mb-4 transition-all">
                ĐĂNG KÝ
              </button>
              <button
                class="btn2 py-3 px-5 bg-[#F47244] rounded-2xl text-white font-bold text-xl hover:mb-4 transition-all">
                ĐĂNG NHẬP
              </button>
            </div>
          </div>
        </div>
      </div>

  `;
  $("#header").html(header);
  const side_bar = `  <div  class="side-menu-mobile fixed top-0 -translate-x-full z-[1000] overflow-y-hidden transition-transform duration-500 ">
    <ul class="w-[60vw] bg-[#f8f8f8] h-screen">
      <li class="game-bai-doi-thuong.html">
        <a href="index.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">TRANG CHỦ</span>
        </a>
      </li>
      <li class="">
        <a href="huong-dan-five888.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">GIỚI THIỆU</span>
        </a>
      </li>
      
      <li>
        <a href="./dang-ky-vin777.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">ĐĂNG KÝ</span>
        </a>
      </li>
      <li class="">
        <a href="./casino-online-vin777.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">CASINO</span>
        </a>
      </li>
      <li class="">
        <a href="./the-thao-vin777.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">THỂ THAO</span>
        </a>
      </li>
      <li class="./xo-so-vin777.html">
        <a href="tin tuc.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">XỔ SỐ</span>
        </a>
      </li>
      <li class="">
        <a href="./lo-de-online-five888.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">LÔ ĐỀ</span>
        </a>
      </li>
      <li class="">
        <a href="./ban-ca-vin777.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">BẮN CÁ</span>
        </a>
      </li>
      <li class="">
        <a href="./da-ga-vin777.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">ĐÁ GÀ</span>
        </a>
      </li>
      <li class="">
        <a href="./blog.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">BLOG</span>
        </a>
      </li>
      <li class="">
        <a href="./lien-he.html"
          class="flex items-center px-5 py-6 font-medium text-2xl text-gray-500 rounded-lg hover:bg-gray-200">
          <span class="ml-3">LIÊN HỆ</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="bg-[#0000006b] w-screen h-screen absolute top-0 z-30 hidden" id="background_sidebar">
    <div class="float-right mt-14 mr-8">
      <button class="btnclose">
        <span class="X"></span>
        <span class="Y"></span>
        <div class="close">Close</div>
      </button>
    </div>
  </div>`;
    $("#side_bar").html(side_bar);

    const footer = `
        
    </div> <div class="bg-[#54A3FF]">
        <div class="container max-w-screen-xl mx-auto ">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-2xl font-bold"> VỀ CHÚNG TÔI </h1>
              <hr class="border-gray-500 w-[3rem] border-t-[3px]">
              <img class="max-w-80" src="./assets/images/logo.png" alt="">
              <p class="text-white"><span class="text-red-600 font-bold">VIN7777 BIZ</span> là một trang web cá cược
                online nổi tiếng với tỷ lệ cao và cam kết bảo mật thông tin cá nhân. Điều đặc biệt là dịch vụ chăm sóc
                khách hàng tận tình và giao diện thân thiện, tạo điều kiện thuận lợi cho người chơi tham gia trải nghiệm
                một cách dễ dàng và thoải mái.</p>
            </div>

            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-2xl font-bold">VỀ CHÚNG TÔI</h1>
              <hr class="border-gray-500 w-[3rem] border-t-[3px]">
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a
                  href="./dang-ky-vin777.html">Đăng ký </a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a
                  href="./dang-nhap-vin777.html">Đăng nhập </a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a
                  href="./nap-tien-vin777.html">Nạp Tiền </a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a
                  href="./rut-tien-vin777.html">Rút tiền</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a
                  href="./tai-app-vin777.html">Tải app</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a
                  href="./khuyen-mai-vin777.html">Khuyến Mãi</a></p>
            </div>

            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-2xl font-bold">CHÍNH SÁCH ƯU ĐÃI</h1>
              <hr class="border-gray-500 w-[3rem] border-t-[3px]">
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a
                  href="./casino-online-vin777.html">CASINO</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a href="./xo-so-vin777.html">XỔ
                  SỐ</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a
                  href="./the-thao-vin777.html">THỂ THAO </a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a href="./da-ga-vin777.html">ĐÁ
                  GÀ</a></p>
              <p class="text-white hover:text-[rgb(255,_136,_0)] duration-300 font-semibold"><a href="./ban-ca-vin777.html">BẮN
                  CÁ</a></p>

            </div>
            <div class="py-5 lg:py-10 *:pb-5">
              <h1 class="text-white text-2xl font-bold"> LIÊN HỆ </h1>
              <hr class="border-gray-500 w-[3rem] border-t-[3px]">
              <p class="text-white">Tên Doanh Nghiệp: <span class="text-red-600 font-bold">VIN7777</span> & <span
                  class="text-red-600 font-bold">VIN7777 BIZ</span></p>
              <p class="text-white">Địa chỉ: 76 P.Trần Thái Tông, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam
              <p>
              <p class="text-white">Post Code: 100000</p>
              <p class="text-white">Website: https://vin7777.biz/</p>
              <p class="text-white">#vin7777 #vin7777 #vin7777biz</p>
            </div>
          </div>

        </div>
      </div>
      <div class="container max-w-screen-xl  py-5 lg:py-7">
        <p class=" text-white opacity-60 text-center">Copyright 2024 © vin7777.biz</p>
      </div>
    `;

  $("#footer").html(footer);
  const backtotop = `<button class="Btn-backtotop1 ">
          <svg class="Btn-backtotop1arrow h-7 w-7" viewBox="0 0 512 512">
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            ></path>
          </svg>
          <p class="Btn-backtotop1text">Back to Top</p>
  </button>`;
  $("#backtotop").html(backtotop);
  var btn = $(".Btn-backtotop1");
  $(window).scroll(function () {
      if ($(window).scrollTop() > 250) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
  });
  btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "600");
  }); 
  const link_recent_post = `
     <p onclick="detail(15)" class=" hover:text-gray-500">I9bet vang danh châu Á nhờ vào chất lượng đẳng cấp</p>
                                <p class=""><a href="./nap-tien-vin777.html" class="hover:text-gray-500">Hướng Dẫn Nạp Tiền Vin7777 Nhanh Chóng, Đơn Giản Hiện Nay</a></p>
                                <p onclick="detail(17)" class=" hover:text-gray-500">Bật mí cách truy cập link Typhu88 nạp tiền cực dễ dàng
                                </p>
                                <p onclick="detail(5)" class=" hover:text-gray-500">Cẩm nang kinh nghiệm đặt kèo bóng đá giành chắc phần
                                    thắng trong tay</p>
                                <p onclick="detail(13)" class=" hover:text-gray-500">Casino J88 – Thiên đường giải trí đẳng cấp nhất làng cá cược</p>
        `;
  $("#link_recent_post").html(link_recent_post);


  // $('.header2  ul.items-center > li').each(function() {
  //   a = $(this).find(".tittle_navbar").text();
    
  //   if(active == a){
      
  //     $(this).addClass('B');
  //   }
  // });

  // $("#content_right .link").each(function(){
  //   c = $(this).find("#menu_link").text();
  //   if(active == c){
  //     $(this).find("#menu_link").addClass("text-gray-900");
      
  //   }
    
    
  // });


  $(".menu-icon").on("click", function () {
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
        $("#background_sidebar").addClass("hidden");
    }
    else{
        $(this).addClass("active");
        $(".side-menu-mobile").removeClass("-translate-x-full");
        $("#background_sidebar").removeClass("hidden");
    }
  });
  $(document).on("click", function (event) {
      if (!$(event.target).closest(".side-menu-mobile").length && !$(event.target).closest(".menu-icon").length ) {
        $(".menu-icon").removeClass("active");
        $(".side-menu-mobile").addClass("-translate-x-full");
        $("#background_sidebar").addClass("hidden");
      }
    });
    $(".icon-dropdown-side-menu-mobile").on("click", function(){
        $(this).toggleClass("rotate-180");
        $(this).closest("li").find('ul').toggleClass('active');
    })

    $('#showloading').delay(500).queue(function(next) {
      $(this).addClass('hidden');
      next();
    });

});

