!(function (S, d, M) {
  "use strict";
  var j = S(document),
    z = S(d),
    q = S("body"),
    p = [],
    u = new MobileDetect(d.navigator.userAgent),
    f = f || {};
  (TweenMax.defaultEase = Quart.easeOut),
    (TimelineMax.defaultEase = Quart.easeOut),
    (d.lazySizesConfig = d.lazySizesConfig || {}),
    (d.lazySizesConfig.expand = 250),
    (d.lazySizesConfig.loadMode = 1),
    (f = {
      toggleHover: !1,
      MainCart: !1,
      init: function () {
        var e = this;
        S("#wrapper");
        function t() {
          for (var t in e)
            !e.hasOwnProperty(t) ||
              (void 0 !== (t = e[t]).selector &&
                void 0 !== t.init &&
                0 < S(t.selector).length &&
                t.init());
        }
        q.hasClass("preloader_on") && !q.hasClass("elementor-editor-active")
          ? Pace.on("done", function () {
              TweenMax.to(S(".pace"), 1, {
                autoAlpha: 0,
                onComplete: function () {
                  S(".pace").css("display", "none");
                },
              }),
                t();
            })
          : t();
      },
      reverseAnimations: {
        start: function (t) {
          for (var e = M.difference(p, t), o = 0; o < e.length; ++o)
            0 < e[o].progress() &&
              (e[o].timeScale(1.6).reverse(),
              S(".quick_cart").data("toggled", !1),
              S(".mobile-toggle").data("toggled", !1),
              S(".quick_search").data("toggled", !1));
        },
      },
      menu: {
        selector: "#mobile-menu",
        init: function () {
          var t = S("#mobile-menu"),
            e = t.find(
              ".mobile-menu>li,.menu-footer p, .select-wrapper, .social-links a"
            ),
            o = S(".mobile-menu a", t),
            n = S(".mobile-toggle"),
            i = n.find("span"),
            a = t.find(".spacer"),
            r = t.find(".menu-container"),
            s = new TimelineLite({
              paused: !0,
              onStart: function () {
                t.css("display", "block");
              },
              onComplete: function () {
                f.customScroll.init();
              },
              onReverseComplete: function () {
                t.css("display", "none");
              },
            }),
            l = new TimelineLite({ paused: !0 }),
            c = q.hasClass("mobile_menu_position_left") ? -1 : 1,
            d = t.hasClass("style2"),
            h = S(".panel-close");
          p.push(s),
            p.push(l),
            s
              .to(t, 0.4, { autoAlpha: 1 })
              .to(r, 0.4, { x: 0 })
              .staggerFrom(e, 0.3, { x: 50 * c, opacity: 0 }, 0.1),
            d
              ? (l
                  .to(i, 0.5, { x: "0%" })
                  .to(i.eq(1), 0.1, { autoAlpha: 0 }, "start")
                  .to(i.eq(0), 0.2, { y: 0, rotationZ: "46%" }, "start")
                  .to(i.eq(2), 0.2, { y: 1, rotationZ: "-46%" }, "start"),
                n.on("click", function () {
                  return (
                    n.data("toggled")
                      ? (l.timeScale(2).reverse(),
                        s.timeScale(2).reverse(),
                        n.data("toggled", !1))
                      : (l.timeScale(1).restart(),
                        s.timeScale(1).restart(),
                        n.data("toggled", !0)),
                    !1
                  );
                }))
              : (l
                  .to(i, 0.5, { x: "0%" })
                  .to(n.find("div"), 0.5, { rotation: 90 })
                  .to(i.eq(0), 0.2, { y: "-2" })
                  .to(i.eq(2), 0.2, { y: "2" }, "-=0.2"),
                n
                  .hover(
                    function () {
                      n.data("toggled") || l.restart();
                    },
                    function () {
                      n.data("toggled") || l.reverse();
                    }
                  )
                  .on("click", function () {
                    return (
                      n.data("toggled")
                        ? (s.timeScale(1.6).reverse(), n.data("toggled", !1))
                        : (f.reverseAnimations.start([s, l]),
                          s.timeScale(1).restart(),
                          n.data("toggled", !0)),
                      !1
                    );
                  })),
            o.on("click", function (t) {
              var e = S(this).attr("href"),
                o = S("#wpadminbar").outerHeight() || 0,
                i = S(".header").outerHeight(),
                e =
                  -1 !== e.indexOf("#") ? e.substring(e.indexOf("#") + 1) : "",
                o = e ? S("#" + e).offset().top - o - i : 0,
                i = u.mobile() ? 0 : 1;
              return (
                !e ||
                ((o = "footer" === e ? "max" : o),
                l.timeScale(2).reverse(),
                s.timeScale(2).reverse(),
                n.data("toggled", !1),
                TweenMax.to(z, i, { scrollTo: { y: o, autoKill: !1 } }),
                !1)
              );
            }),
            a.add(h).on("click", function () {
              s.timeScale(2).reverse(), l.reverse(), n.data("toggled", !1);
            });
        },
      },
      fixedMe: {
        selector: ".thb-fixed",
        init: function (t) {
          var t = t || S(this.selector),
            e =
              (S("#wpadminbar").outerHeight() || 0) +
              S(".header").outerHeight(),
            i = !!t.hasClass("thb-portfolio-filter") && t,
            n = !!i && i.parents(".thb-portfolio");
          u.mobile() ||
            (t.each(function () {
              var o = S(this);
              i.length || (e += 30),
                o
                  .stick_in_parent({
                    offset_top: e,
                    spacer: ".sticky-content-spacer",
                    recalc_every: 5,
                  })
                  .on("sticky_kit:stick", function (t) {
                    var e = !!i && n.offset();
                    i.length && o.css("left", e.left);
                  });
            }),
            S(".post-content, .products, .vc_grid-container").imagesLoaded(
              function () {
                S(document.body).trigger("sticky_kit:recalc");
              }
            ),
            z.on("resize", function () {
              S(document.body).trigger("sticky_kit:recalc");
            }));
        },
      },
      search: {
        selector: ".quick_search",
        init: function () {
          var t = S(this.selector),
            e = S("#searchpopup"),
            o = e.find(".spacer"),
            i = e.find("p, input"),
            n = new TimelineLite({
              paused: !0,
              onStart: function () {
                e.css("display", "flex");
              },
              onComplete: function () {
                e.find("input").get(0).focus();
              },
              onReverseComplete: function () {
                e.css("display", "none");
              },
            });
          p.push(n),
            n
              .add(TweenLite.to(e, 0.5, { autoAlpha: 1 }))
              .staggerFrom(i, 0.2, { y: "50", opacity: 0 }, 0.1),
            t.on("click", function () {
              return (
                t.data("toggled")
                  ? (n.timeScale(1.6).reverse(), t.data("toggled", !1))
                  : (f.reverseAnimations.start([n]),
                    n.timeScale(1).restart(),
                    t.data("toggled", !0)),
                !1
              );
            }),
            o.on("click", function () {
              n.timeScale(1.6).reverse(), t.data("toggled", !1);
            });
        },
      },
      autoType: {
        selector: ".thb-autotype",
        control: function (t, e, o) {
          var i, n, a;
          (void 0 !== t.data("thb-in-viewport") && !o) ||
            (t.data("thb-in-viewport", !0),
            (n = (i = t.find(".thb-autotype-entry")).data("strings")),
            (a = i.data("speed") ? i.data("speed") : 50),
            (o = 1 === i.data("thb-loop")),
            (t = 1 === i.data("thb-cursor")),
            i.typed({
              strings: n,
              loop: o,
              showCursor: t,
              cursorChar: "|",
              contentType: "html",
              typeSpeed: a,
              backDelay: 1e3,
            }));
        },
      },
      fadeType: {
        selector: ".thb-fadetype",
        control: function (t, e, o) {
          if (void 0 === t.data("thb-in-viewport") || o) {
            t.data("thb-in-viewport", !0);
            var i = new SplitText(t.find(".thb-fadetype-entry")),
              n = new TimelineMax();
            if (
              (n.set(t, { visibility: "visible" }),
              t.hasClass("thb-fadetype-style1"))
            )
              n.staggerFrom(
                i.chars,
                0.25,
                { autoAlpha: 0, y: 10, rotationX: "-90deg", delay: e },
                0.05,
                "+=0",
                function () {
                  i.revert();
                }
              );
            else if (t.hasClass("thb-fadetype-style2"))
              for (var a = i.chars.length, r = 0; r < a; r++) {
                var s = i.chars[r],
                  l = 0.5 * Math.random();
                n.from(s, 2, { opacity: 0, ease: Linear.easeNone }, l).from(
                  s,
                  2,
                  { yPercent: -50, ease: Expo.easeOut },
                  l
                );
              }
          }
        },
      },
      highlight: {
        selector: ".thb-highlight",
        control: function (t, e, o) {
          (void 0 !== t.data("thb-in-viewport") && !o) ||
            (t.data("thb-in-viewport", !0),
            TweenMax.to(t, 1, { backgroundSize: "+=100% +=0%", delay: e }));
        },
      },
      slideType: {
        selector: ".thb-slidetype",
        control: function (t, e, o) {
          var i, n, a, r, s;
          (void 0 !== t.data("thb-in-viewport") && !o) ||
            (t.data("thb-in-viewport", !0),
            (i = t.data("style")),
            (n = new TimelineMax()),
            (s = 0.25),
            (o = 0.05),
            "style1" === i
              ? ((r = t.find(".thb-slidetype-entry .lines")),
                (s = 0.65),
                (o = 0.15))
              : "style2" === i
              ? ((r = (a = new SplitText(t.find(".thb-slidetype-entry"), {
                  type: "words",
                })).words),
                (s = 0.65),
                (o = 0.15))
              : "style3" === i &&
                (r = (a = new SplitText(t.find(".thb-slidetype-entry"))).chars),
            n
              .set(t, { visibility: "visible" })
              .staggerFrom(
                r,
                s,
                { y: "200%", delay: e },
                o,
                "+=0",
                function () {
                  "style1" !== i && a.revert();
                }
              ));
        },
      },
      keyNavigation: {
        selector: ".portfolio_nav",
        init: function () {
          function t(t) {
            78 === t.keyCode &&
              e.find(".post_nav_link.next").length &&
              e.find(".post_nav_link.next")[0].click(),
              80 === t.keyCode &&
                e.find(".post_nav_link.prev").length &&
                e.find(".post_nav_link.prev")[0].click();
          }
          var e = S(this.selector);
          "on" === themeajax.settings.keyboard_nav &&
            (j.bind("keyup", t),
            S("input, textarea").on("focus", function () {
              j.unbind("keyup", t);
            }),
            S("input, textarea").on("blur", function () {
              j.bind("keyup", t);
            }));
        },
      },
      quickCart: {
        selector: "#wrapper",
        init: function () {
          var t = S(".panel-close");
          (f.toggleHover = new TimelineMax({ paused: !0 })),
            (f.MainCart = new TimelineMax({
              paused: !0,
              onStart: function () {
                S("#side-cart").css("display", "block");
              },
              onComplete: function () {
                f.customScroll.init();
              },
              onReverseComplete: function () {
                S("#side-cart").css("display", "none");
              },
            })),
            p.push(f.MainCart),
            p.push(f.toggleHover),
            f.MainCart.to(S("#side-cart"), 0.5, { autoAlpha: 1 })
              .to(S("#side-cart").find(".cart-container"), 0.5, { x: 0 })
              .staggerFromTo(
                S(
                  ".item, .product_list_widget>li,.total,.button",
                  "#side-cart"
                ),
                0.4,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1 },
                0.1
              ),
            f.toggleHover.to(S(".quick_cart").find(".handle"), 0.3, {
              y: "-3px",
            }),
            S(".quick_cart").hoverIntent(
              function () {
                f.toggleHover.play();
              },
              function () {
                f.toggleHover.reverse();
              }
            ),
            S(".header").on("click", ".quick_cart", function () {
              return (
                !(
                  !themeajax.settings.is_cart && !themeajax.settings.is_checkout
                ) ||
                (S(".quick_cart").data("toggled")
                  ? (f.MainCart.timeScale(1.6).reverse(),
                    S(".quick_cart").data("toggled", !1))
                  : (f.reverseAnimations.start([f.toggleHover]),
                    f.MainCart.timeScale(1).play(),
                    S(".quick_cart").data("toggled", !0)),
                !1)
              );
            }),
            S("#side-cart")
              .find(".spacer")
              .add(t)
              .on("click", function () {
                return (
                  f.MainCart.timeScale(1.6).reverse(),
                  f.toggleHover.reverse(),
                  S(".quick_cart").data("toggled", !1),
                  !1
                );
              });
        },
      },
      portfolioHeight: {
        selector: ".portfolio-horizontal",
        init: function (t) {
          var e = this,
            o = S(e.selector);
          e.control(o),
            z.on(
              "scroll debounce",
              M.debounce(function () {
                e.control(o);
              }, 20)
            );
        },
        control: function (t) {
          var o = S(".header"),
            i = S("#wpadminbar").outerHeight() || 0,
            n = S(".footer-fixed").length ? S("#footer").outerHeight() : 0;
          t.filter(".portfolio-horizontal").each(function () {
            var t = S(this).find(".type-portfolio"),
              e = (z.height() - o.outerHeight() - i - n) / 2;
            t.height(e);
          });
        },
      },
      textStyle: {
        selector: ".portfolio-text-style-2",
        init: function () {
          var t = this,
            e = S(t.selector);
          t.control(e),
            z.on(
              "scroll resize",
              M.debounce(function () {
                t.control(e);
              }, 10)
            );
        },
        control: function (t) {
          var e = 0,
            o = t.length;
          t.filter(":in-viewport").each(function () {
            var t = S(this);
            "0" === t.css("opacity") &&
              (TweenLite.to(t, 0.1 * o, { delay: 0.1 * e, x: 0, autoAlpha: 1 }),
              e++);
          });
        },
      },
      jarallax: {
        selector: ".parallax_bg",
        init: function (t) {
          (t || S(this.selector)).each(function () {
            var t = S(this),
              e = { speed: 0.8, imgElement: ".wp-post-image" };
            t.hasClass("columns") &&
              ((t = t.find(".vc_column-inner")), delete e.imgElement),
              t.jarallax(e);
          });
        },
      },
      jarallaxElement: {
        selector: ".thb-parallax-element",
        init: function (t) {
          t = t || S(this.selector);
          lax.init(),
            lax.addDriver(
              "scrollY",
              function () {
                return d.scrollY;
              },
              { inertiaEnabled: !0 }
            ),
            t.each(function () {
              var t = S(this),
                e = t.data("parallax-element");
              lax.addElement(t[0], {
                scrollY: {
                  translateY: [
                    ["elInY", "elCenterY", "elOutY"],
                    [-1 * e, 0, e],
                  ],
                },
              });
            });
        },
      },
      mobileMenu: {
        selector: ".mobile-menu",
        init: function () {
          var t = S(this.selector);
          ("thb-submenu" === S("#mobile-menu").data("behaviour")
            ? t.find("li.menu-item-has-children>a")
            : t.find("li.menu-item-has-children>a .thb-arrow")
          ).on("click", function (t) {
            var e = S(this),
              o = e.parents("a").length ? e.parents("a") : e,
              e = o.next(".sub-menu");
            o.hasClass("active")
              ? (o.removeClass("active"),
                e.slideUp("200", function () {
                  setTimeout(function () {
                    f.customScroll.init();
                  }, 10);
                }))
              : (o.addClass("active"),
                e.slideDown("200", function () {
                  setTimeout(function () {
                    f.customScroll.init();
                  }, 10);
                })),
              t.stopPropagation(),
              t.preventDefault();
          });
        },
      },
      navDropdown: {
        selector: ".sf-menu",
        init: function () {
          S(this.selector)
            .find("li.menu-item-has-children")
            .each(function () {
              var e = S(this),
                o = (e.offset(), e.find(">.sub-menu")),
                t = o.find(">li>a"),
                i = new TimelineMax({ paused: !0 });
              i
                .to(o, 0.5, { autoAlpha: 1 }, "start")
                .staggerFromTo(
                  t,
                  0.15,
                  { opacity: 0, x: 10 },
                  { opacity: 1, x: 0 },
                  0.07,
                  "start"
                ),
                e.hoverIntent(
                  function () {
                    var t =
                      parseInt(z.outerWidth(), 10) -
                      parseInt(o.outerWidth(), 10) -
                      parseInt(e.offset().left, 10);
                    e.addClass("sfHover"),
                      t < 0 && o.css("left", t - 60 + "px"),
                      S(this).find(">a").addClass("active"),
                      i.timeScale(1).restart();
                  },
                  function () {
                    e.removeClass("sfHover"),
                      i.timeScale(1.5).reverse(),
                      S(this).find(">a").removeClass("active");
                  }
                );
            });
        },
      },
      fullHeightContent: {
        selector: ".full-height-content",
        init: function () {
          var t = this,
            e = S(t.selector);
          t.control(e),
            z.on(
              "resize.thb-full-height",
              M.debounce(function () {
                t.control(e);
              }, 50)
            );
        },
        control: function (t) {
          var o = S(".header"),
            e = S("#wpadminbar"),
            i = S(".footer-fixed"),
            n = e.outerHeight() || 0,
            a = i.length ? S("#footer").outerHeight() : 0;
          t.each(function () {
            var t = S(this),
              e = z.height() - o.outerHeight() - n - a;
            t.css("min-height", e);
          });
        },
      },
      videoPlayButton: {
        selector: ".thb_video_play_button_enabled",
        init: function () {
          S(this.selector).each(function () {
            var t,
              e = S(this),
              o = e.find(".thb_video_play"),
              i = S("svg", o),
              n = e.data("vide");
            n &&
              ((t = n.getVideoObject()),
              o &&
                o.on("click", function () {
                  return (
                    t &&
                      (t.paused
                        ? (e.addClass("thb_video_active"),
                          t.play(),
                          i.addClass("playing"))
                        : (e.removeClass("thb_video_active"),
                          t.pause(),
                          i.removeClass("playing"))),
                    !1
                  );
                }));
          });
        },
      },
      portfolio_video: {
        selector: ".thb-video-item",
        init: function (t) {
          (t || S(this.selector)).each(function () {
            var t = S(this),
              e = t.find(".thb-portfolio-video").data("vide");
            e && ((e = e.getVideoObject()).currentTime = 0.15),
              t.hoverIntent(
                function () {
                  e && ((e.currentTime = 0.15), e.play());
                },
                function () {
                  e && (e.pause(), (e.currentTime = 0.15));
                }
              );
          });
        },
      },
      slick: {
        selector: ".slick",
        init: function (t) {
          (t || S(this.selector)).each(function () {
            var o = S(this),
              t = o.data("columns"),
              e = 2 < t.length ? parseInt(t.substr(t.length - 1)) : t,
              i = o.find(".columns"),
              n = i.find(".thb-placeholder"),
              a = 2 < t.length ? (5 === e ? 5 : 12 / e) : t,
              r = !!o.data("fade"),
              s = !0 === o.data("navigation"),
              l = 1 === o.data("autoplay"),
              c = !0 === o.data("pagination"),
              d = !0 === o.data("vertical"),
              h = !!o.data("center") && i.length > a && o.data("center"),
              p = !1 !== o.data("infinite"),
              e = o.data("autoplay-speed") ? o.data("autoplay-speed") : 4e3,
              t = o.data("asnavfor"),
              i = q.hasClass("rtl"),
              u = new TimelineMax({
                paused: !0,
                onStart: function () {
                  o.addClass("remove-transition");
                },
                onComplete: function () {
                  o.removeClass("remove-transition"),
                    TweenMax.set(n, { clearProps: "transform" });
                },
              });
            u.staggerTo(n, 0.7, { scale: 1, x: 0 }, 0.2);
            a = {
              dots: c,
              arrows: s,
              infinite: p,
              speed: 1e3,
              fade: r,
              rows: 0,
              centerPadding: "10%",
              centerMode: h,
              slidesToShow: a,
              slidesToScroll: 1,
              rtl: i,
              cssEase: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
              autoplay: l,
              autoplaySpeed: e,
              pauseOnHover: !0,
              accessibility: !1,
              vertical: d,
              verticalSwiping: d,
              focusOnSelect: !0,
              prevArrow:
                '<button type="button" class="slick-nav slick-prev">' +
                themeajax.arrows.left +
                "</button>",
              nextArrow:
                '<button type="button" class="slick-nav slick-next">' +
                themeajax.arrows.right +
                "</button>",
              responsive: [
                { breakpoint: 1025, settings: { slidesToShow: a < 3 ? a : 3 } },
                { breakpoint: 780, settings: { slidesToShow: a < 2 ? a : 2 } },
                { breakpoint: 640, settings: { slidesToShow: 1 } },
              ],
            };
            t && S(t).is(":visible") && (a.asNavFor = t),
              o.data("fade") && (a.fade = !0),
              o.hasClass("testimonial-style1") &&
                (a.customPaging = function (t, e) {
                  var o = S(t.$slides[e]).find(".author_image").attr("src");
                  return (
                    '<a class="portrait_bullet" title="' +
                    S(t.$slides[e]).find(".title").text() +
                    '" style="background-image:url(' +
                    o +
                    ');"></a>'
                  );
                }),
              o.hasClass("portfolio-vertical") &&
                o.on("init", function (t, e) {
                  u.play();
                }),
              o.hasClass("thb-portfolio-slider-style2") &&
                ((a.vertical = !0),
                (a.verticalSwiping = !0),
                (a.prevArrow =
                  '<button type="button" class="slick-nav slick-prev">' +
                  themeajax.arrows.top +
                  "</button>"),
                (a.nextArrow =
                  '<button type="button" class="slick-nav slick-next">' +
                  themeajax.arrows.bottom +
                  "</button>"),
                o.on("beforeChange", function (t, e, o, i) {
                  var n = o - i,
                    a = 1 == n || n == -1 * (e.slideCount - 1),
                    n = a ? "100%" : "-100%",
                    a = a ? "-100%" : "100%";
                  new TimelineMax()
                    .set(
                      e.$slides
                        .eq(i)
                        .find(".thb-placeholder, .thb-portfolio-video"),
                      { y: a }
                    )
                    .to(
                      e.$slides
                        .eq(o)
                        .find(".thb-placeholder-inner, .thb-portfolio-video"),
                      0.5,
                      { scale: 0.4 }
                    )
                    .to(
                      e.$slides
                        .eq(o)
                        .find(".thb-placeholder, .thb-portfolio-video"),
                      0.5,
                      { y: n }
                    );
                }),
                o.on("afterChange", function (t, e, o, i) {
                  (o = e.$slides.eq(o)),
                    e.$slides.eq(i),
                    (i = e.$slides.not(o)),
                    e.$slides.not(o);
                  new TimelineMax()
                    .to(o.find(".thb-placeholder, .thb-portfolio-video"), 0.5, {
                      y: "0%",
                    })
                    .to(
                      o.find(".thb-placeholder-inner, .thb-portfolio-video"),
                      0.5,
                      { scale: 1 },
                      "thb-scale"
                    )
                    .set(
                      i.find(
                        ".thb-placeholder, .thb-placeholder-inner, .thb-portfolio-video"
                      ),
                      { clearProps: "transform" },
                      "thb-scale"
                    );
                }),
                o.on("init", function (t, e) {
                  new TimelineMax().to(
                    e.$slides
                      .eq(e.currentSlide)
                      .find(".thb-placeholder-inner, .thb-portfolio-video"),
                    0.5,
                    { scale: 1 }
                  );
                })),
              o.hasClass("thb-portfolio-slider") &&
                (o.on("beforeChange", function (t, e, o, i) {
                  (o = e.$slides.eq(o).find(".thb-portfolio-video")),
                    (i = e.$slides.eq(i).find(".thb-portfolio-video"));
                  o.length &&
                    (((o = o.data("vide").getVideoObject()).currentTime = 0),
                    o.pause()),
                    i.length && i.data("vide").getVideoObject().play();
                }),
                o.on("init", function (t, e) {
                  var o = e.$slides.eq(0).find(".thb-portfolio-video");
                  o.length &&
                    ((e = o.data("vide").getVideoObject()),
                    o.data("vide").resize(),
                    e.play());
                })),
              o.on("beforeChange", function (t, e, o, i) {
                f.fullHeightContent.init();
              }),
              h &&
                o.on("init", function (t, e) {
                  o.addClass("centered");
                }),
              o.hasClass("product-thumbnails") &&
                ((a.vertical = !0),
                (a.responsive[2].settings.vertical = !1),
                (a.responsive[2].settings.slidesToShow = 4)),
              o.slick(a);
          });
        },
      },
      toggle: {
        selector: ".toggle .title",
        init: function () {
          S(this.selector).each(function () {
            var t = S(this);
            t.on("click", function () {
              t.hasClass("toggled")
                ? t
                    .removeClass("toggled")
                    .closest(".toggle")
                    .find(".inner")
                    .slideUp(200)
                : t
                    .addClass("toggled")
                    .closest(".toggle")
                    .find(".inner")
                    .slideDown(200);
            });
          });
        },
      },
      variations: {
        selector: "form.variations_form",
        init: function () {
          var t = S(this.selector),
            o = S("p.price", ".product-information").eq(0),
            e = o.html();
          t
            .on("show_variation", function (t, e) {
              e.price_html && "" !== e.price_html && o.html(e.price_html);
            })
            .on("reset_image", function () {
              o.html(e);
            }),
            t.find(".single_variation").is(":visible") &&
              t.find(".single_variation .woocommerce-variation-price").html() &&
              o.html(
                t.find(".single_variation .woocommerce-variation-price").html()
              );
        },
      },
      productAjaxAddtoCart: {
        selector:
          ".thb-single-product-ajax-on.single-product .product-type-variable form.cart, .thb-single-product-ajax-on.single-product .product-type-simple form.cart",
        init: function () {
          var t = S(this.selector),
            o = S(".single_add_to_cart_button", t);
          ("undefined" != typeof wc_add_to_cart_params &&
            "yes" === wc_add_to_cart_params.cart_redirect_after_add) ||
            j.on("submit", "body.single-product form.cart", function (t) {
              t.preventDefault();
              var t = S(this),
                e = o.text();
              o.is(".disabled") ||
                o.is(".wc-variation-selection-needed") ||
                ((t = {
                  product_id: t.find("[name*='add-to-cart']").val(),
                  product_variation_data: t.serialize(),
                }),
                S.ajax({
                  method: "POST",
                  data: t.product_variation_data,
                  dataType: "html",
                  url: wc_cart_fragments_params.wc_ajax_url
                    .toString()
                    .replace(
                      "%%endpoint%%",
                      "add-to-cart=" + t.product_id + "&thb-ajax-add-to-cart=1"
                    ),
                  cache: !1,
                  headers: { "cache-control": "no-cache" },
                  beforeSend: function () {
                    q.trigger("adding_to_cart"),
                      o
                        .addClass("disabled")
                        .text(themeajax.l10n.adding_to_cart);
                  },
                  success: function (t) {
                    (t = S.parseHTML(t)),
                      (t = {
                        ".float_count": S(t).find(".float_count").html(),
                        ".thb_prod_ajax_to_cart_notices": S(t)
                          .find(".thb_prod_ajax_to_cart_notices")
                          .html(),
                        ".widget_shopping_cart_content": S(t)
                          .find(".widget_shopping_cart_content")
                          .html(),
                      });
                    S.each(t, function (t, e) {
                      S(t).html(e);
                    }),
                      q.trigger("wc_fragments_refreshed"),
                      o.removeClass("disabled").text(e);
                  },
                  error: function (t) {
                    q.trigger("wc_fragments_ajax_error"),
                      o.removeClass("disabled").text(e);
                  },
                }));
            });
        },
      },
      magnificInline: {
        selector: ".mfp-inline",
        init: function () {
          S(this.selector).magnificPopup({
            type: "inline",
            fixedContentPos: !1,
            mainClass: "mfp-zoom-in",
            removalDelay: 400,
            closeBtnInside: !1,
            callbacks: {
              imageLoadComplete: function () {
                var t = this;
                M.delay(function () {
                  t.wrap.addClass("mfp-image-loaded");
                }, 10);
              },
              beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace(
                  "mfp-figure",
                  "mfp-figure mfp-with-anim"
                );
              },
            },
          });
        },
      },
      magnificGallery: {
        selector: ".mfp-gallery",
        init: function () {
          S(this.selector).magnificPopup({
            delegate: "a",
            type: "image",
            mainClass: "mfp-zoom-in",
            removalDelay: 400,
            fixedContentPos: !1,
            gallery: {
              enabled: !0,
              arrowMarkup:
                '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir% mfp-prevent-close">' +
                themeajax.arrows.left +
                "</button>",
              tCounter:
                '<span class="mfp-counter">' + themeajax.l10n.of + "</span>",
            },
            image: {
              verticalFit: !0,
              titleSrc: function (t) {
                return t.img.attr("alt");
              },
            },
            callbacks: {
              imageLoadComplete: function () {
                var t = this;
                M.delay(function () {
                  t.wrap.addClass("mfp-image-loaded");
                }, 10);
              },
              beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace(
                  "mfp-figure",
                  "mfp-figure mfp-with-anim"
                );
              },
              open: function () {
                (S.magnificPopup.instance.next = function () {
                  var t = this;
                  t.wrap.removeClass("mfp-image-loaded"),
                    setTimeout(function () {
                      S.magnificPopup.proto.next.call(t);
                    }, 125);
                }),
                  (S.magnificPopup.instance.prev = function () {
                    var t = this;
                    this.wrap.removeClass("mfp-image-loaded"),
                      setTimeout(function () {
                        S.magnificPopup.proto.prev.call(t);
                      }, 125);
                  });
              },
            },
          });
        },
      },
      magnificImage: {
        selector: ".mfp-image",
        init: function () {
          S(this.selector).magnificPopup({
            type: "image",
            mainClass: "mfp-zoom-in",
            removalDelay: 400,
            fixedContentPos: !1,
            callbacks: {
              imageLoadComplete: function () {
                var t = this;
                M.delay(function () {
                  t.wrap.addClass("mfp-image-loaded");
                }, 10);
              },
              beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace(
                  "mfp-figure",
                  "mfp-figure mfp-with-anim"
                );
              },
            },
          });
        },
      },
      magnificVideo: {
        selector: ".mfp-video",
        init: function () {
          S(this.selector).magnificPopup({
            type: "iframe",
            mainClass: "mfp-zoom-in",
            removalDelay: 400,
            fixedContentPos: !1,
          });
        },
      },
      paginationStyle2: {
        selector: ".pagination-style2",
        init: function () {
          var r = S(this.selector),
            e = r.data("security"),
            t = S(".thb_load_more"),
            s = !1,
            o = 2;
          t.on("click", function () {
            var i = S(this),
              n = i.text(),
              a = i.data("count"),
              t = r.find(".post").last().data("i");
            return (
              !1 === s &&
                (i
                  .html("<span>" + themeajax.l10n.loading + "</span>")
                  .addClass("loading"),
                S.ajax(themeajax.url, {
                  method: "POST",
                  data: {
                    action: "thb_blog_ajax",
                    page: o++,
                    thb_i: t,
                    security: e,
                  },
                  beforeSend: function () {
                    s = !0;
                  },
                  success: function (t) {
                    s = !1;
                    var e = S.parseHTML(S.trim(t)),
                      o = e ? e.length : 0;
                    "" === t ||
                    "undefined" === t ||
                    "No More Posts" === t ||
                    "No $args array created" === t
                      ? i
                          .html("<span>" + themeajax.l10n.nomore + "</span>")
                          .removeClass("loading")
                          .off("click")
                      : (S(e)
                          .appendTo(r)
                          .hide()
                          .imagesLoaded(function () {
                            r.data("isotope") && r.isotope("appended", S(e)),
                              S(e).show(),
                              TweenMax.staggerFromTo(
                                S(e),
                                0.5,
                                { opacity: 0, y: 30 },
                                { y: 0, opacity: 1 },
                                0.25
                              );
                          }),
                        (o < a
                          ? i.html("<span>" + themeajax.l10n.nomore + "</span>")
                          : i.html("<span>" + n + "</span>")
                        ).removeClass("loading"));
                  },
                })),
              !1
            );
          });
        },
      },
      paginationStyle3: {
        selector: ".pagination-style3",
        init: function () {
          var i = S(this.selector),
            t = i.data("security"),
            e = 2,
            n = !1,
            a = i.data("count"),
            o = i.find(".post").last().data("i"),
            r = M.debounce(function () {
              !1 === n &&
                S.ajax(themeajax.url, {
                  method: "POST",
                  data: {
                    action: "thb_blog_ajax",
                    page: e++,
                    thb_i: o,
                    security: t,
                  },
                  beforeSend: function () {
                    n = !0;
                  },
                  success: function (t) {
                    n = !1;
                    var e = S.parseHTML(S.trim(t)),
                      o = e ? e.length : 0;
                    "" === t ||
                    "undefined" === t ||
                    "No More Posts" === t ||
                    "No $args array created" === t
                      ? z.off("scroll", r)
                      : (S(e)
                          .appendTo(i)
                          .hide()
                          .imagesLoaded(function () {
                            i.data("isotope") && i.isotope("appended", S(e)),
                              S(e).show(),
                              TweenMax.staggerFromTo(
                                S(e),
                                0.5,
                                { opacity: 0, y: 30 },
                                { y: 0, opacity: 1 },
                                0.25
                              );
                          }),
                        a <= o && z.on("scroll", r));
                  },
                });
            }, 30);
          z.scroll(r);
        },
      },
      masonry: {
        selector: ".masonry",
        init: function () {
          var p = S(this.selector),
            t = S(".header"),
            k = S(".icon-holder", t);
          (Outlayer.prototype._setContainerMeasure = function (t, e) {
            var o;
            void 0 !== t &&
              ((o = this.size).isBorderBox &&
                (t += e
                  ? o.paddingLeft +
                    o.paddingRight +
                    o.borderLeftWidth +
                    o.borderRightWidth
                  : o.paddingBottom +
                    o.paddingTop +
                    o.borderTopWidth +
                    o.borderBottomWidth),
              (t = Math.max(t, 0)),
              (t = Math.floor(t)),
              (this.element.style[e ? "width" : "height"] = t + "px"));
          }),
            p.each(function () {
              var n,
                u = S(this),
                f = u.data("security"),
                t = u.data("layoutmode") ? u.data("layoutmode") : "masonry",
                i = u.hasClass("variable-height"),
                g = (u.children(".columns"), S(u.data("loadmore"))),
                e = u.data("thb-animation"),
                o = u.data("thb-animation-speed")
                  ? u.data("thb-animation-speed")
                  : 0.5,
                a = u.find(".thb-portfolio-filter"),
                r = a.find(".filters"),
                s = new TimelineMax({
                  paused: !0,
                  onStart: function () {
                    a.hasClass("style1") && r.width(p.outerWidth());
                  },
                  onReverseComplete: function () {
                    TweenMax.set(r, { clearProps: "all" });
                  },
                }),
                m = 2,
                l = {
                  layoutMode: t,
                  itemSelector: ".columns",
                  transitionDuration: 0,
                  originLeft: !q.hasClass("rtl"),
                  hiddenStyle: {},
                  visibleStyle: {},
                },
                v = { y: 0, opacity: 1 },
                c = { y: 100, opacity: 0 },
                b = o,
                d = b / 2,
                y = b / 5,
                x = (u.data("grid_type"), S(".masonry-large", u)),
                _ = S(".masonry-tall", u),
                w = S(".masonry-small", u),
                C = S(".masonry-wide", u),
                T = !1;
              function h() {
                var t,
                  e = ((t = parseInt(u.css("marginLeft"), 10)), Math.abs(t)),
                  t = ".wp-post-image:not(.thb_3dimage)";
                x.length
                  ? (x.find(t).height(function () {
                      return parseInt(x.eq(0).outerHeight(), 10) + "px";
                    }),
                    _.length &&
                      _.find(t).height(function () {
                        return x.eq(0).outerHeight() + "px";
                      }),
                    w.length &&
                      w.find(t).height(function () {
                        return x.eq(0).outerHeight() / 2 - e + "px";
                      }),
                    C.length &&
                      C.find(t).height(function () {
                        return x.eq(0).outerHeight() / 2 - e + "px";
                      }))
                  : _.length
                  ? (_.find(t).height(function () {
                      return parseInt(_.eq(0).outerHeight(), 10) + "px";
                    }),
                    w.length &&
                      w.find(t).height(function () {
                        return _.eq(0).outerHeight() / 2 - e + "px";
                      }),
                    C.length &&
                      C.find(t).height(function () {
                        return _.eq(0).outerHeight() / 2 - e + "px";
                      }))
                  : C.length
                  ? C.length &&
                    C.find(t).height(function () {
                      return w.eq(0).outerHeight() + "px";
                    })
                  : w.length &&
                    w.find(t).height(function () {
                      var t = w.eq(0).outerHeight();
                      if (0 < t) return t + "px";
                    });
              }
              (c =
                "thb-fade" === e
                  ? ((v = { opacity: 1 }), { opacity: 0 })
                  : "thb-scale" === e
                  ? ((v = { opacity: 1, scale: 1 }), { opacity: 0, scale: 0 })
                  : "thb-none" === e
                  ? ((b = d = 0), (v = { opacity: 1 }), { opacity: (y = 0) })
                  : ((v = { y: 0, opacity: 1 }), { y: 30, opacity: 0 })),
                a.hasClass("style2") &&
                  (l.stamp = ".thb-portfolio-filter-stamp"),
                u.addClass("thb-loaded"),
                i &&
                  (h(),
                  z.on("resize.variables", function () {
                    h();
                  }),
                  j.on("lazyloaded", function (t) {
                    z.trigger("resize.variables");
                  })),
                u.imagesLoaded({ background: !0 }, function () {
                  u
                    .on("layoutComplete", function (t, e) {
                      var o = M.map(e, "element");
                      i && h(),
                        z
                          .on(
                            "scroll.masonry-animation",
                            M.debounce(function () {
                              var t;
                              (e = S(o)
                                .filter(":in-viewport")
                                .filter(function () {
                                  return (
                                    void 0 === S(this).data("thb-in-viewport")
                                  );
                                })) &&
                                ((t = e).data("thb-in-viewport", !0),
                                TweenMax.staggerTo(
                                  e.find(".portfolio-holder"),
                                  b,
                                  v,
                                  y,
                                  function () {
                                    t.addClass("thb-added"),
                                      t.data("thb-in-viewport", !0),
                                      (T = !1);
                                  }
                                ));
                            }, 20)
                          )
                          .trigger("scroll.masonry-animation"),
                        a.length &&
                          a.hasClass("style1") &&
                          s.timeScale(1).reverse(),
                        u.trigger("resize.variables resize.true-aspect");
                    })
                    .isotope(l)
                    .isotope("layout"),
                    g.on("click", function () {
                      var n = g.text(),
                        t = portfolioajax.thb_i,
                        e = portfolioajax.aspect,
                        o = portfolioajax.columns,
                        i = portfolioajax.style,
                        a = portfolioajax.thb_masonry,
                        r = portfolioajax.thb_size,
                        s = portfolioajax.grid_type,
                        l = portfolioajax.layout,
                        c = portfolioajax.count,
                        d = portfolioajax.loop,
                        h = portfolioajax.thb_hover_style,
                        p = portfolioajax.thb_title_position;
                      return (
                        !1 === T &&
                          (g.text(themeajax.l10n.loading).addClass("loading"),
                          (T = !0),
                          S.post(
                            themeajax.url,
                            {
                              action: "thb_ajax",
                              security: f,
                              loop: d,
                              i: t,
                              aspect: e,
                              columns: o,
                              thb_masonry: a,
                              thb_size: r,
                              grid_type: s,
                              layout: l,
                              style: i,
                              page: m,
                              hover_style: h,
                              title_position: p,
                            },
                            function (t) {
                              m++;
                              var e,
                                o = S.parseHTML(S.trim(t)),
                                i = o ? o.length : 0;
                              "" === t ||
                              "undefined" === t ||
                              "No More Posts" === t ||
                              "No $args array created" === t
                                ? g
                                    .text(themeajax.l10n.nomore)
                                    .removeClass("loading")
                                    .off("click")
                                : (e = S(o))
                                    .find(".thb-placeholder")
                                    .imagesLoaded(function () {
                                      e.appendTo(u).hide(),
                                        (x = S(".masonry-large", u)),
                                        (_ = S(".masonry-tall", u)),
                                        (w = S(".masonry-small", u)),
                                        (C = S(".masonry-wide", u)),
                                        z.trigger("resize.variables"),
                                        u.isotope("appended", S(o)),
                                        e.show(),
                                        TweenMax.staggerTo(
                                          S(o).find(".portfolio-holder"),
                                          b,
                                          v,
                                          y
                                        ),
                                        e.find(".thb_3dimg").length &&
                                          e.find(".thb_3dimg").thb_3dImg(),
                                        (i < c
                                          ? g.text(themeajax.l10n.nomore)
                                          : g.text(n)
                                        ).removeClass("loading");
                                    });
                            }
                          )),
                        !1
                      );
                    });
                }),
                a.length &&
                  ((t = a.find(".thb-toggle")),
                  (o = a.find("li:not(.close)")),
                  (e = a.find("li.close")),
                  (n = a.find("a")),
                  a.hasClass("style1")
                    ? s
                        .to(t, 0.2, { xPercent: -100, opacity: 0 })
                        .to(r, 0.2, { yPercent: 100 })
                        .staggerFromTo(
                          o,
                          0.2,
                          { y: -20, opacity: 0 },
                          { y: 0, opacity: 1 },
                          0.05
                        )
                    : a.hasClass("style3") &&
                      (k.append(a),
                      s
                        .to(r, 0.2, { autoAlpha: 1 })
                        .staggerFromTo(
                          o,
                          0.1,
                          { y: -20, opacity: 0 },
                          { y: 0, opacity: 1 },
                          0.05
                        )),
                  t.on("click", function () {
                    s.timeScale(1).restart();
                  }),
                  e.on("click", function () {
                    s.timeScale(1).reverse();
                  }),
                  n.on("click", function () {
                    function t() {
                      u.on("layoutComplete", function (t, e) {
                        e = M.map(e, "element");
                        TweenMax.staggerTo(
                          S(e).find(".portfolio-holder"),
                          b,
                          v,
                          y
                        );
                      }),
                        u.isotope({ filter: o });
                    }
                    var e = S(this),
                      o = e.attr("data-filter"),
                      i = S(u.isotope("getFilteredItemElements")).find(
                        ".portfolio-holder"
                      );
                    return (
                      e.hasClass("active")
                        ? s.timeScale(1).reverse()
                        : (n.removeClass("active"),
                          e.addClass("active"),
                          i.length ? TweenMax.staggerTo(i, d, c, y, t) : t()),
                      !1
                    );
                  }));
            });
        },
      },
      thb_3dImg: {
        selector: ".hover-style7",
        init: function () {
          S(".thb_3dimg").thb_3dImg();
        },
      },
      textStyle3: {
        selector: ".thb-text-style3",
        init: function () {
          S(this.selector).each(function () {
            var t = S(this),
              i = (t.find(".thb-content-side"), t.find(".portfolio-image")),
              n = t.find(".portfolio-text-style3");
            function e(t, e) {
              n.removeClass("active"), S(e).addClass("active");
              var o = new TimelineMax();
              return (
                o
                  .to(i.not(i.eq(t)), 0.5, { opacity: 0, scale: 1 }, "start")
                  .to(i.eq(t), 0.5, { opacity: 0.6, display: "block" }, "start")
                  .to(i.eq(t), 5, { scale: 1.05 }),
                (e.animation = o)
              );
            }
            z
              .scroll(
                M.debounce(function () {
                  var t = n.filter(":in-viewport").filter(function () {
                    return void 0 === S(this).data("thb-in-viewport");
                  });
                  t &&
                    (t.data("thb-in-viewport", !0),
                    TweenMax.staggerTo(
                      t.find("h2"),
                      0.5,
                      { opacity: 1, x: 0 },
                      0.1,
                      function () {
                        t.data("thb-in-viewport", !0);
                      }
                    ));
                }, 20)
              )
              .trigger("scroll"),
              n.hoverIntent(function () {
                e(S(this).index(), this);
              }),
              e(0, n.eq(0));
          });
        },
      },
      shareArticleDetail: {
        selector: ".share-post-link",
        init: function () {
          S(this.selector).each(function () {
            var t = S(this),
              e = t.next(".share_container"),
              o = e.find(".social"),
              i = e.find(".spacer"),
              n = e.find("h4, .boxed-icon, form"),
              a = e.find(".copy-value"),
              r = e.find(".btn"),
              s = r.text(),
              l = new ClipboardJS(r[0], {
                target: function () {
                  return a[0];
                },
              }),
              c = new TimelineLite({
                paused: !0,
                onStart: function () {
                  e.css("display", "flex");
                },
                onReverseComplete: function () {
                  e.css("display", "none"), r.text(s);
                },
              });
            l.on("success", function (t) {
              r.text(themeajax.l10n.copied);
            }),
              p.push(c),
              c
                .add(TweenLite.to(e, 0.5, { autoAlpha: 1 }))
                .staggerFrom(n, 0.2, { y: "50", opacity: 0 }, 0.05),
              t.on("click", function () {
                return (
                  f.reverseAnimations.start([c]), c.timeScale(1).restart(), !1
                );
              }),
              i.on("click", function () {
                c.timeScale(1.6).reverse();
              }),
              o.on("click", function () {
                var t = screen.width / 2 - 320,
                  e = screen.height / 2 - 220 - 100;
                return (
                  d.open(
                    S(this).attr("href"),
                    "mywin",
                    "left=" +
                      t +
                      ",top=" +
                      e +
                      ",width=640,height=440,toolbar=0"
                  ),
                  !1
                );
              });
          });
        },
      },
      customScroll: {
        selector: ".custom_scroll",
        init: function () {
          var t = this,
            e = S(t.selector);
          e.each(function () {
            S(this).perfectScrollbar({
              wheelPropagation: !1,
              suppressScrollX: !0,
            });
          }),
            z.on("resize", function () {
              t.resize(e);
            });
        },
        resize: function (t) {
          t.perfectScrollbar("update");
        },
      },
      wpml: {
        selector: "#thb_language_selector",
        init: function () {
          S(this.selector).on("change", function () {
            var t = S(this).val();
            return t && (d.location = t), !1;
          });
        },
      },
      loginregister: {
        selector: "#customer_login",
        init: function () {
          var t = S(this.selector),
            e = t.find(".login-section.first"),
            o = t.find(".login-section.second"),
            i = o.find(".line"),
            n = o.find(".or"),
            t = new TimelineLite();
          TweenLite.set([e, o, i, n], { opacity: 0 }),
            TweenLite.set(e, { x: -100 }),
            TweenLite.set(o, { x: 100 }),
            TweenLite.set(i, { scaleY: 0 }),
            TweenLite.set(n, { scaleY: 0 }),
            t
              .to(e, 0.5, { opacity: 1, x: 0 })
              .to(o, 0.5, { opacity: 1, x: 0 })
              .set(i, { opacity: 1 })
              .to(i, 0.5, { scaleY: 1 })
              .to(n, 0.5, { opacity: 1, scale: 1 });
        },
      },
      shopSidebar: {
        selector: ".woo.sidebar",
        init: function () {
          S(this.selector).each(function () {
            var t = S(this).find(">h6");
            t.on("click", function () {
              t.toggleClass("active"),
                t.next().animate({ height: "toggle", opacity: "toggle" }, 300),
                S(".woo.sidebar")
                  .find(".custom_scroll")
                  .perfectScrollbar("update");
            });
          });
        },
      },
      shopLoading: {
        selector:
          ".post-type-archive-product ul.products.thb-main-products, .tax-product_cat ul.products.thb-main-products",
        thb_loading: !1,
        scrollInfinite: !1,
        href: !1,
        init: function () {
          var t = S(this.selector),
            e = themeajax.settings.shop_product_listing_pagination;
          S(".woocommerce-pagination").length &&
            (q.hasClass("post-type-archive-product") ||
              q.hasClass("tax-product_cat")) &&
            ("style2" === e
              ? this.loadButton(t)
              : "style3" === e && this.loadInfinite(t));
        },
        loadButton: function (o) {
          var i = this;
          S(".woocommerce-pagination").before(
            '<div class="thb_load_more_container text-center"><a class="thb_load_more button">' +
              themeajax.l10n.loadmore +
              "</a></div>"
          ),
            0 === S(".woocommerce-pagination a.next").length &&
              S(".thb_load_more_container").addClass("is-hidden"),
            S(".woocommerce-pagination").hide(),
            q.on("click", ".thb_load_more:not(.no-ajax)", function (t) {
              var e = S(this);
              return (
                (i.href = S(".woocommerce-pagination a.next").attr("href")),
                !1 === i.thb_loading &&
                  (e.html(themeajax.l10n.loading).addClass("loading"),
                  i.loadProducts(e, o)),
                !1
              );
            });
        },
        loadInfinite: function (t) {
          var e = this;
          0 === S(".woocommerce-pagination a.next").length &&
            S(".thb_load_more_container").addClass("is-hidden"),
            S(".woocommerce-pagination").hide(),
            (e.scrollInfinite = M.debounce(function () {
              !1 === e.thb_loading &&
                z.scrollTop() + z.height() + 150 >=
                  t.offset().top + t.outerHeight() &&
                ((e.href = S(".woocommerce-pagination a.next").attr("href")),
                e.loadProducts(!1, t, !0));
            }, 30)),
            z.on("scroll", e.scrollInfinite);
        },
        loadProducts: function (o, i, n) {
          var a = this;
          S.ajax(a.href, {
            method: "GET",
            beforeSend: function () {
              (a.thb_loading = !0), n && z.off("scroll", a.scrollInfinite);
            },
            success: function (t) {
              var e = S(t),
                t = e.find("ul.products.thb-main-products li");
              S(".woocommerce-pagination").html(
                e.find(".woocommerce-pagination").html()
              ),
                o
                  ? e.find(".woocommerce-pagination .next").length
                    ? o.html(themeajax.l10n.loadmore).removeClass("loading")
                    : o
                        .html(themeajax.l10n.nomore_products)
                        .removeClass("loading")
                        .addClass("no-ajax")
                  : n &&
                    e.find(".woocommerce-pagination .next").length &&
                    z.on("scroll", a.scrollInfinite),
                t.length &&
                  (t.addClass("will-animate").appendTo(i),
                  TweenMax.set(t, { opacity: 0, y: 30 }),
                  TweenMax.staggerTo(t, 0.3, { y: 0, opacity: 1 }, 0.15)),
                (a.thb_loading = !1);
            },
          });
        },
      },
      contact: {
        selector: ".contact_map",
        init: function () {
          var g = this;
          S(g.selector).each(function () {
            var d,
              e = S(this),
              t = e.next(".expand"),
              o = e.width(),
              i = e.data("map-zoom"),
              n = e.data("map-style"),
              a = e.data("map-type"),
              r = e.data("pan-control"),
              s = e.data("zoom-control"),
              l = e.data("maptype-control"),
              c = e.data("scale-control"),
              h = e.data("streetview-control"),
              p = e.find(".thb-location"),
              u = new google.maps.LatLngBounds(),
              a = {
                center: { lat: -34.397, lng: 150.644 },
                styles: n,
                zoom: i,
                draggable: !("ontouchend" in document),
                scrollwheel: !1,
                panControl: r,
                zoomControl: s,
                mapTypeControl: l,
                scaleControl: c,
                streetViewControl: h,
                mapTypeId: a,
                gestureHandling: "cooperative",
              },
              f = new google.maps.Map(e[0], a);
            f.addListener("tilesloaded", function () {
              d ||
                (p.each(function (t) {
                  var e = S(this).data("option"),
                    o = e.latitude,
                    i = e.longitude,
                    n = new google.maps.LatLng(o, i),
                    a = e.marker_image,
                    r = e.marker_size,
                    s = e.retina_marker,
                    l = e.marker_title,
                    c = e.marker_description,
                    e = new Image();
                  u.extend(n),
                    (e.src = a),
                    S(e).on("load", function () {
                      g.setMarkers(t, p.length, f, o, i, a, r, l, c, s);
                    }),
                    (d = !0);
                }),
                0 < i
                  ? (f.setCenter(u.getCenter()), f.setZoom(i))
                  : (f.setCenter(u.getCenter()), f.fitBounds(u)));
            }),
              t.toggle(
                function () {
                  var t = e.parents(".row").width();
                  return (
                    e.parents(".contact_map_parent").css("overflow", "visible"),
                    TweenLite.to(e, 1, {
                      width: t,
                      onUpdate: function () {
                        google.maps.event.trigger(f, "resize"),
                          f.setCenter(u.getCenter());
                      },
                    }),
                    !1
                  );
                },
                function () {
                  return (
                    TweenLite.to(e, 1, {
                      width: o,
                      onUpdate: function () {
                        google.maps.event.trigger(f, "resize"),
                          f.setCenter(u.getCenter());
                      },
                      onComplete: function () {
                        e.parents(".contact_map_parent").css(
                          "overflow",
                          "hidden"
                        );
                      },
                    }),
                    !1
                  );
                }
              ),
              z.on(
                "resize",
                M.debounce(function () {
                  f.setCenter(u.getCenter());
                }, 50)
              );
          });
        },
        setMarkers: function (t, e, n, a, r, s, l, c, d, h) {
          setTimeout(
            function (t) {
              var e = (e = s.toLowerCase().split("."))[e.length - 1];
              (S.inArray(e, ["svg"]) || h) &&
                (s = new google.maps.MarkerImage(
                  s,
                  null,
                  null,
                  null,
                  new google.maps.Size(l[0] / 2, l[1] / 2)
                ));
              var o = new google.maps.Marker({
                  position: new google.maps.LatLng(a, r),
                  map: n,
                  animation: google.maps.Animation.DROP,
                  icon: s,
                  optimized: !1,
                }),
                i = new google.maps.InfoWindow({
                  content: "<h3>" + c + "</h3><div>" + d + "</div>",
                });
              o.addListener("click", function () {
                i.open(n, o);
              });
            },
            250 * t,
            t
          );
        },
      },
      animation: {
        selector:
          ".animation, .thb-counter, .thb-iconbox, .thb-icon, .thb-highlight, .thb-fadetype, .thb-slidetype, .thb-autotype",
        init: function () {
          var t = this,
            e = S(t.selector);
          t.control(e),
            z
              .on("scroll.thb-animation", function () {
                t.control(e);
              })
              .trigger("scroll.thb-animation");
        },
        control: function (t) {
          var o = 0;
          t.filter(":in-viewport").each(function () {
            var t = S(this),
              e = {
                autoAlpha: 1,
                x: 0,
                y: 0,
                z: 0,
                rotationZ: "0deg",
                rotationX: "0deg",
                rotationY: "0deg",
                delay: 0.15 * o,
              };
            !0 !== t.data("thb-animated") &&
              (t.data("thb-animated", !0),
              t.hasClass("thb-iconbox") || t.hasClass("thb-icon")
                ? f.iconbox.control(t, 0.15 * o)
                : t.hasClass("thb-counter")
                ? f.counter.control(t, 0.15 * o)
                : t.hasClass("thb-autotype")
                ? f.autoType.control(t, 0.15 * o)
                : t.hasClass("thb-highlight")
                ? f.highlight.control(t, 0.15 * o)
                : t.hasClass("thb-fadetype")
                ? f.fadeType.control(t, 0.15 * o)
                : t.hasClass("thb-slidetype")
                ? f.slideType.control(t, 0.15 * o)
                : (t.hasClass("scale") && (e.scale = 1),
                  TweenMax.to(t, 0.75, e)),
              o++);
          });
        },
      },
      iconbox: {
        selector: ".thb-iconbox, .thb-icon",
        control: function (t, e) {
          var o, i, n, a, r;
          void 0 === t.data("thb-in-viewport") &&
            (t.data("thb-in-viewport", !0),
            (i =
              "" !== (o = t).data("animation_speed")
                ? o.data("animation_speed")
                : "1.5"),
            (a = (n = o.find("svg")).find("path, circle, rect, ellipse")),
            (r = o.find("h6")),
            (t = o.find("p")),
            (e = new TimelineMax({ delay: e, paused: !0 })),
            (t = r.add(t)),
            e.set(o, { visibility: "visible" }),
            n.length
              ? e
                  .set(n, { display: "block" })
                  .staggerFrom(a, i, { drawSVG: "0%" }, 0.2, "s")
              : e.from(o.find("img"), i, { autoAlpha: 0, y: "20px" }, "s"),
            e.staggerFrom(
              t,
              i / 2,
              { autoAlpha: 0, y: "20px" },
              0.1,
              "s+=" + i / 2
            ),
            e.play());
        },
      },
      counter: {
        selector: ".thb-counter",
        control: function (t, e) {
          var o, i, n, a, r, s, l;
          void 0 === t.data("thb-in-viewport") &&
            (t.data("thb-in-viewport", !0),
            (i = (o = t).find(".number")[0]),
            (n = o.find(".number").data("count")),
            (a = o.find(".number").data("speed")),
            (t = (r = o.find("svg")).find("path, circle, rect, ellipse")),
            (s = new Odometer({
              el: i,
              value: 0,
              duration: a,
              theme: "minimal",
            })),
            (l = new TimelineMax({ paused: !0 }))
              .set(o, { visibility: "visible" })
              .set(r, { display: "block" })
              .staggerFrom(t, a / 2e3, { drawSVG: "0%" }, a / 1e4, "s"),
            setTimeout(function () {
              l.play(), s.update(n);
            }, e));
        },
      },
      siteBarsPortfolio: {
        selector: ".site_bars_portfolio-on.active",
        init: function () {
          var t = S(this.selector),
            e = S(".thb-quick-portfolio", t),
            o = (S(".thb-quick-inner", e), S(".quick-portfolio", e)),
            i = new TimelineMax({
              paused: !0,
              onStart: function () {
                e.css("visibility", "visible");
              },
              onReverseComplete: function () {
                e.css("visibility", "hidden");
              },
            });
          i.staggerTo(o, 0.2, { x: 0 }, 0.05),
            t.hoverIntent(
              function () {
                i.restart();
              },
              function () {
                i.reverse();
              }
            );
        },
      },
      retinaJS: {
        selector: "img.retina_size:not(.retina_active)",
        init: function () {
          S(this.selector).each(function () {
            S(this)
              .attr("width", function () {
                return S(this).attr("width") / 2;
              })
              .addClass("retina_active");
          });
        },
      },
      toBottom: {
        selector: ".scroll-bottom",
        init: function () {
          S(this.selector).each(function () {
            var i = S(this);
            i.on("click", function () {
              var t = i.closest(".row"),
                e = t.outerHeight(),
                o = S(".header").outerHeight(),
                o = t.offset().top + e - o;
              return (
                TweenMax.to(z, 1, { scrollTo: { y: o, autoKill: !1 } }), !1
              );
            });
          });
        },
      },
      cookieBar: {
        selector: ".thb-cookie-bar",
        init: function () {
          var t = S(this.selector),
            e = S(".button", t);
          "hide" !== Cookies.get("thb-notio-cookiebar") &&
            TweenMax.to(t, 0.5, { opacity: "1", y: "0%" }),
            e.on("click", function () {
              return (
                Cookies.set("thb-notio-cookiebar", "hide", { expires: 30 }),
                TweenMax.to(t, 0.5, { opacity: "0", y: "100%" }),
                !1
              );
            });
        },
      },
      toTop: {
        selector: "#scroll_totop",
        init: function () {
          var t = this;
          S(t.selector).on("click", function () {
            return TweenMax.to(d, 1, { scrollTo: { y: 0, autoKill: !1 } }), !1;
          }),
            z.scroll(
              M.debounce(function () {
                t.control();
              }, 50)
            );
        },
        control: function () {
          var t = S(this.selector);
          j.height() - (z.scrollTop() + z.height()) < 300
            ? TweenMax.to(t, 0.2, { autoAlpha: 1 })
            : TweenMax.to(t, 0.2, { autoAlpha: 0 });
        },
      },
    }),
    S(function () {
      S("#vc_inline-anchor").length
        ? z.on("vc_reload", function () {
            f.init();
          })
        : f.init();
    });
})(jQuery, this, _);
